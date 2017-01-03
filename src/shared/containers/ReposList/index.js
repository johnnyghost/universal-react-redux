import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { repositoriesActionCreators }  from 'store/actions/';
import { getReposName } from 'store/selectors/repository';

/**
 * <ReposListContainer />
 *
 * @return {Object} the sideBar container
 */
class ReposListContainer extends Component {

  /**
   *
   */
  componentWillMount() {
    this.props.repositoriesActions.fetchReposRequest();
  }

  /**
   * Render.
   * @return {Object}
   */
  render():Object {

    return (
      <div>
        <div>ReposListContainer</div>
        {this.props.reposName && this.props.reposName.map((name:string, index: number):Object => {
          return <div key={index}>{ name }</div>
        })}
      </div>
    )
  }
}

/**
 * Will subscribe to Redux store updates
 *
 * @method
 *
 * @param  {Object} state Store’s state
 * @return {Object} and returns an object to be passed as props
 */
const mapStateToProps = (state:Object):Object => ({
  reposName: getReposName(state)
});

/**
 * Bound to the store.
 * Will be merged into the component’s props.
 *
 * @method
 *
 * @param {Function} dispatch Dispatch function
 * @return {Object}
 */
const mapDispatchToProps = (dispatch:Function):Object => ({
  repositoriesActions : bindActionCreators(repositoriesActionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReposListContainer);
