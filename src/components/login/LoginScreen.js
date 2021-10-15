import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { useForm } from '../../hooks/useForm';
import { types } from '../../types/types';
import '../../login.css';

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext(AuthContext);

    const [{ userName }, handleInputChange, reset] = useForm({ userName: '' });

    const handleLogin = () => {

        const lastPath = localStorage.getItem('lastPath') || '/';

        let userNameLogin = 'anonymous';

        if (!userName.length <= 0) {
            userNameLogin = userName;
        }

        dispatch({
            type: types.login,
            payload: {
                name: userNameLogin
            }
        });
        reset();
        history.replace(lastPath);
    }

    return (
        <div className="container">
            <div className="fill d-flex align-items-center justify-content-center">
                <div className="card w-50 h-50">
                    <div className="card-header">
                        <h1>Login Screen</h1>
                    </div>
                    <div className="card-body d-flex align-items-center justify-content-center">
                        <div className="row">
                            <div className="col-12">
                                <input
                                    type="text"
                                    className="form-control"
                                    autoComplete="off"
                                    name="userName"
                                    placeholder="Write an username..."
                                    onChange={handleInputChange}
                                    value={userName}
                                    maxLength="20"
                                />
                                <small className="fw-light fst-italic float-end me-1">{userName.length} / 20</small>
                            </div>
                            <div className="col-12">
                                <div className="d-grid gap-1 w-100">
                                    <button
                                        className="btn btn-dark mt-4"
                                        onClick={handleLogin}
                                    >Login</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
