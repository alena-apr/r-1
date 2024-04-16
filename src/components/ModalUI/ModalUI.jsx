import pt from "prop-types";
import styles from "./modalUI.module.scss";

[
  ModalUI.propTypes,
  ModalUIHeader.propTypes,
  ModalUIContent.propTypes,
  ModalUIFooter.propTypes,
].forEach(el => {
  el = { children: pt.oneOfType([pt.arrayOf(pt.node), pt.node]) };
});

ModalUI.Header = ModalUIHeader;
ModalUI.Content = ModalUIContent;
ModalUI.Footer = ModalUIFooter;

function ModalUI({ children }) {
  const headerChildren = children?.filter(
    (child) => child.type == ModalUI.Header
  );
  const contentChildren = children?.filter(
    (child) => child.type == ModalUI.Content
  );
  const footerChildren = children?.filter(
    (child) => child.type == ModalUI.Footer
  );

  return (
    <>
      <div className={styles["modal-bg"]} onClick={(e) => (e.target === "modal-bg" ? onClick() : null)}>
        <div className={styles["modal-wrapper"]}>
          <div className={styles.modal}>
            <div className={styles.header}>{headerChildren}</div>
            <div className={styles.content}>{contentChildren}</div>
            <div className={styles.footer}>{footerChildren}</div>
          </div>
        </div>
      </div>
    </>
  );
}

function ModalUIHeader({ children }) {
  return <>{children}</>;
}

function ModalUIContent({ children }) {
  return <>{children}</>;
}

function ModalUIFooter({ children }) {
  return <>{children}</>;
}

export default ModalUI;
