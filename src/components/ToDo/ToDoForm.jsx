import propTypes from "prop-types";
import btnStyle from "./toDo.module.scss";
import styles from "./../../routes/ToDoList/toDoList.module.scss";
import { useState } from "react";
ToDoForm.propTypes = {
  send: propTypes.func.isRequired,
};

function ToDoForm({ send }) {
  const [fields, setFields] = useState([
    {
      name: "title",
      type: "text",
      value: "",
      placeholder: "что сделать",
      upd: (value) => value,
    },
    {
      name: "timesToDo",
      type: "number",
      value: 1,
      placeholder: "сколько раз",
      upd: (value) => parseInt(value),
    },
  ]);

  function update(i, strValue) {
    // const value = fields[i].type === 'number' ? parseInt(strValue) : strValue;
    const value = fields[i].upd(strValue);
    setFields(fields.with(i, { ...fields[i], value }));
  }

  function onSend() {
    console.log(fields);
    const data = {};
    fields.forEach((field) => (data[field.name] = field.value));
    console.log(data);
    send(data);
  }

  //   function onSubmit(e) {
  //     e.preventDefault();
  //     const form = new FormData(e.target);
  //     const data = {
  //       title: form.get("title"),
  //       timesToDo: parseInt(form.get("timesToDo")),
  //     };
  //     send(data);
  //   }

  return (
    <form className={styles["add-todo-wrapper"]}>
      {fields.map((item, i) => (
        <input
          key={item.name}
          name={item.name}
          type={item.type}
          placeholder={item.placeholder}
          className={styles.input}
          onChange={(e) => update(i, e.target.value)}
        />
      ))}
      <button className={btnStyle.btn} type="button" onClick={onSend}>
        Добавить
      </button>
    </form>
  );
}

export default ToDoForm;
