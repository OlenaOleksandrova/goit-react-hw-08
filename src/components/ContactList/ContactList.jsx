import { useDispatch, useSelector } from "react-redux";

// import { selectFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { useEffect } from "react";

import { selectFilteredContactsMemo } from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = useSelector(selectFilteredContactsMemo);
  // const contacts = useSelector(state => state.contacts.items)
  // const filter = useSelector(selectFilter);
  // const filter = useSelector(state => state.contacts.filter)


  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <ul className={s.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;
