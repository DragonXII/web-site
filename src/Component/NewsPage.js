
import { useHistory } from "react-router";
import Slider from "react-slick";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";
function NewsPage() {
    var settings = {
        dots: true
    };
    return (
        <div>
            <div className="container">
                <Header></Header>
                <div className="div-beginner">
                    <div className="row">
                        <div className="col-md-8">
                            <span> حدث جديد</span><i class="fa-solid fa-angle-left"></i><span>الاحداث</span><i class="fa-solid fa-angle-left"></i><span>الرئيسية</span>
                        </div>
                        <div className="col-md-4">
                            <button> الرجوع الى الرئيسية<i class="fa-solid fa-left-long"></i></button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="row news-page">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="mounth-news">
                                        ديسمبر  <br></br>22
                                    </div>
                                    <h3 className="news-header">المعرض السعودي الدولي للتسويق
                                        الإلكتروني</h3>
                                    <p>ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم
                                        ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على</p>
                                    <div className="div-bottom ">
                                        <span className="txt-bottom">
                                            <i className="fa-solid fa-location-dot"></i> مركز الرياض الدولي للمؤتمرات والمعارض
                                        </span>
                                        <span className="txt-bottom">
                                            <i className="fa-regular fa-clock"></i> 0:12
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="div-photo">
                                    <img
                                        className="backgroundImage"
                                        src={require("../Assets/img/img3.jpg")}
                                        alt="img1"
                                    />
                                    {/* <div className="mounth">
                                ديسمبر  <br></br>22
                            </div> */}
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <SideBar></SideBar>
                    </div>
                </div>
            </div>
            <Footer></Footer>

        </div>
    );
}

export default NewsPage;
