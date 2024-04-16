import { Fragment, useState } from "react";
import Layout from "../../components/Layout/Layout";
import styles from './modal.module.scss'
import main from "./../Form/form.module.scss";
import btn from "./../Form/form.module.scss";
import ModalUI from "../../components/ModalUI/ModalUI";

function Modal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      <Layout>
        <main className={main.main}>
          <button
            className={btn.btn}
            onClick={() => setShowModal(!showModal)}
          >
            Открыть модальное окно
          </button>
          {showModal && (
            <ModalUI>
              <ModalUI.Header>
                Я заголовок модалки
                <span
                  className={styles["close-modal"]}
                  onClick={() => setShowModal(!showModal)}
                ></span>
              </ModalUI.Header>
              <ModalUI.Content>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  ut voluptas ad vel dolore explicabo quisquam recusandae
                  ratione alias, a, ab asperiores molestias doloribus obcaecati
                  commodi voluptates minima accusamus molestiae.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  ut voluptas ad vel dolore explicabo quisquam recusandae
                  ratione alias, a, ab asperiores molestias doloribus obcaecati
                  commodi voluptates minima accusamus molestiae.
                </p>
              </ModalUI.Content>
              <ModalUI.Footer>
                <button
                  className={btn.btn}
                  onClick={() => setShowModal(!showModal)}
                >
                  Закрыть модалку
                </button>
                <button className={btn.btn}>Заглушка</button>
              </ModalUI.Footer>
            </ModalUI>
          )}
        </main>
      </Layout>
    </Fragment>
  );
}

export default Modal;
