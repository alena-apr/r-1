import { Fragment, useState } from "react";
import Layout from "../../components/Layout/Layout";
import styles from "./toDoList.module.scss";
import ToDo from "../../components/ToDo/ToDo";
import btnStyle from "./../../components/ToDo/toDo.module.scss";

function ToDoList() {
  const [toDos, setToDos] = useState([
    { title: "Турник", timesDone: 0, timesToDo: 5},
    { title: "Поесть", timesDone: 1, timesToDo: 3},
    { title: "Ещё что-нибудь", timesDone: 7, timesToDo: 10},
  ]);
  const [warning, setWarning] = useState(false);

  function setTimesDone(i, timesDone) {
    setToDos(toDos.with(i, { ...toDos[i], timesDone }));
  }

  function addToDo(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const timesToDo = parseInt(e.target.timesToDo.value);
    if (title.length > 0 && !isNaN(timesToDo)) {
      setToDos([
        {
          title,
          timesDone: 0,
          timesToDo,
        },
        ...toDos,
      ]);
      setWarning(false);
    } else {
      setWarning(true);
    }
    e.target.reset();
  }

//   function handleDeleteToDo(i) {
//     setToDos(toDos.filter((toDo) => {toDo !== toDos[i]})
//       )
//   }

  return (
    <Fragment>
      <Layout>
        <main>
          <div className={styles.main}>
            <div className={styles["todos-header"]}>
              <div className={styles.title}>My todo list</div>
              <form className={styles["add-todo-wrapper"]} onSubmit={addToDo}>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="что мне надо сделать"
                  name="title"
                />
                <input
                  type="text"
                  className={styles.input}
                  placeholder="сколько раз"
                  name="timesToDo"
                />
                <button className={btnStyle.btn} type="submit">
                  Добавить
                </button>
              </form>
              {warning && (
                <div className={styles.warning}>Впиши буковки и циферки</div>
              )}
            </div>
            {toDos.map((toDo, i) => (
              <ToDo
                {...toDo}
                key={i}
                changeTimes={(newTimes) => setTimesDone(i, newTimes)}
                // onDeleteToDo={() => handleDeleteToDo(i)}
              />
            ))}
          </div>
        </main>
      </Layout>
    </Fragment>
  );
}

export default ToDoList;
