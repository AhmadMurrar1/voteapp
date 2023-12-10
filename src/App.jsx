// App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import LoginPage from './assets/LoginPage';
import Header from './assets/Header';
import AdminPage from './assets/AdminPage';
import VotingPage from './assets/VotingPage';
import axios from 'axios';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedOption, setSelectedOption] = useState('login');
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    // Fetch user data to determine user role on component mount
    async function fetchUserRole() {
      try {
        const response = await axios.get('https://65738a61f941bda3f2aef3ad.mockapi.io/api/v1/user');
        // Assuming the first user determines the admin role
        const firstUser = response.data[0];
        setUserRole(firstUser.role);
      } catch (error) {
        console.error('Error fetching user role:', error);
      }
    }

    fetchUserRole();
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setSelectedOption('vote');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setSelectedOption('login');
  };

  const handleSelectionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="App">
      {!isLoggedIn && selectedOption === 'login' && <LoginPage handleLogin={handleLogin} />}
      {isLoggedIn && (
        <Header
          isLoggedIn={isLoggedIn}
          handleLogout={handleLogout}
          handleSelectionChange={handleSelectionChange}
          userRole={userRole}
        />
      )}
      {isLoggedIn && selectedOption === 'vote' && <VotingPage />}
      {isLoggedIn && selectedOption === 'admin' && <AdminPage />}
    </div>
  );
}

export default App;
