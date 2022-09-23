import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function fetchUsers(){
            const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users`)
            setUsers(data)
         }
         fetchUsers()
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="user-list">
                    {users.map((user) => (
                        <div className="user" key={user.id} >
                            <div onClick={() => navigate(`${user.id}`)} className="user-card">
                                <div className="user-card__container">
                                    <h3>{user.name}</h3>
                                    <p>
                                    <b>Email:</b> {user.email}
                                    </p>
                                    <p>
                                    <b>Phone:</b> {user.phone}
                                    </p>
                                    <p>
                                    <b>Website:</b>
                                    {user.website}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;

