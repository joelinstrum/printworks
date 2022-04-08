import "./Modal.scss";

const Modal = ({ children }) => {
  return (
    <div className="Modal__container">
      <div className="Modal__content">{children}</div>
    </div>
  );
};

export default Modal;
