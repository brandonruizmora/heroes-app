import React from 'react';
import { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const Navbar = () => {

    const history = useHistory();

    const { user: { name }, dispatch } = useContext(AuthContext);

    const handleLogout = () => {
        dispatch({
            type: types.logout
        });
        history.replace('/login');
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link
                    className="navbar-brand"
                    to="/"
                >
                    Asociaciones
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/marvel"
                        >
                            Marvel
                        </NavLink>
                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/dc"
                        >
                            DC
                        </NavLink>
                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/Search"
                        >
                            Search
                        </NavLink>
                    </div>
                    <form className="d-flex">
                        <span className="align-self-center text-info me-3">
                            { name }
                        </span>
                        <button
                            className="nav-link btn text-white btn-outline-danger"
                            onClick={ handleLogout }
                        >
                            Logout
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    )
}