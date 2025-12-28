import React, { useState } from 'react';
import Card from '../components/Card';
import MeetingForm from '../components/MeetingForm';
import './Dashboard.css';

const TeacherDashboard = () => {
  // Données d'exemple pour commencer
  const [students, setStudents] = useState([
    { id: 1, name: 'bangfofack', progress: 75, lastMeeting: '2024-12-20' },
    { id: 2, name: 'sandra bikaka', progress: 90, lastMeeting: '2024-12-19' },
    { id: 3, name: 'tayouo yan', progress: 60, lastMeeting: '2024-12-18' },
    { id: 4, name: 'samuel eto', progress: 85, lastMeeting: '2024-12-17' }
  ]);

  const [meetings, setMeetings] = useState([
    { id: 1, student: 'bangfofack', date: '2024-12-25', time: '14:00', type: 'visio', subject: 'Avancement mémoire' },
    { id: 2, student: 'sandra bikaka', date: '2024-12-26', time: '10:30', type: 'presentiel', subject: 'Correction rapport' }
  ]);

  const handleMeetingSubmit = (meetingData) => {
    // Pour l'instant, on affiche juste dans la console
    console.log('Nouvelle rencontre planifiée:', meetingData);
    
    // Trouver le nom de l'étudiant
    const student = students.find(s => s.id == meetingData.studentId);
    
    // Ajouter à la liste des rencontres
    const newMeeting = {
      id: meetings.length + 1,
      student: student?.name || 'Étudiant',
      date: meetingData.date,
      time: meetingData.time,
      type: meetingData.type,
      subject: meetingData.subject
    };
    
    setMeetings([...meetings, newMeeting]);
    
    alert('Rencontre planifiée avec succès !');
  };

  return (
    <div className="teacher-dashboard">
      <header className="dashboard-header">
        <h1>Dashboard Enseignant</h1>
        <p>Bienvenue Professeur ! Vous encadrez {students.length} étudiants</p>
      </header>

      <div className="dashboard-content">
        {/* Section gauche : Mes étudiants */}
        <div className="dashboard-section">
          <Card title="Mes Étudiants Encadrés">
            <table className="students-table">
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Progression</th>
                  <th>Dernière rencontre</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map(student => (
                  <tr key={student.id}>
                    <td>{student.name}</td>
                    <td>
                      <div className="progress-container">
                        <div 
                          className="progress-bar" 
                          style={{ width: `${student.progress}%` }}
                        ></div>
                        <span className="progress-text">{student.progress}%</span>
                      </div>
                    </td>
                    <td>{student.lastMeeting}</td>
                    <td>
                      <button className="btn btn-sm btn-primary">Voir</button>
                      <button className="btn btn-sm btn-secondary">Message</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>

          {/* Prochaines rencontres */}
          <Card title="Prochaines Rencontres">
            {meetings.length === 0 ? (
              <p className="no-data">Aucune rencontre planifiée</p>
            ) : (
              <ul className="meetings-list">
                {meetings.map(meeting => (
                  <li key={meeting.id} className="meeting-item">
                    <div className="meeting-info">
                      <strong>{meeting.student}</strong>
                      <span>{meeting.date} à {meeting.time}</span>
                    </div>
                    <div className="meeting-details">
                      <span className={`meeting-type ${meeting.type}`}>
                        {meeting.type === 'visio' ? 'Visio' : 
                         meeting.type === 'presentiel' ? 'Présentiel' : 'Téléphone'}
                      </span>
                      <span className="meeting-subject">{meeting.subject}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </Card>
        </div>

        {/* Section droite : Formulaire et actions */}
        {/* <div className="dashboard-section">
          <Card title="Planifier une Rencontre">
            <MeetingForm 
              onSubmit={handleMeetingSubmit}
              students={students}
            />
          </Card>

          <Card title="Actions Rapides">
            <div className="quick-actions">
              <button className="btn btn-primary btn-block">
                <span className="action-icon">📁</span>
                Ajouter un Document
              </button>
              <button className="btn btn-secondary btn-block">
                <span className="action-icon">📊</span>
                Voir Statistiques
              </button>
              <button className="btn btn-success btn-block">
                <span className="action-icon">💬</span>
                Ouvrir le Chat
              </button>
            </div>
          </Card>
        </div> */}
      </div>
    </div>
  );
};

export default TeacherDashboard;