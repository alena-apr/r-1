import { Fragment, useState } from "react";
import Layout from "../../components/Layout/Layout";
import styles from './toDoList.module.scss'
import ToDo from "../../components/ToDos/ToDos";

function ToDoList() {
    const [toDos, setToDos] = useState([
        {title: 'Турник' , timesDone: 0, timesToDo: 5},
        {title: 'Поесть', timesDone: 1, timesToDo: 3},
        {title: 'Ещё что-нибудь', timesDone: 7, timesToDo: 10},
    ])

    function setTimesDone(i, timesDone) {
        setToDos( toDos.with(i, { ...toDos[i], timesDone }) );
    }

    let toDosElem = toDos.map((toDo,i) => <ToDo 
		{...toDo}
		changeTimes={newTimes => setTimesDone(i, newTimes)} 
		key={i}
	/>)

    return (
        <Fragment>
            <Layout>
                <main>
                    <div className={styles.main}>
                        <div className={styles.title}>My todo list</div>
                        {toDosElem}
                    </div>
                </main>
            </Layout>
        </Fragment>
    )
}

export default ToDoList;