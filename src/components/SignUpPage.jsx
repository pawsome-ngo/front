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
        name: '',
        password: '',
        phone: '',
        address: '',
        motivation: '',
        hasVehicle: 'No',
        vehicleType: '',
        canProvideShelter: 'No',
        hasFirstAid: 'No',
    });
    const [locationStatus, setLocationStatus] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleGetLocation = () => {
        setLocationStatus('Fetching location...');
        setTimeout(() => setLocationStatus('Location fetched successfully!'), 2000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        // Reset the form
        setFormData({
            name: '', password: '', phone: '', address: '', motivation: '',
            hasVehicle: 'No', vehicleType: '', canProvideShelter: 'No', hasFirstAid: 'No',
        });
        // Navigate back to the home page
        navigate('/');
    };

    const yesNoOptions = [{ value: 'No', label: 'No' }, { value: 'Yes', label: 'Yes' }];
    const vehicleOptions = [{ value: '', label: 'Select...'}, { value: 'Bike', label: 'Bike' }, { value: 'Scooty', label: 'Scooty' }, { value: 'Car', label: 'Car' }];

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
                            <label htmlFor="name" className={styles.formLabel}>Full Name</label>
                            <input type="text" id="name" name="name" className={styles.formInput} value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="phone" className={styles.formLabel}>Phone Number</label>
                            <input type="tel" id="phone" name="phone" className={styles.formInput} value={formData.phone} onChange={handleChange} required />
                        </div>
                        <div className={`${styles.formGroup} ${styles.formGroupFullWidth}`}>
                            <label htmlFor="address" className={styles.formLabel}>Address</label>
                            <input type="text" id="address" name="address" className={styles.formInput} value={formData.address} onChange={handleChange} required />
                        </div>
                        <div className={`${styles.formGroup} ${styles.formGroupFullWidth}`}>
                            <label htmlFor="password" className={styles.formLabel}>Create a Password</label>
                            <input type="password" id="password" name="password" className={styles.formInput} value={formData.password} onChange={handleChange} required />
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
                            <label htmlFor="hasFirstAid" className={styles.formLabel}>Do you have a First-Aid Kit?</label>
                            <CustomSelect name="hasFirstAid" options={yesNoOptions} value={formData.hasFirstAid} onChange={handleChange} />
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
                        Thanks for signing up. Someone will reach out to you soon. Please remember your password!
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
