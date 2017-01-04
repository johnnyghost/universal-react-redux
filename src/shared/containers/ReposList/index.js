import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { repositoriesActionCreators }  from 'store/actions/';
import { RepositoryCardList } from 'components';

/**
 * Repos list container type
 * @type {Object}
 */
type ReposListContainerType = {
  repositoriesActions: Object,
  repos: Array<Object>
};

/**
 * <ReposListContainer />
 *
 * @return {Object} the sideBar container
 */
class ReposListContainer extends Component {
  props: ReposListContainerType;

  /**
   * Component will mount
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
        <RepositoryCardList repos={this.props.repos} />
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
  repos: state.repository.list
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
