import React from 'react'
import ContactForm from '../../components/ContactForm/ContactForm'
// import SearchBox from '../../components/SearchBox/SearchBox';
// import ContactList from '../../components/ContactList/ContactList';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn} from '../../redux/auth/selectors'

const ContactsPage = () => {
  const isLoggedIn = useSelector( selectIsLoggedIn);
  if (!isLoggedIn) {
    return <p>Будь ласка, увійдіть до системи</p>;
  }
  return (
    <div><ContactForm />
      {/* <SearchBox />
      <ContactList /> */}
    </div>
  )
}

export default ContactsPage