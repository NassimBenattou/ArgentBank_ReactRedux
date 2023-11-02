import React, { useState } from 'react';
import { getUser } from '../redux/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';

function Update() {

    const login = useSelector((state) => state.login.token);
    const token = login.token;
    const dispatch = useDispatch();

    const[userName, setUserName] = useState();  

    const validUpdate = (e) => {

        e.preventDefault(); 

        if (!userName) {
            alert("Le champ Username ne peut pas être vide.");
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

            const userInfos = {

                firstName: data.body.firstName,
                userName: data.body.userName,
                id: data.body.id
            }

            dispatch(getUser(userInfos));
        })
        .catch((error) => {
            console.error("Erreur lors de la mise à jour :", error);
        });
    }

    return (
        <>
            <>
                <form onSubmit={validUpdate} className="input-wrapper" style={{ width: "20%", margin: "auto", marginTop: "25px" }}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder='New username' name="username" onChange={e => setUserName(e.target.value)} />
                    <button className="edit-button" style={{ margin: "auto", marginTop: "20px" }}>Update</button>
                </form>
            </>
        </>
    )
}

export default Update