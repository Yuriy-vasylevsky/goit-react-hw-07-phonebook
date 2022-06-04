import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import React, { useState } from 'react';
import Section from './Components/Section/Section ';
import Forms from './Components/Form/Forms';
import PhoneList from './Components/PhoneList/PhoneList';
import FilterInput from './Components/FilterInput/FilterInput';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContact } from './redux/contact/contact-operations';
// import Modal from './Components/Modal/modal';
// import { getItems, getFilter } from './redux/contact/contact-selectors';
// import { useSelector } from 'react-redux';
// import { addNumber } from './redux/contact/contact-action';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <div className="box">
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
