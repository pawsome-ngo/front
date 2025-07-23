import React, { useState } from 'react';
import SignUpModal from './SignUpModal'; // Import the renamed Modal component
import '../App.css';

const SignUpPage = () => {
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
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal

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
        // In a real app, you'd send this data to a server
        console.log(formData);
        setIsModalOpen(true); // Open the modal
    };

    const closeModal = () => {
        setIsModalOpen(false);
        // Optionally, reset the form after closing the modal
        setFormData({
            name: '', password: '', phone: '', address: '', motivation: '',
            hasVehicle: 'No', vehicleType: '', canProvideShelter: 'No', hasFirstAid: 'No',
        });
    };

    return (
        <>
            <div className="form-container">
                <div className="form-header">
                    <h1>Join Our Team</h1>
                    <p>Become a Pawsome volunteer and make a difference.</p>
                </div>
                <form onSubmit={handleSubmit} className="form">
                    <div className="form__grid">
                        <div className="form__group">
                            <label htmlFor="name" className="form__label">Full Name</label>
                            <input type="text" id="name" name="name" className="form__input" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="form__group">
                            <label htmlFor="phone" className="form__label">Phone Number</label>
                            <input type="tel" id="phone" name="phone" className="form__input" value={formData.phone} onChange={handleChange} required />
                        </div>
                        <div className="form__group form__group--full-width">
                            <label htmlFor="address" className="form__label">Address</label>
                            <input type="text" id="address" name="address" className="form__input" value={formData.address} onChange={handleChange} required />
                        </div>
                        <div className="form__group form__group--full-width">
                            <label htmlFor="password" className="form__label">Create a Password</label>
                            <input type="password" id="password" name="password" className="form__input" value={formData.password} onChange={handleChange} required />
                        </div>
                        <div className="form__group form__group--full-width">
                            <label htmlFor="motivation" className="form__label">What made you want to join us?</label>
                            <textarea id="motivation" name="motivation" rows="4" className="form__textarea" value={formData.motivation} onChange={handleChange} required></textarea>
                        </div>
                        <div className="form__group">
                            <label htmlFor="hasVehicle" className="form__label">Do you have a vehicle?</label>
                            <select id="hasVehicle" name="hasVehicle" className="form__select" value={formData.hasVehicle} onChange={handleChange}>
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                            </select>
                        </div>
                        {formData.hasVehicle === 'Yes' && (
                            <div className="form__group">
                                <label htmlFor="vehicleType" className="form__label">Vehicle Type</label>
                                <select id="vehicleType" name="vehicleType" className="form__select" value={formData.vehicleType} onChange={handleChange}>
                                    <option value="">Select...</option>
                                    <option value="Bike">Bike</option>
                                    <option value="Scooty">Scooty</option>
                                    <option value="Car">Car</option>
                                </select>
                            </div>
                        )}
                        <div className="form__group">
                            <label htmlFor="canProvideShelter" className="form__label">Can you provide temporary shelter?</label>
                            <select id="canProvideShelter" name="canProvideShelter" className="form__select" value={formData.canProvideShelter} onChange={handleChange}>
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                            </select>
                        </div>
                        <div className="form__group">
                            <label htmlFor="hasFirstAid" className="form__label">Do you have a First-Aid Kit?</label>
                            <select id="hasFirstAid" name="hasFirstAid" className="form__select" value={formData.hasFirstAid} onChange={handleChange}>
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                            </select>
                        </div>
                        <div className="form__group form__group--full-width">
                            <label className="form__label">Current Location</label>
                            <button type="button" onClick={handleGetLocation} className="btn btn--secondary">
                                Fetch Current Location
                            </button>
                            {locationStatus && <p className="location-status">{locationStatus}</p>}
                        </div>
                    </div>
                    <button type="submit" className="btn btn--primary btn--full-width">Sign Up</button>
                </form>
            </div>

            <SignUpModal isOpen={isModalOpen} onClose={closeModal}>
                <div className="success-modal">
                    <div className="success-modal__icon">✔</div>
                    <h2 className="success-modal__title">Thank You!</h2>
                    <p className="success-modal__message">
                        Thanks for signing up. Someone will reach out to you soon. Please remember your password!
                    </p>
                    <button onClick={closeModal} className="btn btn--primary">
                        Got it!
                    </button>
                </div>
            </SignUpModal>
        </>
    );
};

export default SignUpPage;
