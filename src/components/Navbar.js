import React from 'react';
import { NavLink } from "react-router-dom";
import { logoutUser } from '../redux/actions/loginActions';
import { deleteUser } from '../redux/actions/userActions';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Logo from "../img/argentBankLogo.webp";

function Navbar() {

    const dispatch = useDispatch();
    
    const user = useSelector((state) => state.user.user);
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
                    <NavLink className="main-nav-item" to={`/user/${user?.id}`}>
                        {user ? (
                            <>
                                <FontAwesomeIcon icon={faCircleUser} size='sm' style={{ marginRight: "5px" }} />
                                {user?.firstName} {user?.userName}
                            </>
                        ) : null}
                    </NavLink>

                    {login ? (
                        <>
                            <NavLink onClick={checkLogout} className="main-nav-item" to="/login">
                                <FontAwesomeIcon icon={faRightFromBracket} size="sm" style={{ marginRight: "5px" }} />
                                Sign Out
                            </NavLink>
                        </>
                        ) : (
                        <>
                            <NavLink className="main-nav-item" to="/login">
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