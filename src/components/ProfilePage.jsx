import React, { useState } from 'react';
import App from '../App';
import Button from './Button';
import './css/profile.css';

const ProfilePage = ( {profileData,setProfileData} ) => {

  const [editingField, setEditingField] = useState(null);
  const [tempValue, setTempValue] = useState('');
  const [validationMessage, setValidationMessage] = useState('');

  const handleEdit = (field) => {
    setEditingField(field);
    setTempValue(profileData[field]);
    setValidationMessage('');
  };

  const handleCheckboxChange = (e) => {
    setProfileData({
      ...profileData,
      isDogFree: e.target.checked,
    });
  }

  // Validation here
  const handleSave = (field) => {
    if (field === 'username') {
      if (!tempValue) {
        setValidationMessage('Username cannot be empty');
        return;
      }

      if (tempValue === 'dog') {
        setValidationMessage("You're kidding, right?");
        return;
      }
    } 
    
    let valueToSave = tempValue;
    if (field === 'actualName' && !tempValue.trim()) {
        valueToSave = profileData.username;
    }

    setProfileData({
        ...profileData,       
        [field]: valueToSave, 
    });
    setEditingField(null);
    setValidationMessage('');
  };

  const handleCancel = (e) => {
    console.log(e);
    setEditingField(null);
    setValidationMessage('');
  };

  
  const renderField = (label, field) => (
    <>
        <div className="profile-row">
        <div className="profile-label">{label}:</div>
        
        <div className="profile-value">
            {editingField === field ? (
            <input
                type="text"
                value={tempValue}
                onChange={(e) => setTempValue(e.target.value)}
            />
            ) : (
            <>
                {profileData[field]}
            </>
            )}
        </div>
        
        <div className="profile-actions">
            {editingField === field ? (
            <>
                <Button
                className="profile-save"
                onClick={() => handleSave(field)}
                >
                Save
                </Button>
                <Button
                className="profile-cancel"
                onClick={handleCancel}
                >
                Cancel
                </Button>
            </>
            ) : (
                <Button
                className="profile-edit"
                onClick={() => handleEdit(field)}
                >
                Edit
                </Button>
            )}  
        </div>
        </div>
        {editingField === field && validationMessage && (
        <div className="validation-message">{validationMessage}</div>
        )}
    </>
  );


  return (
    <section className="profile-page">
        <div className="content-wrapper">
            <div className="profile-header section__header">
                <h2 className = "profile__title">Profile</h2>
                <hr className="hr" />
            </div>

            <div className="profile-table">
                <div className="profile-image">
                    <img
                    src={profileData.profilePic}
                    alt="Profile"
                    className="profile-image__photo"
                    />
                </div>

                {renderField('Username', 'username')}

                {renderField('Actual Name', 'actualName')}

                <div className="profile-row profile-row--checkbox">
                  <input
                    type="checkbox"
                    id="verified-dog-free"
                    checked={profileData.isDogFree}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="verified-dog-free">Verified Dog Free</label>
                </div>
            </div>

        </div>
    </section>
  );
};

export default ProfilePage;
