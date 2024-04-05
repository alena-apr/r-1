import styles from "./toDo.module.scss";
import propTypes from "prop-types";

ToDo.propTypes = {
  title: propTypes.string,
  timesDone: propTypes.number,
  timesToDo: propTypes.number,
  changeTimes: propTypes.func,
  onDeleteToDo: propTypes.func
};

function ToDo({ title, timesDone, timesToDo, changeTimes, onDeleteToDo }) {
  function addTimes() {
    if (timesDone < timesToDo) {
      changeTimes(timesDone + 1);
    }
  }

  function deleteToDo() {
    onDeleteToDo()
  }

  let bgCardColor = `${styles.card}`;
  if (timesDone / timesToDo <= 1 / 4) {
    bgCardColor += ` ${styles.red}`;
  } else if (
    timesDone / timesToDo >= 1 / 4 &&
    timesDone / timesToDo <= 1 / 1.33
  ) {
    bgCardColor += ` ${styles.yellow}`;
  } else {
    bgCardColor += ` ${styles.green}`;
  }

  return (
    <div className={bgCardColor}>
      <div className={styles['title-wrapper']}>
        <div className={styles.title}>{title}</div>
      <span className={styles.delete}
            onClick={deleteToDo}
      ></span>
      </div>
      
      <div>
        <progress max={timesToDo} value={timesDone}>
          {timesDone}
        </progress>
      </div>
      <div className={styles["progress-number"]}>
        {timesDone} / {timesToDo}
      </div>
      <div>
        {timesToDo === timesDone ? (
          <span>All done!</span>
        ) : (
          <button className={styles.btn} onClick={addTimes}>
            I did it!!
          </button>
        )}
      </div>
    </div>
  );
}

export default ToDo;
