
/* import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; */
import React from 'react';
import { useHistory } from 'react-router';

function Footer() {
    return (
        <div className="Footer" dir='rtl'>
            <div className='row'>
                <div className='col-md-3'>
                    <div className="mt-3">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                            Logo
                        </button>
                    </div>
                </div>
                <div className='col-md-6'>
                    <nav className="navbar navbar-expand-sm">
                        <div className="container-fluid">
                            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">سياسة الخصوصية</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">سياسة الاستخدام</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">تواصل معنا</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className='copyright'>
                        جميع الحقوق محفوظة ,2022©
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='resaux-social'>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-twitter"></i>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Footer;
