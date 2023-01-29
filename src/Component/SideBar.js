
import React from 'react';

function SideBar() {
    return (
        <div className="sidbar">

            <h3>اخر الاخبار</h3>
            <div className="news">
                <div className="news-block">
                    <img
                        className="backgroundImage"
                        src={require("../Assets/img/img4.jpg")}
                        alt="img1"
                    />
                    <span className="news-txt">
                        اخبار عاجلة
                    </span>
                    <p>بجوائز قيمتها 200 مليون ريال الرياض تستعد
                        لتنظيم دورة لألعاب السعودية</p>
                    <span className="icon-sidbar">
                        <i className="fa-regular fa-thumbs-up"></i>4322
                    </span>
                    <span className="icon-sidbar">
                        <i className="fa-regular fa-comment"></i>21
                    </span>
                    <span className="icon-sidbar">
                        <i className="fa-solid fa-eye"></i>234
                    </span>
                </div>
                <div className="news-block">
                    <img
                        className="backgroundImage"
                        src={require("../Assets/img/img5.jpg")}
                        alt="img1"
                    />
                    <span className="news-txt">
                        اخبار عاجلة
                    </span>
                    <p>بجوائز قيمتها 200 مليون ريال الرياض تستعد
                        لتنظيم دورة لألعاب السعودية</p>
                    <span className="icon-sidbar">
                        <i className="fa-regular fa-thumbs-up"></i>4322
                    </span>
                    <span className="icon-sidbar">
                        <i className="fa-regular fa-comment"></i>21
                    </span>
                    <span className="icon-sidbar">
                        <i className="fa-solid fa-eye"></i>234
                    </span>
                </div>
                <div className="news-block">
                    <img
                        className="backgroundImage"
                        src={require("../Assets/img/img6.jpg")}
                        alt="img1"
                    />
                    <span className="news-txt">
                        اخبار عاجلة
                    </span>
                    <p>بجوائز قيمتها 200 مليون ريال الرياض تستعد
                        لتنظيم دورة لألعاب السعودية</p>
                    <span className="icon-sidbar">
                        <i className="fa-regular fa-thumbs-up"></i>4322
                    </span>
                    <span className="icon-sidbar">
                        <i className="fa-regular fa-comment"></i>21
                    </span>
                    <span className="icon-sidbar">
                        <i className="fa-solid fa-eye"></i>234
                    </span>
                </div>

            </div>
        </div>

    );
}

export default SideBar;
