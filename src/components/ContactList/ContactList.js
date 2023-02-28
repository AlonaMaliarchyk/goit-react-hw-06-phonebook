import ContactItem from "../ContactItem";
import { useSelector} from "react-redux";
import { getContacts } from "../../redux/contactsSlice";
import { getFilterContact } from "../../redux/filtersSlice";

const ContactList = () => {
    
    const filter = useSelector(getFilterContact);
    const contacts = useSelector(getContacts).filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
    <div>
        <ul>
            {contacts.map((contact) => (
                <ContactItem
                    key={contact.id}
                    id={contact.id}
                    name={contact.name}
                    number={contact.number} />          
            ))}
        </ul>
    </div>
    )
}

export default ContactList;