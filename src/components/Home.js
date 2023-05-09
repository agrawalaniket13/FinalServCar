import React from "react";
import { Container, Button, Card, Col, Row, CardGroup, CardBody, CardTitle, CardSubtitle, CardText, } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

const Home = () => {
    return (
        <div>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <div className="carouseldiv">
                            <h1 className="headings">
                                Professional Auto Repair <br /> & Maintainance
                            </h1>
                            <p className="paras">
                                We are dedicated to providing high-quality auto repair and
                                maintenance to keep you and your car safe on the road.
                            </p>
                        </div>
                        <img
                            className="d-block w-100"
                            src="https://img.freepik.com/free-photo/hand-holding-wrench-dark-background_1212-887.jpg?size=626&ext=jpg&ga=GA1.2.1787427314.1673332028"
                            alt="First slide"
                            style={{ height: "500px" }}
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className="carouseldiv">
                            <h1 className="headings">
                                Performance Without <br /> Compromise{" "}
                            </h1>
                            <p className="paras">
                                We provide a wide range of automotive maintenance services.
                            </p>
                        </div>
                        <img
                            className="d-block w-100"
                            src="https://img.freepik.com/premium-photo/front-view-generic-brandless-moder-car_110488-502.jpg?size=626&ext=jpg&ga=GA1.2.1787427314.1673332028"
                            alt="Second slide"
                            style={{ height: "500px" }}
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="chooseuspage">
                <div className="chooseusdiv">
                    <h1 className="whyus">Why Choose Us</h1>
                    <p className="whyuspara">
                        We Offer Full Service Auto Repair & Maintenance
                    </p>
                    <div className="divchooseus"></div>
                    <div style={{ paddingLeft: "34px", paddingRight: "34px" }} class="row join-agile2 pt-md-5 pt-4 text-center">
                        <div class="col-md-2 steps-reach-w3l text-center">
                            <img
                                id="p1"
                                src="https://automechanica.com/uploads/home_page_service_usp/icon/1/car-diagnostic.svg"
                                alt=""
                            />
                            <p id="para1" class="mt-3">
                                Diagnostics{" "}
                            </p>
                            <h6>
                                If your car needs a mobile diagnostic check done at your home or
                                office, let AutoMechanica come to you.
                            </h6>
                        </div>
                        <div class="col-md-2 steps-reach-w3l text-center my-md-0 my-4">
                            <img
                                id="p2"
                                src="	https://automechanica.com/uploads/home_page_service_usp/icon/2/car-Dent_Paint.svg"
                                alt=""
                            />
                            <p id="para2" class="mt-3">
                                Dent & Paint
                            </p>
                            <h6>
                                We specializes in car dent repair and car painting services for
                                a range of models.
                            </h6>
                        </div>
                        <div class="col-md-2 steps-reach-w3l text-center">
                            <img
                                id="p3"
                                src="	https://automechanica.com/uploads/home_page_service_usp/icon/3/Car-Oil_Lube.svg"
                                alt=""
                            />
                            <p id="para3" class="mt-3">
                                Oil / Lube / Filters
                            </p>
                            <h6>
                                We proudly serves the Lube, Oil &amp; Filter change needs of
                                customers' vehicle performance while extending the life of your
                                vehicle.
                            </h6>
                        </div>
                        <div class="col-md-2 steps-reach-w3l text-center">
                            <img
                                id="p4"
                                src="https://automechanica.com/uploads/home_page_service_usp/icon/4/Car-Brake.svg"
                                alt=""
                            />
                            <p id="para4" class="mt-3">
                                Brakes{" "}
                            </p>
                            <h6>
                                The brake system consists of different parts that can be fixed
                                individually. A detailed quote is given to you after we perform
                                our systematic brake evaluation.
                            </h6>
                        </div>
                        <div class="col-md-2 steps-reach-w3l text-center">
                            <img
                                id="p5"
                                src="https://automechanica.com/uploads/home_page_service_usp/icon/5/car-suspension.svg"
                                alt=""
                            />
                            <p id="para5" class="mt-3">
                                Suspension{" "}
                            </p>
                            <h6>
                                The suspension system of your vehicle protects you from bouncing
                                up and down due to the bad road conditions and bumps in the
                                road.
                            </h6>
                        </div>
                        <div class="col-md-2 steps-reach-w3l text-center">
                            <img
                                id="p6"
                                src="https://automechanica.com/uploads/home_page_service_usp/icon/6/Car_-_Detailing.svg"
                                alt=""
                            />
                            <p id="para6" class="mt-3">
                                Customizable{" "}
                            </p>
                            <h6>
                                Search for a time slot near you and we'll give you a list of
                                available time slots! No need to browse our schedule!
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="howitworks">
                <div id="howitworksmaindiv">
                    <h1 className="whyus">How it Works</h1>
                    <p style={{ color: "black" }} className="whyusparas">
                        We Offer Full Service Auto Repair & Maintenance
                    </p>
                </div>
                <div>
                    <img
                        className="d-block w-100 "
                        id="howworkimage"
                        src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
                        alt="Second slide"
                        style={{ opacity: "0.6" }}
                    />
                    <div>
                        <div
                            id="howworkbottomdiv"
                            class="col-md-10 row join-agile2 pt-md-5 pt-4 text-center"
                        >
                            <div class="col-md-2 steps-reach-w3l text-center" id="underdiv1">
                                <img
                                    id="p1"
                                    src="https://cdn-icons-png.flaticon.com/512/1093/1093252.png?w=740&t=st=1673418481~exp=1673419081~hmac=21d2ed9953f23fc84931d621088299c1adbd39e768390bcb37628ef699a9fe52"
                                    alt=""
                                />
                                <p id="para11" class="mt-3">
                                    Choose{" "}
                                </p>
                                <h6 style={{ color: "black" }}>
                                    Choose Your Service
                                    <br /> From Our Wide Range
                                    <br /> Of Offerings.
                                </h6>
                            </div>
                            <div class="col-md-2 steps-reach-w3l text-center " id="underdiv2">
                                <img
                                    id="p2"
                                    src="https://uxwing.com/wp-content/themes/uxwing/download/business-professional-services/asset-management-icon.svg"
                                    alt=""
                                />
                                <p id="para12" class="mt-3">
                                    Book
                                </p>
                                <h6 style={{ color: "black" }}>
                                    Make an Appointment <br />
                                    With Us.
                                </h6>
                            </div>
                            <div class="col-md-2 steps-reach-w3l text-center" id="underdiv3">
                                <img
                                    id="p3"
                                    src="https://cdn-icons-png.flaticon.com/128/1/1437.png"
                                    alt=""
                                />
                                <p id="para13" class="mt-3">
                                    Fair Pricing
                                </p>
                                <h6 style={{ color: "black" }}>
                                    Always Get a Fair
                                    <br /> Quote.
                                </h6>
                            </div>
                            <div class="col-md-2 steps-reach-w3l text-center" id="underdiv4">
                                <img
                                    id="p4"
                                    src="https://cdn-icons-png.flaticon.com/512/326/326498.png?w=740&t=st=1673342915~exp=1673343515~hmac=0c228a7065978a17fd324742557c1e2605bd3a238f2311a63a705e5141710679"
                                    alt=""
                                />
                                <p id="para14" class="mt-3">
                                    At Your Doorstep{" "}
                                </p>
                                <h6 style={{ color: "black" }}>
                                    Get a Doorstep Pick up
                                    <br /> & Drop Facility.
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer" id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col " id="footerleftside">
                            <h1 className="text-secondary"> VehicleCare</h1>
                            <p>
                                Our mission is to enable premium quality care for your luxury
                                car service at affordable pricing . We ensure real-time updates
                                for complete car care needs with a fair and transparent pricing
                                mechanism.
                            </p>
                            <div id="socialicons"></div>
                            <div id="contactinfo">
                                <div id="address">
                                    <p>
                                        Unit no.4, Reality Warehousing Pvt. Ltd., Behind Reliance
                                        Smart, Wagholi, Pune, Maharastra – 412207
                                    </p>
                                </div>
                                <div id="email">
                                    <p>contact@VehicleCare.com</p>
                                </div>
                                <div id="phone">
                                    <p>73 9797 9797</p>
                                </div>
                            </div>
                        </div>
                        <div className="col" id="footerrightside">
                            <h3>Services</h3>
                            <ul id="servicelist" class="menu">
                                <li
                                    id="menu-item-376"
                                    class="menu-item menu-item-type-post_type menu-item-object-cpt_services menu-item-376"
                                >
                                    <p>Periodic Maintenance Service</p>
                                </li>
                                <li
                                    id="menu-item-376"
                                    class="menu-item menu-item-type-post_type menu-item-object-cpt_services menu-item-376"
                                >
                                    <p>Dent &amp; Paint</p>
                                </li>
                                <li
                                    id="menu-item-376"
                                    class="menu-item menu-item-type-post_type menu-item-object-cpt_services menu-item-376"
                                >
                                    <p>Bumper Repair</p>
                                </li>
                                <li
                                    id="menu-item-376"
                                    class="menu-item menu-item-type-post_type menu-item-object-cpt_services menu-item-376"
                                >
                                    <p>Accidental Repair</p>
                                </li>
                                <li
                                    id="menu-item-376"
                                    class="menu-item menu-item-type-post_type menu-item-object-cpt_services menu-item-376"
                                >
                                    <p>Scratch Removal</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home