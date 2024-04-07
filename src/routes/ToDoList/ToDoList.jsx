import { Fragment, useState } from "react";
import Layout from "../../components/Layout/Layout";
import styles from "./toDoList.module.scss";
import ToDo from "../../components/ToDo/ToDo";
import btnStyle from "./../../components/ToDo/toDo.module.scss";
import ProgressBar from "../../components/ToDo/ProgressBar";

function ToDoList() {
  const [toDos, setToDos] = useState([
    { id: 1, title: "Турник", timesDone: 0, timesToDo: 5 },
    { id: 2, title: "Поесть", timesDone: 1, timesToDo: 3 },
    { id: 3, title: "Ещё что-нибудь", timesDone: 7, timesToDo: 10 },
  ]);
  const [warning, setWarning] = useState(false);

  let fakeAi = toDos[toDos.length - 1]?.id ?? 0;

  const stats = toDos.reduce(
    (total, el) => {
      total.timesDone += el.timesDone;
      total.timesToDo += el.timesToDo;
      return total;
    },
    { timesDone: 0, timesToDo: 0 }
  );

  let allDone;
  if (toDos.length > 0) {
    allDone = stats.timesDone >= stats.timesToDo;
  }
  // const allDone = toDos.every(todo => todo.timesDone >= todo.timesToDo);

  function onAddTimes(i) {
    const todo = toDos[i];
    if (todo.timesDone < todo.timesToDo) {
      setToDos(toDos.with(i, { ...todo, timesDone: todo.timesDone + 1 }));
    }
  }

  function addToDo(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const timesToDo = parseInt(e.target.timesToDo.value);
    if (title.length > 0 && !isNaN(timesToDo)) {
      setToDos([
        {
          id: ++fakeAi,
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

  function onDeleteToDo(i) {
    setToDos(toDos.filter((_, ind) => i !== ind));
  }

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
              <div className={styles["total-wrapper"]}>
                <div>
                  <span>Все дела:</span>
                  <ProgressBar
                    timesDone={stats.timesDone}
                    timesToDo={stats.timesToDo}
                  />
                </div>
                {allDone && <div className={styles.done}>Всё готово!</div>}
              </div>
            </div>
            {toDos.map((toDo, i) => (
              <ToDo
                {...toDo}
                key={i}
                addTimes={() => onAddTimes(i)}
                deleteToDo={() => onDeleteToDo(i)}
              />
            ))}
          </div>
        </main>
      </Layout>
    </Fragment>
  );
}

export default ToDoList;
