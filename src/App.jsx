// import ContactForm from "./components/ContactForm/ContactForm";
// import SearchBox from "./components/SearchBox/SearchBox";
// import ContactList from "./components/ContactList/ContactList";
import "./App.css";
import Layout from "./components/Layout";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import HomePage from "./pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import PrivateRoute from "./components/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute";
// import { selectIsLoading } from "./redux/contacts/slice";
// import { useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  // const isLoading = useSelector(selectIsLoading);
  return isRefreshing ? null : (
    <> 
    <ToastContainer />
     <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}/>
        <Route path="/contacts" element={<PrivateRoute><ContactsPage /></PrivateRoute>} />
        </Route>
        <Route path="/login" element={<RestrictedRoute component={<LoginPage />} redirectTo='/contacts' />} />
        <Route path="/register" element={<RestrictedRoute component={<RegistrationPage />} redirectTo='/contacts' />} />
      </Routes>
    </>
    
    // <div>
    //   <h1>Phonebook</h1>
    //   <ContactForm />
    //   <SearchBox />
    //   {isLoading && <h2>Loading...</h2>}
    //   <ContactList />
    // </div>
  );
};

export default App;