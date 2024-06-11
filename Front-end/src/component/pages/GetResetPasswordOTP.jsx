import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const GetResetPasswordOTP = (props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://quickcatalog.online/api/users/sendotp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                // Handle success, e.g., show a success message
                Swal.fire({
                    icon: 'success',
                    title: 'OTP Sent',
                    showConfirmButton: false,
                    timer: 3000, // 3 seconds
                });
                navigate('/resetpasswordwithotp');
            } else {
                // Handle error response
                const data = await response.json();
                throw new Error(data.message || 'Failed to send OTP');
            }
        } catch (error) {
            // Handle network errors or other errors
            console.error('Error sending OTP:', error);
            Swal.fire('Error!', 'Failed to send OTP. Please try again later.', 'error');
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    return (
        <div className="card" style={{ maxWidth: '400px', margin: 'auto', marginTop: 7 + 'rem', marginBottom: 3 + 'rem' }}>
            <div className="card-body">
                <div className="animate form login_form" style={{ background: 'azure', padding: '10px' }}>
                    <section className="login_content">
                        <form onSubmit={handleSubmit}>
                            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                                <img style={{ height: '200px' }} src="./images/hiring-tag.png" alt="Description" />
                            </div>
                            <h1 style={{ textAlign: 'center' }}>Reset Password</h1>
                            <div>
                                <input type="email" id="email" className="form-control mb-3" placeholder="Email" value={email} onChange={handleEmailChange} required />
                            </div>
                            <div>
                                <button type="submit" className="width-35 btn btn-success float-end">
                                    <i className="ace-icon fa fa-key"></i>
                                    <span className="bigger-110">Send OTP</span>
                                </button>
                            </div>
                        </form>
                        <div className="clearfix"></div>
                        <div className="separator">
                            <p className="change_link">Remember Password?
                                <a href="https://quickcatalog.in/getloginotp"> <u>Login</u> </a>
                            </p>
                            <p className="change_link">New to site?
                                <a href="hhttps://quickcatalog.in/signup"> <u>Sign Up</u> </a>
                            </p>
                            <div className="clearfix"></div>
                            <br />
                            <div>
                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <h1><i className="fa fa-paw"></i> EMENU!</h1>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 text-center">
                                            <p>©2024 All Rights Reserved. EMENU!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default GetResetPasswordOTP;
