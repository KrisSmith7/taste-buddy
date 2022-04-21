import React from "react";
import '../../assets/css/modal.css'

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <button type="button" onClick={handleClose}
          className="flex justify-end w-full">
          <span className="text-4xl font-bold text-rubyred">&times;</span>
          </button>
          {children}
        </section>
      </div>
    );
  };

  export default Modal;