import React, { useState } from 'react';
import App from '../App';
import Button from './Button';
import './css/profile.css';

const stateCityMap = {
  TX: ['Houston', 'Dallas', 'Austin', 'San Antonio'],
  CA: ['Los Angeles', 'San Francisco', 'San Diego', 'Sacramento'],
  NY: ['New York City', 'Buffalo', 'Rochester', 'Albany'],
};

const ProfilePage = ({ profileData, setProfileData }) => {
  const [editingField, setEditingField] = useState(null);
  const [tempValue, setTempValue] = useState('');
  const [validationMessage, setValidationMessage] = useState('');
  const [showAvatarSelector, setShowAvatarSelector] = useState(false);

  const [selectedState, setSelectedState] = useState(profileData.state || '');
  const [selectedCity, setSelectedCity] = useState(profileData.city || '');

  // Address
  // 
  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setSelectedCity('');
  };


  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const saveAddress = () => {
    if (!selectedState || !selectedCity) {
      setValidationMessage('Please select both a state and a city.');
      return;
    }
    setProfileData({
      ...profileData,
      state: selectedState,
      city: selectedCity,
    });
    setEditingField(null);
    setValidationMessage('');
  };

  const cancelEdit = () => {
    setSelectedState(profileData.state || '');
    setSelectedCity(profileData.city || '');
    setEditingField(null);
    setValidationMessage('');
  };

  // 


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
  };

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

  const handleAvatarChange = (avatar) => {
    setProfileData({
      ...profileData,
      profilePic: `profile-images/${avatar}`,
    });
    setShowAvatarSelector(false);
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
            <>{profileData[field]}</>
          )}
        </div>

        <div className="profile-actions">
          {editingField === field ? (
            <>
              <Button className="profile-save" onClick={() => handleSave(field)}>
                Save
              </Button>
              <Button className="profile-cancel" onClick={handleCancel}>
                Cancel
              </Button>
            </>
          ) : (
            <Button className="profile-edit" onClick={() => handleEdit(field)}>
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
    <main className="profile-page main-content">
      <div className="content-wrapper">
        <div className="profile-header section__header">
          <h2 className="profile__title">Profile</h2>
          <hr className="hr" />
        </div>

        <div className="profile-table">
          <div className="profile-image">
            <img
              src={profileData.profilePic}
              alt="Profile"
              className="profile-image__photo"
            />
            <div className="avatar-banner" onClick={() => setShowAvatarSelector(!showAvatarSelector)}>
              Edit
            </div>
          </div>

          {showAvatarSelector && (
            <div className="avatar-selector-banner">
              <h3>Select Your Avatar</h3>
              <div className="avatar-options">
                {['profile-1.jpg', 'profile-2.jpg', 'profile-3.jpg'].map((avatar) => (
                  <img
                    key={avatar}
                    src={`profile-images/${avatar}`}
                    alt="Avatar Option"
                    className={`avatar-option ${
                      profileData.profilePic.includes(avatar) ? 'selected' : ''
                    }`}
                    onClick={() => handleAvatarChange(avatar)}
                  />
                ))}
              </div>
            </div>
          )}

          {renderField('Username', 'username')}

          {renderField('Actual Name', 'actualName')}

          {/* Address */}
          <div className="profile-row">
            <div className="profile-label">Address:</div>
            <div className="profile-value">
              {profileData.state && profileData.city
                ? `${profileData.city}, ${profileData.state}`
                : 'Not set'}
            </div>
            <div className="profile-actions">
              <Button className="profile-edit" onClick={() => setEditingField('address')}>
                Edit
              </Button>
            </div>
          </div>

          {/* Address*/}
          {editingField === 'address' && (
            <>
                        <div className="profile-row">
              <div className="profile-label">State:</div>
              <div className="profile-value">
                <select value={selectedState} onChange={handleStateChange}>
                  <option value="">Select a state</option>
                  {Object.keys(stateCityMap).map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="profile-row">
              <div className="profile-label">City:</div>
              <div className="profile-value">
                <select
                  value={selectedCity}
                  onChange={handleCityChange}
                  disabled={!selectedState}
                >
                  <option value="">Select a city</option>
                  {selectedState &&
                    stateCityMap[selectedState].map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                </select>
              </div>
            </div>

            <div className="profile-row profile-row-actions">
              <div className="profile-actions">
                <Button className="profile-save" onClick={saveAddress}>
                  Save
                </Button>
                <Button className="profile-cancel" onClick={cancelEdit}>
                  Cancel
                </Button>
              </div>
              {validationMessage && (
                <div className="validation-message">{validationMessage}</div>
              )}
            </div>
            </>
            
          )}


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
    </main>
  );
};

export default ProfilePage;
