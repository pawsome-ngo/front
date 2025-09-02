import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { FaArrowLeft } from 'react-icons/fa';
import SignUpModal from './SignUpModal';
import CustomSelect from './CustomSelect';
import styles from './SignUpPage.module.css';
import appStyles from '../App.module.css';

const SignUpPage = () => {
    const navigate = useNavigate(); // Hook for navigation
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        phoneNumber: '',
        address: '',
        motivation: '',
        hasVehicle: 'No',
        vehicleType: '',
        canProvideShelter: 'No',
        hasMedicineBox: 'No',
        latitude: null,
        longitude: null,
        experienceLevel: 'Beginner',
    });
    const [locationStatus, setLocationStatus] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'firstName') {
            const username = value.toLowerCase();
            setFormData(prevState => ({ ...prevState, [name]: value, username }));
        } else {
            setFormData(prevState => ({ ...prevState, [name]: value }));
        }
    };

    const handleGetLocation = () => {
        setLocationStatus('Fetching location...');
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setFormData(prevState => ({
                        ...prevState,
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    }));
                    setLocationStatus('Location fetched successfully!');
                },
                () => {
                    setLocationStatus('Unable to retrieve your location.');
                }
            );
        } else {
            setLocationStatus('Geolocation is not supported by your browser.');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://f96027dbd226.ngrok-free.app/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    hasVehicle: formData.hasVehicle === 'Yes',
                    canProvideShelter: formData.canProvideShelter === 'Yes',
                    hasMedicineBox: formData.hasMedicineBox === 'Yes',
                }),
            });
            if (response.ok) {
                const result = await response.json();
                console.log('Success:', result);
                setIsModalOpen(true);
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        // Reset the form
        setFormData({
            firstName: '', lastName: '', username: '', password: '', phoneNumber: '', address: '', motivation: '',
            hasVehicle: 'No', vehicleType: '', canProvideShelter: 'No', hasMedicineBox: 'No',
            latitude: null, longitude: null, experienceLevel: 'Beginner',
        });
        // Navigate back to the home page
        navigate('/');
    };

    const yesNoOptions = [{ value: 'No', label: 'No' }, { value: 'Yes', label: 'Yes' }];
    const vehicleOptions = [{ value: '', label: 'Select...'}, { value: 'Bike', label: 'Bike' }, { value: 'Scooty', label: 'Scooty' }, { value: 'Car', label: 'Car' }];
    const experienceOptions = [{ value: 'Beginner', label: 'Beginner' }, { value: 'Intermediate', label: 'Intermediate' }, { value: 'Advanced', label: 'Advanced' }];

    return (
        <>
            <div className={styles.formContainer}>
                <Link to="/" className={styles.backLink}>
                    <FaArrowLeft />
                    <span>Back to Home</span>
                </Link>

                <div className={styles.formHeader}>
                    <h1>Join Our Team</h1>
                    <p>Become a Pawsome volunteer and make a difference.</p>
                </div>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGrid}>
                        <div className={styles.formGroup}>
                            <label htmlFor="firstName" className={styles.formLabel}>First Name</label>
                            <input type="text" id="firstName" name="firstName" className={styles.formInput} value={formData.firstName} onChange={handleChange} required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="lastName" className={styles.formLabel}>Last Name</label>
                            <input type="text" id="lastName" name="lastName" className={styles.formInput} value={formData.lastName} onChange={handleChange} required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="username" className={styles.formLabel}>Username</label>
                            <input type="text" id="username" name="username" className={styles.formInput} value={formData.username} onChange={handleChange} required />
                        </div>
                        <div className={`${styles.formGroup} ${styles.formGroupFullWidth}`}>
                            <label htmlFor="password" className={styles.formLabel}>Create a Password</label>
                            <input type="password" id="password" name="password" className={styles.formInput} value={formData.password} onChange={handleChange} required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="phoneNumber" className={styles.formLabel}>Phone Number</label>
                            <input type="tel" id="phoneNumber" name="phoneNumber" className={styles.formInput} value={formData.phoneNumber} onChange={handleChange} required />
                        </div>
                        <div className={`${styles.formGroup} ${styles.formGroupFullWidth}`}>
                            <label htmlFor="address" className={styles.formLabel}>Address</label>
                            <input type="text" id="address" name="address" className={styles.formInput} value={formData.address} onChange={handleChange} required />
                        </div>
                        <div className={`${styles.formGroup} ${styles.formGroupFullWidth}`}>
                            <label htmlFor="motivation" className={styles.formLabel}>What made you want to join us?</label>
                            <textarea id="motivation" name="motivation" rows="4" className={styles.formTextarea} value={formData.motivation} onChange={handleChange} required></textarea>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="hasVehicle" className={styles.formLabel}>Do you have a vehicle?</label>
                            <CustomSelect name="hasVehicle" options={yesNoOptions} value={formData.hasVehicle} onChange={handleChange} />
                        </div>
                        {formData.hasVehicle === 'Yes' && (
                            <div className={styles.formGroup}>
                                <label htmlFor="vehicleType" className={styles.formLabel}>Vehicle Type</label>
                                <CustomSelect name="vehicleType" options={vehicleOptions} value={formData.vehicleType} onChange={handleChange} />
                            </div>
                        )}
                        <div className={styles.formGroup}>
                            <label htmlFor="canProvideShelter" className={styles.formLabel}>Can you provide temporary shelter?</label>
                            <CustomSelect name="canProvideShelter" options={yesNoOptions} value={formData.canProvideShelter} onChange={handleChange} />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="hasMedicineBox" className={styles.formLabel}>Do you have a Medicine Box?</label>
                            <CustomSelect name="hasMedicineBox" options={yesNoOptions} value={formData.hasMedicineBox} onChange={handleChange} />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="experienceLevel" className={styles.formLabel}>Experience Level</label>
                            <CustomSelect name="experienceLevel" options={experienceOptions} value={formData.experienceLevel} onChange={handleChange} />
                        </div>
                        <div className={`${styles.formGroup} ${styles.formGroupFullWidth}`}>
                            <label className={styles.formLabel}>Current Location</label>
                            <button type="button" onClick={handleGetLocation} className={`${appStyles.btn} ${appStyles.btnSecondary}`}>
                                Fetch Current Location
                            </button>
                            {locationStatus && <p className={styles.locationStatus}>{locationStatus}</p>}
                        </div>
                    </div>
                    <button type="submit" className={`${appStyles.btn} ${appStyles.btnPrimary} ${appStyles.btnFullWidth}`}>Sign Up</button>
                </form>
            </div>

            <SignUpModal isOpen={isModalOpen} onClose={closeModal}>
                <div className={appStyles.successModal}>
                    <div className={appStyles.successModalIcon}>✔</div>
                    <h2 className={appStyles.successModalTitle}>Thank You!</h2>
                    <p className={appStyles.successModalMessage}>
                        Thanks for signing up, {formData.username}! Please remember your password. Someone will be in touch shortly to confirm your request.
                    </p>
                    <button onClick={closeModal} className={`${appStyles.btn} ${appStyles.btnPrimary}`}>
                        Got it!
                    </button>
                </div>
            </SignUpModal>
        </>
    );
};

export default SignUpPage;