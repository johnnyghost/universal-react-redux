import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Card } from 'components';

type RepositoryCardListType = {
  repos: Array<Object>
};

/**
 * Render the list of Cards.
 *
 * @param {Object} repos The repos
 * @return {JSXElement}
 */
const renderList = (repos:Object):Object => {
  return repos.map((repo:Object, index: number):Object => (
    <Col
      key={index}
      xs={12}
      md={4}
    >
      <Card
        title={repo.name}
        description={repo.description}
      />
    </Col>
  ))
}

/**
 * <RepositoryCardList />
 * Render a list of Cards with info
 * of the repositories.
 *
 * @return {JSXElement}
 */
const RepositoryCardList = ({
  repos
}:RepositoryCardListType):?Object => {
  return (
    <Row> {renderList(repos)} </Row>
  )
}

export default RepositoryCardList;
