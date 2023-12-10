import React from 'react';
import "./Header.css"

function Header({ isLoggedIn, handleLogout, handleSelectionChange, userRole }) {
  const handleSelectChange = (event) => {
    handleSelectionChange(event.target.value);
  };

  return (
    <header>
      <p style={{marginTop:"10px",color:"white",border:"1px solid gray",padding:"25px",backgroundColor:"rgb(75, 67, 67)",borderRadius:"10px"}}>Vote for us!</p>
      <select id="head" onChange={handleSelectChange}>
        <option value="vote">Vote</option>
        {isLoggedIn && userRole === 'admin' ? (
          <option value="admin">Admin</option>
        ) : null}
      </select>
      <button onClick={handleLogout}>Logout</button>
    </header>
  );
}

export default Header;
