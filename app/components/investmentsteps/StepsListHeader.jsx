import React, { PropTypes } from 'react';
import StepsList from './StepsList';
import Checkbox from 'material-ui/Checkbox';
import classNames from 'classnames/bind';
import styles from '../../css/components/investmentsteps/steps-list-header';

const cx = classNames.bind(styles);

const StepsListHeader = ({showWholeUnits, showPartialUnits, showCashAmounts, changeShowWholeUnits, changeShowPartialUnits, changeShowCashAmounts, rebalancingSteps}) => {

  const getStepsListHeader = function getStepsListHeader() {
    if (!rebalancingSteps.balanceByInvesting) {
      return null;
    }
    return (<div>
              
            </div>);
  };
  const stepsListHeaderElements = getStepsListHeader();

  return (
    <div>
      { stepsListHeader }
    </div>
    );
};

StepsListHeader.propTypes = {
  showWholeUnits: PropTypes.bool.isRequired,
  showPartialUnits: PropTypes.bool.isRequired,
  showCashAmounts: PropTypes.bool.isRequired,
  changeShowWholeUnits: PropTypes.func.isRequired,
  changeShowPartialUnits: PropTypes.func.isRequired,
  changeShowCashAmounts: PropTypes.func.isRequired,
  rebalancingSteps: PropTypes.object.isRequired,
};

export default StepsListHeader;
