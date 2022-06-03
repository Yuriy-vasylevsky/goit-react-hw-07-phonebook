import './PhoneList.css';
import Button from 'react-bootstrap/Button';
import { getFilteredContact } from '../../redux/contact/contact-selectors';
import { useDispatch, useSelector } from 'react-redux';
import { delNumber } from '../../redux/contact/contact-action';

export default function PhoneList() {
  const dispatch = useDispatch();
  const filteredContact = useSelector(getFilteredContact);

  return (
    <div className="phoneList">
      <ul className="list">
        {filteredContact.map(item => {
          return (
            <li key={item.id} className="item">
              {item.name} : {item.number}
              <Button
                className="btn-my"
                onClick={() => dispatch(delNumber(item.id))}
                variant="primary"
              >
                Удалить
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
