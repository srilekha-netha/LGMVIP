// StudentForm.js

import React, { useState } from 'react';
import './App.css';

const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    imageLink: '',
    gender: 'male',
    skills: [],
  });

  const onChangeHandler = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === 'checkbox') {
      if (checked) {
        setFormData((prevData) => ({
          ...prevData,
          skills: [...prevData.skills, value],
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          skills: prevData.skills.filter((skill) => skill !== value),
        }));
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // Here you can handle form submission, e.g., send data to a server or perform other actions
    console.log('Form Data:', formData);
  };

  const onClearHandler = () => {
    setFormData({
      name: '',
      email: '',
      imageLink: '',
      gender: 'male',
      skills: [],
    });
  };

  return (
    <div className="student-form-container">
      <form className="student-form" onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={onChangeHandler} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={onChangeHandler} required />
        </div>
        <div className="form-group">
          <label htmlFor="imageLink">Image Link:</label>
          <input type="text" id="imageLink" name="imageLink" value={formData.imageLink} onChange={onChangeHandler} />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <div>
            <input type="radio" id="male" name="gender" value="male" onChange={onChangeHandler} checked={formData.gender === 'male'} />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input type="radio" id="female" name="gender" value="female" onChange={onChangeHandler} checked={formData.gender === 'female'} />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <div>
            <input type="radio" id="female" name="gender" value="other" onChange={onChangeHandler} checked={formData.gender === 'other'} />
            <label htmlFor="female">Other</label>
          </div>
        <div className="form-group">
          <label>Skills:</label>
          <div>
            <input type="checkbox" id="html" name="skills" value="HTML" onChange={onChangeHandler} checked={formData.skills.includes('HTML')} />
            <label htmlFor="html">HTML</label>
          </div>
          <div>
            <input type="checkbox" id="css" name="skills" value="CSS" onChange={onChangeHandler} checked={formData.skills.includes('CSS')} />
            <label htmlFor="css">CSS</label>
          </div>
          <div>
            <input type="checkbox" id="javascript" name="skills" value="JavaScript" onChange={onChangeHandler} checked={formData.skills.includes('JavaScript')} />
            <label htmlFor="javascript">JavaScript</label>
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="btn enroll-btn">Enroll</button>
          <button type="button" className="btn clear-btn" onClick={onClearHandler}>Clear</button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;
