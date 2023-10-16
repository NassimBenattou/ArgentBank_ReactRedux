import React, { useState } from 'react';
import { getUser } from '../redux/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';

function Update() {

    const[userName, setUserName] = useState();
    const[toggle, setToggle] = useState(false);

    const dispatch = useDispatch();
    const login = useSelector((state) => state.login.token);
    const user = useSelector((state) => state.user.user);
    const token = login.token;

    const validUpdate = (e) => {

        if (!userName) {

            alert("Le champ Username ne peut pas être vide.");
            e.preventDefault();
            return;
        }

        fetch("http://localhost:3001/api/v1/user/profile", {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ token
          },
          body: JSON.stringify({ userName })
        })
        .then((response) => response.json())
        .then((data) => {

            dispatch(getUser(data.userName));
        })
        .catch((error) => {

            console.error(error);
        });
    }

    const toggleChange = () => {

        setToggle(!toggle);
    }

    return (
        <>
            <div className="header">
                <h1>Welcome back<br />{user && user.firstName} {user && user.userName} !</h1>
                <button className="edit-button" onClick={toggleChange}>Edit Name</button>
                {toggle && 
                <>
                    <form onSubmit={validUpdate} className="input-wrapper" style={{ width: "20%", margin: "auto", marginTop: "25px" }}>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" placeholder='New username' name="username" onChange={e => setUserName(e.target.value)} />
                        <button className="edit-button" style={{ margin: "auto", marginTop: "20px" }}>Update</button>
                    </form>
                </>
                }
            </div> 
        </>
    )
}

export default Update