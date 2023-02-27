import ContactItem from "../ContactItem";
import { useSelector, useDispatch } from "react-redux";
import { getContacts, deleteContact } from "../../redux/contactsSlice";
import { getFilterContact } from "../../redux/filtersSlice";

const ContactList = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilterContact);
    const contacts = useSelector(getContacts).filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    const deleteHandler = (contactId) => {
        dispatch(deleteContact(contactId));
    }

    return (
    <div>
        <ul>
            {contacts.map((contact) => (
                <ContactItem
                    key={contact.id}
                    id={contact.id}
                    name={contact.name}
                    number={contact.number}
                    deleteHandler={deleteHandler} />          
            ))}
        </ul>
    </div>
    )
}

export default ContactList;