import { useState } from 'react';
import styles from './toDos.module.scss';
import propTypes, { string } from 'prop-types';

ToDo.propTypes = {
    title: propTypes.string,
    timesDone: propTypes.number,
    timesToDo: propTypes.number,
    changeTimes: propTypes.func,
};

function ToDo({title, timesDone, timesToDo, id, changeTimes}) {
    
    function addTimes() {
        if (timesDone < timesToDo) {
            changeTimes(timesDone + 1)
        }
    }

    return (
        <div className='card'>
            <span>{title}</span>
            <br />
            <span>some beauty</span>
            <br />
            {timesDone} / {timesToDo}
            <br />
            <button className='done-btn'
            onClick={addTimes}
            >I did it one more time!!</button>
        </div>
    )
}

export default ToDo;