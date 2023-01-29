
/* import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; */
import React from 'react';
import { useHistory } from 'react-router';

function Header() {
    function onClickmenu(type) {
        switch (type) {
            case 1: window.location.replace("/"); break;
            case 2: window.location.replace("/news"); break;
            default: break;
        }
    }
    return (
        <div className="Header" dir='rtl'>
            <div className="row">
                <div className="col-md-3">
                    <div className="mt-3">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                            Logo
                        </button>
                    </div>
                </div>
                <div className="col-md-6">
                    {/* <nav className="navbar navbar-expand-sm">
                        <div className="container-fluid">
                            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <button onClick={() => {
                                            onClickmenu(1);
                                        }}>
                                            الرئيسية
                                        </button>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">من نحن</a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Link</a></li>
                                            <li><a className="dropdown-item" href="#">Another link</a></li>
                                            <li><a className="dropdown-item" href="#">A third link</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <button onClick={() => {
                                            onClickmenu(2);
                                        }}>
                                            الاحداث
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"> تواصل معنا</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav> */}
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <div class="container-fluid">
                            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarCollapse">
                                <div class="navbar-nav">
                                    <button class="nav-item nav-link" onClick={() => {
                                        onClickmenu(1);
                                    }}>
                                        الرئيسية
                                    </button>
                                    <a href="#" class="nav-item nav-link">من نحن</a>
                                    <button class="nav-item nav-link" onClick={() => {
                                        onClickmenu(2);
                                    }}>
                                        الاحداث
                                    </button>
                                    <a href="#" class="nav-item nav-link">تواصل معنا</a>
                                </div>
                            </div>
                        </div>
                    </nav>

                </div>
                <div className="col-md-3">
                    <div className="mt-3">
                        <button className="navbar-toggler sign-in" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                            <a className="navbar-brand" href="#">انشاء حساب</a>
                        </button>
                        <button className="navbar-toggler sign-up" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                            <a className="navbar-brand" href="#"> تسجيل الدخول</a>
                        </button>
                    </div>

                </div>
            </div>
        </div >

    );
}

export default Header;
