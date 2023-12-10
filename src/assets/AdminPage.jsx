import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/AdminPage.css';

function AdminPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://65738a61f941bda3f2aef3ad.mockapi.io/api/v1/user')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <section className='AdminPage'>
      <h1 style={{color:"brown"}}>Admin Panel</h1>
      <div className='UserList'>
        {users.map(user => (
          <div style={{color:"brown"}} key={user.id} className={user.voted ? 'VotedUser' : 'NotVotedUser'}>
            <p>Email: {user.email}</p>
            {user.voted ? <span style={{color:"green"}} className='VotedText'>Voted</span> : <span style={{color:"red"}} className='NotVotedText'>Didn't vote yet</span>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default AdminPage;
