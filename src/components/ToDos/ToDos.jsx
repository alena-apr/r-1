
import styles from './toDos.module.scss';
import propTypes from 'prop-types';

ToDo.propTypes = {
    title: propTypes.string,
    timesDone: propTypes.number,
    timesToDo: propTypes.number,
    changeTimes: propTypes.func,
};

function ToDo({title, timesDone, timesToDo, changeTimes}) {
    
    function addTimes() {
        if (timesDone < timesToDo) {
            changeTimes(timesDone + 1)
        }
    }

    return (
        <div className={styles.card}>
            <div className={styles.title}>{title}</div>
            <div>
                <progress max={timesToDo} value={timesDone}>{timesDone}</progress>
            </div>
            
            <div className={styles['progress-number']}>{timesDone} / {timesToDo}</div>
            <div>
                <button className={styles.btn}
                onClick={addTimes}
                >I did it one more time!!</button>
            </div>
            
        </div>
    )
}

export default ToDo;