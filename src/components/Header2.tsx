import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <header className="header">
            <div className="header-left">
                <img src="src/icons/icononly.png" alt="Logo" className="logo" />
                <nav>
                    <a href="/about">About us</a>
                    <a href="/services">Services</a>
                    <a href="/contact">Contact</a>
                    <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                        <a href="#">Join us</a>
                        {dropdownVisible && (
                            <div className="dropdown-content">
                                <a href="/client">Client</a>
                                <a href="/vehicle-owner">Vehicle owner</a>
                                <a href="/driver">Driver</a>
                                <a href="/vehicle-furbisher">Vehicle furbisher</a>
                            </div>
                        )}
                    </div>
                    <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                        <a href="#">Journeys</a>
                        {dropdownVisible && (
                            <div className="dropdown-content">
                                <a href="/client">Client</a>
                                <a href="/vehicle-owner">Vehicle owner</a>
                                <a href="/driver">Driver</a>
                                <a href="/vehicle-furbisher">Vehicle furbisher</a>
                            </div>
                        )}
                    </div>
                </nav>
            </div>
            <div className="header-right">
                <button className="login-button" onClick={() => navigate('/login')}>Login</button>
                <button className="create-account-button" onClick={() => navigate('/create-account')}>Create account
                </button>
            </div>
        </header>
    );
};

export default Header;
