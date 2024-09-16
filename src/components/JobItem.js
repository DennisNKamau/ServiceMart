import React, { useState } from 'react';
import Popup from 'reactjs-popup';


const JobItem = ({ job, onDelete, onEdit }) => {
  const { id, title: initialTitle, description: initialDescription, company: initialCompany, location: initialLocation, date_posted: initialDatePosted } = job;
  
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [company, setCompany] = useState(initialCompany);
  const [location, setLocation] = useState(initialLocation);
  const [datePosted, setDatePosted] = useState(initialDatePosted);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleDeleteClick = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this job?");
    if (confirmDelete) {
      onDelete(id);
    }
  };

  const handleSaveClick = () => {
    const editedJob = {
      id,
      title,
      description,
      company,
      location,
      date_posted: datePosted
    };
    onEdit(editedJob);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    // Reset the input fields to initial values
    setTitle(initialTitle);
    setDescription(initialDescription);
    setCompany(initialCompany);
    setLocation(initialLocation);
    setDatePosted(initialDatePosted);
    setIsEditing(false);
      //document.body.classList.remove('blur'); 
  };

  return (
    <div className="card">
      <Popup open={isEditing} onClose={handleCancelClick}>
        <div className="popup-overlay"></div> {/* New overlay div */}
        <form className="job-form edit">
          <label>
            Title:
            <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </label>
          <label>
            Description:
            <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
          </label>
          <label>
            Company:
            <input type="text" name="company" value={company} onChange={(e) => setCompany(e.target.value)} required />
          </label>
          <label>
            Location:
            <input type="text" name="location" value={location} onChange={(e) => setLocation(e.target.value)} required />
          </label>
          <label>
            Date Posted:
            <input type="date" name="date_posted" value={datePosted} onChange={(e) => setDatePosted(e.target.value)} required />
          </label>
          <div className="button-holder">
            <button id ="save" type="button" onClick={handleSaveClick}>Save</button>
            <button id="cancel" type="button" onClick={handleCancelClick}>Cancel</button>
          </div>
        </form>
      </Popup>
      <h3>{title}</h3>
      <p className="company">{company}</p>
      <p className="description">{description}</p>
      <div className="extra content">
        <span>
          <i className="fa-solid fa-location-dot"></i>
          {location}
        </span>
        <span>
          <i className="fa-solid fa-calendar-days"></i>
          {datePosted}
        </span>
        <span className="delete-icon-container" onClick={handleEditClick}>
          <i className="fa-solid fa-pen"></i>
          <span className="delete-text">Edit</span>
        </span>
        <span className="delete-icon-container" onClick={() => handleDeleteClick(id)}>
          <i className="fa-solid fa-trash-can"></i>
          <span className="delete-text">Delete</span>
        </span>
      </div>
      
    </div>
  );
};

export default JobItem;
