import React from 'react';
import { useForm } from './UseForm';
import { validateForm } from './ValidateForm';

const Form = () => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(
    {
      name: '',
      email: '',
      age: '',
      attendingWithGuest: false,
      guestName: '',
    },
    validateForm
  );

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={values.age}
          onChange={handleChange}
        />
        {errors.age && <p>{errors.age}</p>}
      </div>
      <div>
        <label>Are you attending with a guest?</label>
        <input
          type="checkbox"
          name="attendingWithGuest"
          checked={values.attendingWithGuest}
          onChange={handleChange}
        />
      </div>
      {values.attendingWithGuest && (
        <div>
          <label>Guest Name:</label>
          <input
            type="text"
            name="guestName"
            value={values.guestName}
            onChange={handleChange}
          />
          {errors.guestName && <p>{errors.guestName}</p>}
        </div>
      )}
      <button type="submit">Submit</button>
      {Object.keys(errors).length === 0 && (
        <div>
          <h2>Summary</h2>
          <p>Name: {values.name}</p>
          <p>Email: {values.email}</p>
          <p>Age: {values.age}</p>
          {values.attendingWithGuest && <p>Guest Name: {values.guestName}</p>}
        </div>
      )}
    </form>
  );
};

export default Form;
