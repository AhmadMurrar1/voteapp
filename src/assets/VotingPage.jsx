import React, { useState } from 'react';
import axios from 'axios';
import Naruto from '../images/Naruto.jpg';
import Ayanokoji from '../images/Ayanokoji.jpg';
import Asta from '../images/Asta.jpg';
import Yami from '../images/Yami.jpg';
import '../assets/VotingPage.css';

function VotingPage() {
    const [votedOption, setVotedOption] = useState(null);

    const handleVote = async (userId) => {
    try {
        const user = await axios.get(`https://65738a61f941bda3f2aef3ad.mockapi.io/api/v1/user/${userId}`);
        const updatedUser = {
        ...user.data,
        voted: !user.data.voted,
        };


    await axios.put(`https://65738a61f941bda3f2aef3ad.mockapi.io/api/v1/user/${userId}`, updatedUser);

    setVotedOption(updatedUser.voted);
    } catch (error) {
    console.error('Error:', error);
    }
};

return (
    <div className='Vote'>
        <h1 style={{marginBottom:"50px"}}>Voting page</h1>
        <section className='VotingPage'>
        <div className='Card'>
            <img src={Naruto} alt='Naruto' />
            <p>Naruto</p>
            <button onClick={() => handleVote('1')}>
            {votedOption ? 'Change my vote!' : 'Vote'}
            </button>
        </div>
        <div className='Card'>
            <img src={Ayanokoji} alt='Ayanokoji' />
            <p>Ayanokoji</p>
            <button onClick={() => handleVote('2')}>
            {votedOption ? 'Change my vote!' : 'Vote'}
            </button>
        </div>
        <div className='Card'>
            <img src={Asta} alt='Asta' />
            <p>Asta</p>
            <button onClick={() => handleVote('3')}>
            {votedOption ? 'Change my vote!' : 'Vote'}
            </button>
        </div>
        <div className='Card'>
            <img src={Yami} alt='Yami' />
            <p>Yami</p>
            <button onClick={() => handleVote('4')}>
            {votedOption ? 'Change my vote!' : 'Vote'}
            </button>
        </div>
        </section>
    </div>
);
}

export default VotingPage;
