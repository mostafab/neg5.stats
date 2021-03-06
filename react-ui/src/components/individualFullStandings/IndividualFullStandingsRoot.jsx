import React from 'react';

import IndividualFullStandingsContent from './IndividualFullStandingsContent';

export default class IndividualFullStandingsRoot extends React.Component {
  
  componentDidMount() {
    const tournamentId = this.props.match.params.tournamentId;
    if (typeof this.props.selectedPhaseId !== 'undefined' && this.props.numTimesStatsReceived < 1) {
      this.props.requestFullIndividualStandings(tournamentId, this.props.selectedPhaseId);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const oldPhaseId = prevProps.selectedPhaseId;
    const currentPhaseId = this.props.selectedPhaseId;
    if (oldPhaseId !== currentPhaseId) {
      this.props.requestFullIndividualStandings(this.props.match.params.tournamentId, currentPhaseId);
    }
    if (this.props.tournamentInfo.name) {
      document.title = `${this.props.tournamentInfo.name} Full Individual Standings | Neg 5 Stats`;
    }
  }

  render() {
    const { fullIndividualStats, tossupValues, tournamentInfo, usesNegs } = this.props;
    return (
      <div className='IndividualFullStandingsRoot'>
        <h3> { tournamentInfo.name || ''} Full Player Standings </h3>
        <IndividualFullStandingsContent fullIndividualStats={fullIndividualStats} tossupValues={tossupValues} usesNegs={usesNegs}/>
      </div>
    )
  }
};
