import { store }  from "../redux/store";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import Filter from './FilterContacts';
import { Provider } from "react-redux";
import css from './App.module.css';

  const App = () => { 
    return (
      <Provider store={store}>
        <div className={css.wrap}>
          <h1>Phonebook</h1>
          <ContactForm />
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </Provider>
    );
}

export default App;