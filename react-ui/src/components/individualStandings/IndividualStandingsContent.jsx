import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

import IndividualStatsTable from './IndividualStatsTable';

export default class IndividualStandingsContent extends React.Component {

  static propTypes = {
    individualStats: PropTypes.arrayOf(PropTypes.object).isRequired,
    phaseId: PropTypes.string.isRequired,
    tournamentId: PropTypes.string.isRequired,
    tossupValues: PropTypes.arrayOf(PropTypes.object).isRequired,
    slug: PropTypes.string.isRequired,
    usesNegs: PropTypes.bool,
  }

  render() {
    const { individualStats, phaseId, tournamentId, tossupValues, slug, usesNegs } = this.props;
    return (
      <Row className='IndividualStandingsContent'>
        <Col lg={12} md={12} sm={12}>
          <IndividualStatsTable
            slug={slug}
            individualStats={ individualStats }
            phaseId={ phaseId }
            tournamentId={ tournamentId }
            usesNegs={usesNegs}
            tossupValues={ tossupValues }/>
        </Col>
      </Row>
    )
  }
};
