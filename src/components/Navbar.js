import React from 'react';
import { NavLink } from "react-router-dom";
import { logoutUser } from '../redux/actions/loginActions';
import { deleteUser } from '../redux/actions/userActions';
import { useSelector, useDispatch } from 'react-redux';
import Logo from "../img/argentBankLogo.png";

function Navbar() {

    const dispatch = useDispatch();
    
    const user = useSelector((state) => state.user);
    const login = useSelector((state) => state.login.token);

    const checkLogout = () => {
        
        dispatch(logoutUser());
        dispatch(deleteUser());
    }

    return (
        <>
            <nav className="main-nav">
                <NavLink className="main-nav-logo" to="/">
                    <img
                        className="main-nav-logo-image"
                        src={Logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>
                <div>
                    <NavLink className="main-nav-item" to="/login">
                        <i className="fa fa-user-circle"></i>
                        {user?.user?.firstName}
                    </NavLink>

                    {login ? (
                        <>
                            <NavLink onClick={checkLogout} className="main-nav-item" to="/login">
                            <i className="fa fa-user-circle"></i>
                                Sign Out
                            </NavLink>
                        </>
                        ) : (
                        <>
                            <NavLink className="main-nav-item" to="/login">
                                <i className="fa fa-user-circle"></i>
                                Sign In
                            </NavLink>
                        </>
                        )
                    }
                </div>
            </nav>
        </>
    )
}

export default Navbar;