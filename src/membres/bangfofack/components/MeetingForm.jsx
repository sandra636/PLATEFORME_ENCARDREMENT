import React, { useState } from 'react';
import './MeetingForm.css';

const MeetingForm = ({ onSubmit, students = [] }) => {
  const [formData, setFormData] = useState({
    studentId: '',
    date: '',
    time: '',
    type: 'visio',
    subject: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
    // Réinitialiser le formulaire
    setFormData({
      studentId: '',
      date: '',
      time: '',
      type: 'visio',
      subject: '',
      notes: ''
    });
  };

  return (
    <form className="meeting-form" onSubmit={handleSubmit}>
      <h3>Planifier une Rencontre</h3>
      
      <div className="form-group">
        <label>Étudiant :</label>
        <select 
          name="studentId" 
          value={formData.studentId}
          onChange={handleChange}
          required
        >
          <option value="">Sélectionner un étudiant</option>
          {students.map(student => (
            <option key={student.id} value={student.id}>
              {student.name}
            </option>
          ))}
        </select>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Date :</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Heure :</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Type :</label>
          <select 
            name="type" 
            value={formData.type}
            onChange={handleChange}
          >
            <option value="visio">Visio-conférence</option>
            <option value="presentiel">Présentiel</option>
            <option value="telephone">Téléphone</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label>Sujet :</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Sujet de la rencontre"
          required
        />
      </div>

      <div className="form-group">
        <label>Notes :</label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Notes préparatoires..."
          rows="3"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Planifier la Rencontre
      </button>
    </form>
  );
};

export default MeetingForm;