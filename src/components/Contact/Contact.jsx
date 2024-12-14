import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import s from "./Contact.module.css";
import { HiUser, HiPhone } from "react-icons/hi";
import Modal from "../Modal/Modal";
import { toast } from "react-toastify";
import { useState } from "react";

const Contact = ({ id, name, number }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

   const handleDelete = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast.success(`Contact "${name}" deleted successfully!`);
      })
      .catch(() => {
        toast.error('delete the contact');
      });
     setIsModalOpen(false);
  };

  return (
    <> 
    <li className={s.listItem}>
      <div className={s.contactInfo}>
        <span className={s.contactName}>
          <HiUser /> {name}:
        </span>
        <span className={s.contactNumber}>
          <HiPhone /> {number}
        </span>
      </div>
      <button
        className={s.button}
        // onClick={() => dispatch(deleteContact(id))}
        onClick={() => setIsModalOpen(true)}
      >
        Delete
      </button>
    </li>
    <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleDelete}
      />
      </>
  );
};

export default Contact;
