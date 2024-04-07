import propTypes from "prop-types";
import styles from './toDo.module.scss'

ProgressBar.propTypes = {
    timesDone: propTypes.number.isRequired,
    timesToDo: propTypes.number.isRequired,
}

function ProgressBar({ timesDone, timesToDo }) {
    
    return <div>
    <progress className={styles.progress} value={timesDone} max={timesToDo} >
      {timesDone}
    </progress>
  </div>
}

export default ProgressBar;