import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const LoginWithOTP = (props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            const response = await fetch('https://quickcatalog.online/api/users/signinWithOTP', {
                method: 'POST',
                headers: myHeaders,
                body: JSON.stringify({ email: email, otp: otp }),
            });

            if (!response) {
                throw new Error('Invalid credentials');
            }

            const responseData = await response.json();
            if (responseData) {
                // console.log(responseData);
                props.setUserLogged(responseData);
                Swal.fire({
                    icon: 'success',
                    title: 'Logged in successfully!',
                    showConfirmButton: false,
                    timer: 3000, // 3 seconds
                });
                navigate('/Userprofile');
            }
            else {
                console.log('Something went wrong:', responseData);
                navigate('/Signin');
            }

        } catch (error) {
            // Handle network errors or other errors
            console.error('Error validating OTP:', error);
            Swal.fire('Error!', 'Failed to validate OTP. Please try again later.', 'error');
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handleOtpChange = (e) => {
        setOtp(e.target.value);
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
                            <h1 style={{ textAlign: 'center' }}>OTP Login</h1>
                            <div>
                                <input type="email" id="email" className="form-control mb-3" placeholder="Email" value={email} onChange={handleEmailChange} required />
                            </div>
                            <div>
                                <input type="text" id="otp" className="form-control mb-3" placeholder="OTP" value={otp} onChange={handleOtpChange} required />
                            </div>
                            <div>
                                <div className="row mt-2">
                                    <div className="col-md-8 m-auto text-end">
                                        <a className="reset_pass" href="\getresetpasswordotp">Lost your password?</a>
                                    </div>
                                    <div className="col-md-4 mt-2">
                                        <button type="submit" className="width-35 btn btn-success">
                                            <i className="ace-icon fa fa-key"></i>
                                            <span className="bigger-110">Login</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="clearfix"></div>
                        <div className="separator">
                            <p className="change_link">or
                                <a href="https://quickcatalog.in/getloginotp"> <u>Login with Password</u> </a>
                            </p>
                            <p className="change_link">New to site?
                                <a href="https://quickcatalog.in/signup"> <u>Sign Up</u> </a>
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

export default LoginWithOTP;
