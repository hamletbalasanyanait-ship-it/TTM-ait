import { useState } from 'react';
import { isValidName, isValidPhone } from './validators';

export default function JoinForm({ planName, onSuccess }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = {};
    if (!isValidName(name)) next.name = 'Մուտքագրեք անունը';
    if (!isValidPhone(phone)) next.phone = 'Օրինակ՝ +37491123456 կամ 091123456';
    setErrors(next);
    if (Object.keys(next).length === 0) onSuccess({ name, phone, planName });
  };

  return (
    <form className="join-form" onSubmit={handleSubmit} noValidate>
      <label>
        Անուն
        <input value={name} onChange={(e) => setName(e.target.value)} />
        {errors.name && <span className="join-form__error">{errors.name}</span>}
      </label>
      <label>
        Հեռախոս
        <input value={phone} onChange={(e) => setPhone(e.target.value)} />
        {errors.phone && <span className="join-form__error">{errors.phone}</span>}
      </label>
      <button type="submit" className="tv-combo__join">Ուղարկել հայտը</button>
    </form>
  );
}