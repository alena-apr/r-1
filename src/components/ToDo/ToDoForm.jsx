import propTypes from "prop-types";
import btnStyle from "./toDo.module.scss";
import styles from "./../../routes/ToDoList/toDoList.module.scss";
ToDoForm.propTypes = {
  send: propTypes.func.isRequired,
};

function ToDoForm({ send }) {

  function onSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const data = {
      title: form.get('title'),
      timesToDo: parseInt(form.get('timesToDo')),
    };
    send(data);
  }

  return (
    <form className={styles["add-todo-wrapper"]} onSubmit={onSubmit}>
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
  );
}

export default ToDoForm;
