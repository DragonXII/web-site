
import { useHistory } from "react-router";
import Slider from "react-slick";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";
function MainPage() {
    var settings = {
        dots: true
    };
    return (
        <div>
            <div className="container">
                <Header></Header>
                <Slider {...settings}>
                    <div>
                        <div className="row">
                            <div className="col-md-8">
                                <h3>عنوان هام جدا</h3>
                                <br></br>
                                <p>
                                    هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ
                                    .عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها
                                </p>
                            </div>
                            <div className="col-md-4">
                                <img
                                    src={require("../Assets/img/slider2.jpg")}
                                    alt="slider1"
                                />
                            </div>
                        </div>
                    </div>
                </Slider>
                <div className="row">
                    <div className="col-md-8">
                        <h3> الفعاليات</h3>
                        <div className="row events">
                            <div className="col-md-6">
                                {/* <div
                                className="backgroundImage"
                                style={{
                                    backgroundImage: `url(${require("../Assets/img/slider2.jpg")})`
                                }}>
                                <div className="mounth">
                                    ديسمبر  <br></br>22
                                </div>
                            </div> */}
                                <div className="div-photo">
                                    <img
                                        className="backgroundImage"
                                        src={require("../Assets/img/img3.jpg")}
                                        alt="img1"
                                    />
                                    <div className="mounth">
                                        ديسمبر  <br></br>22
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div>
                                    <h3 className="event-header"> المعرض السعودي للفعاليات</h3>
                                    <p>يقام معرض الرياض الدولي للكتاب بشكل سنوي في مدينة الرياض، حيث
                                        يُعد منصة للشركات والمؤسسات والأفراد العاملين والمهتمين بقطاعات
                                        الأدب والنشر والترجمة ..</p>
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
                        </div>
                        <br></br>
                        <div className="row events">
                            <div className="col-md-6">
                                <div className="div-photo">
                                    <img
                                        className="backgroundImage"
                                        src={require("../Assets/img/img2.jpg")}
                                        alt="img1"
                                    />
                                    <div className="mounth">
                                        ديسمبر  <br></br>22
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div>
                                    <h3 className="event-header"> المعرض السعودي للفعاليات</h3>
                                    <p>يقام معرض الرياض الدولي للكتاب بشكل سنوي في مدينة الرياض، حيث
                                        يُعد منصة للشركات والمؤسسات والأفراد العاملين والمهتمين بقطاعات
                                        الأدب والنشر والترجمة ..</p>
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
                        </div>

                    </div>
                    <div className="col-md-4">
                        <SideBar></SideBar>

                    </div>
                </div>
                <div className="news-letter">
                    <div className="row">
                        <div className="col-md-8">
                            <h2>انضم الينا</h2>
                            <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
                                النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من</p>
                        </div>
                        <div className="col-md-4">
                            <div className="div-submit">
                                <p className="txt-submit">لبريد الالكترونى</p>
                                <button className="btn-submit">
                                    اشتراك
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>

        </div>
    );
}

export default MainPage;
