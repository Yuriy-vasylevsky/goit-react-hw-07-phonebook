import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import React, { useState } from 'react';
import Section from './Components/Section/Section ';
import Forms from './Components/Form/Forms';
import PhoneList from './Components/PhoneList/PhoneList';
import FilterInput from './Components/FilterInput/FilterInput';
// import Modal from './Components/Modal/modal';
// import { getItems, getFilter } from './redux/contact/contact-selectors';
// import { useSelector } from 'react-redux';
// import { addNumber } from './redux/contact/contact-action';

export default function App() {
  // const [modal, setModal] = useState(false);
  // const items = useSelector(getItems);
  // const filter = useSelector(getFilter);
  // const dispatch = useDispatch();

  // const addNumbers = obj => {
  //   if (
  //     items.find(({ name }) => {
  //       return name === obj.name;
  //     })
  //   ) {
  //     return openModal();
  //   }
  //   dispatch(addNumber(obj));
  // };

  // const openModal = () => {
  //   setModal(modal => !modal);
  // };

  // const filteredContact = () => {
  //   let filtered = items.filter(contact => {
  //     return contact.name.toLowerCase().includes(filter.toLowerCase());
  //   });

  //   return filtered;
  // };

  return (
    <div className="box">
      {/* {modal && <Modal openModal={openModal} />} */}
      <Section title="Телефонная книга">
        <Forms />
      </Section>
      <Section title="Знайти">
        <FilterInput />
      </Section>
      <Section title="Номера телефонов">
        <PhoneList />
      </Section>
    </div>
  );
}
