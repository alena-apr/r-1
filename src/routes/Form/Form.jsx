import { Fragment, useState } from "react";
import Layout from "../../components/Layout/Layout";
import styles from "./form.module.scss";
import { useNavigate  } from 'react-router-dom'

function Form() {
  const [fields, setFields] = useState([
    {
      name: "name",
      type: "text",
      value: "",
      label: "Имя",
      regEx: /^[a-zа-яё\- ]+$/i,
      valid: true,
      warnText: "Неверно введено имя",
    },
    {
      name: "email",
      type: "text",
      value: "",
      label: "Email",
      regEx: /.+@.+\..+/i,
      valid: true,
      warnText: "Неверно введен email",
    },
    {
      name: "tel",
      type: "text",
      value: "",
      label: "Телефон",
      regEx: /^[0-9]+$/,
      valid: true,
      warnText: "Неверно введен телефон",
    },
  ]);
    const [guests, setGuests] = useState([]);
    const navigate = useNavigate()
//   const [showGuests, setShowGuessts] = useState(false);
  //   let fakeAi = guests[guests.length - 1]?.id ?? 0;

  //const [warning, setWarning] = useState(false);

  function updateField(i, value) {
    const validField = fields[i].regEx.test(fields[i].value);

    // !valid ? setWarning(true) : null;
    setFields(fields.with(i, { ...fields[i], value, valid: validField }));

    console.log(i, value);
  }

  function updateGuest(i, value) {
    const validGuest = guests[i].regEx.test(guests[i].value);
    setGuests(guests.with(i, { ...guests[i], value, valid: validGuest }));
    console.log(i, value);
  }

  function onGuestAdd() {
    setGuests([
      ...guests,
      //   {
      //     id: ++fakeAi,
      //       name:
      {
        name: "name",
        type: "text",
        value: "",
        label: "Имя",
        regEx: /^[a-zа-яё\- ]+$/i,
        valid: true,
        warnText: "Неверно введено имя",
      },
      //   age:
      {
        name: "age",
        type: "text",
        value: "",
        label: "Возраст",
        regEx: /^\d+$/,
        valid: true,
        warnText: "Неверно введен возраст",
      },
      //   },
    ]);
  }

  function onSend(e) {
    e.preventDefault();
    console.log(fields);
    const dataFields = {};
    const dataGuests = {};
    fields.forEach((field) => (dataFields[field.name] = field.value));
    guests.forEach((guest) => (dataGuests[guest.name] = guest.value));
      console.log(dataFields, dataGuests);
      navigate('/form/formInfo')
  }

  return (
    <Fragment>
      <Layout>
        <main className={styles.main}>
          <div className={styles.title}>Форма</div>
          <form className={styles.form}>
            {fields.map((field, i) => (
              <label key={field.name} className={styles.label}>
                <span>{field.label}:</span>
                <input
                  className={`${styles.input} ${
                    field.valid ? "" : `${styles.red}`
                  }`}
                  type={field.type}
                  name={field.name}
                  onChange={(e) => updateField(i, e.target.value)}
                />
                {/* <div>
                        {warning && (<div>{field[i].warnText}</div>)}
                    </div> */}
              </label>
            ))}
            <div className={styles["guests-wrapper"]}>
              <span>Гости? </span>
              <button
                className={`${styles.btn} ${styles["btn-small"]}`}
                onClick={(e) => {
                  e.preventDefault(), onGuestAdd();
                }}
              >
                Добавить гостя!
              </button>
                <div>
                  {guests.map((guest, i) => (
                    <label key={`${i}-guest`} className={styles.label}>
                      <span>{guest.label}:</span>
                      <input
                        className={`${styles.input} ${
                          guest.valid ? "" : `${styles.red}`
                        }`}
                        type={guest.type}
                        name={guest.name}
                        onChange={(e) => updateGuest(i, e.target.value)}
                      />
                    </label>
                  ))}
                </div>
            </div>
            <div className={styles["btn-wrapper"]}>
              <button className={styles.btn} onClick={(e) => onSend(e)}>
                Отправить
              </button>
            </div>
          </form>
        </main>
      </Layout>
    </Fragment>
  );
}

export default Form;
