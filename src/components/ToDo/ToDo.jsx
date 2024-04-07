import ProgressBar from "./ProgressBar";
import styles from "./toDo.module.scss";
import propTypes from "prop-types";

ToDo.propTypes = {
  title: propTypes.string.isRequired,
  timesDone: propTypes.number.isRequired,
  timesToDo: propTypes.number.isRequired,
  addTimes: propTypes.func.isRequired,
  deleteToDo: propTypes.func.isRequired,
};

function ToDo({ title, timesDone, timesToDo, addTimes, deleteToDo }) {
  const rel = timesDone / timesToDo;
  let bgCardColor = `${styles.card}`;
  const isDone = rel >= 1;

  rel < 0.25
    ? (bgCardColor += ` ${styles.red}`)
    : rel > 0.75
    ? (bgCardColor += ` ${styles.green}`)
    : (bgCardColor += ` ${styles.yellow}`);

  return (
    <div className={bgCardColor}>
      <div className={styles["title-wrapper"]}>
        <div className={styles.title}>{title}</div>
        <span className={styles.delete} onClick={deleteToDo}></span>
      </div>

      <div>
        <ProgressBar timesDone={timesDone} timesToDo={timesToDo} />
      </div>
      <div className={styles["progress-number"]}>
        {timesDone} / {timesToDo}
      </div>
      <div>
        {!isDone && (
          <button className={styles.btn} onClick={addTimes}>
            I did it!!
          </button>
        )}
        {isDone && <span>All done!</span>}
      </div>
    </div>
  );
}

export default ToDo;
