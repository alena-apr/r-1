import { Fragment, useState } from "react";
import Layout from "../../components/Layout/Layout";
// import styles from './toDoList.module.scss'
import ToDo from "../../components/ToDos/ToDos";

function ToDoList() {
    const [toDos, setToDos] = useState([
        {title: 'Турник' , timesDone: 0, timesToDo: 5, id: 1},
        {title: 'Поесть', timesDone: 1, timesToDo: 3, id: 2},
        {title: 'Ещё что-нибудь', timesDone: 7, timesToDo: 10, id: 3},
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
                    <div>
                        {toDosElem}
                    </div>
                </main>
            </Layout>
        </Fragment>
    )
}

export default ToDoList;