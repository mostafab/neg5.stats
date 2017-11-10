import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { requestFullIndividualStandings } from '../../modules/fullIndividualStandings/actions';

import { setInitialPhaseOnLoad } from '../../modules/tournamentStatsWrapper/actions';

import IndividualFullStandingsRoot from '../../components/individualFullStandings/IndividualFullStandingsRoot';

const mapStateToProps = state => ({
  selectedPhaseId: state.globalState.selectedPhaseId,
  tossupValues: state.globalState.tossupValues,
  fullIndividualStats: state.individualFullStandings.fullIndividualStats,
  requestingFullIndividualStandings: state.individualFullStandings.requestingFullIndividualStandings,
  numTimesStatsReceived: state.individualFullStandings.numTimesStatsReceived,
  tournamentInfo: state.globalState.loadedTournament,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setInitialPhaseOnLoad,
  requestFullIndividualStandings,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndividualFullStandingsRoot);

