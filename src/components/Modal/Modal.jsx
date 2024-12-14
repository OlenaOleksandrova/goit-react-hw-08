import React from 'react';
import s from './Modal.module.css';

const Modal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className={s.overlay}>
      <div className={s.modal}>
        <p>Are you sure you want to delete this contact?</p>
        <div className={s.actions}>
          <button onClick={onConfirm} className={s.confirm}>
            Yes
          </button>
          <button onClick={onClose} className={s.cancel}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;