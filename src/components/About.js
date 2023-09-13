import React from 'react'
import Navbar from "./Navbar";
import '../styles/about.css';
import awesome from '../images/about - awesome.jpeg'
import login from '../images/about - awesome.svg'
import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import Alertss from "./Alertss";

function About() {
    return (
        <div>
            <Navbar />
            <Alertss />
            <div className="text-white aboutImg text-center">
                <div className="note-img">
                    <h1 className="display-6">"The Future of Note-Taking: Experience It Now"</h1>
                    <p></p>
                </div>
            </div>

            <div className="container mt-5 ">
                <div className="row">
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h2 className="mb-3" style={{ fontWeight: "Bold" }}>Main <span style={{ color: "#9C27B0" }}>Features</span> </h2>
                        <br/>
                        <p>📝 <b>Organize Your World:</b><br/><br/>
Effortlessly create, update, and manage your notes in one seamless, intuitive platform. No more stacks of paper or cluttered notebooks. Your notes, your way.
<br/>
<br/>
<br/>
🔐 <b>Secure and Private:</b><br/><br/>
Rest easy knowing your notes are safeguarded. Our cutting-edge security features ensure that your personal and sensitive information remains confidential.
<br/><br/><br/>
🌐<b> Access Anywhere, Anytime:</b><br/><br/>
Access your notes from any device, anywhere in the world. Whether you're at home, in the office, or on the go, your notes are always at your fingertips.
<br/><br/><br/>
</p>
                        <div className="d-flex justify-content-center mt-3">
                            <Button component={Link} to="/new" variant="contained" color="secondary" style={{ color: "White", textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1.3rem" }}>Create New Note</Button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid awesome" src={awesome} alt="about-awesome" />
                    </div>
                </div>

                <div className="row login mt-5 mb-5 p-5">
                    <div className="col-md-6">
                        <img className="img-fluid" src={login} alt="about-awesome" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h2 className="mb-3" style={{ fontWeight: "Bold" }}>Use <span style={{ color: "#9C27B0" }}>SwiftNote</span> </h2>
                        <p>
                        Your notes, your ideas, your journey – all in one serene digital haven. Join us today and embark on a harmonious note-taking experience like never before!" 🚀📚</p>
                        <div className="d-flex justify-content-center mt-3">
                            <Button component={Link} to="/register" variant="contained" color="secondary" style={{ color: "White", textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1.3rem" }}>Sign up now</Button>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <div className="content">
                    <div className="top">
                        <div className="logo-details">
                            <span className="logo_name"><span style={{ color: "#9C27B0" }}></span>SwiftNote</span>
                        </div>
                        <div className="media-icons">
                            <Link to="/"><i className="fab fa-facebook-f"></i></Link>
                            <Link to="/"><i className="fab fa-twitter"></i></Link>
                            <Link to="/"><i className="fab fa-instagram"></i></Link>
                            <Link to="/"><i className="fab fa-linkedin-in"></i></Link>
                            <Link to="/"><i className="fab fa-youtube"></i></Link>
                        </div>
                    </div>
                    <div className="link-boxes">
                        <ul className="box">
                            <li className="link_name">Company</li>
                            <li><Link to="/">Home</Link></li>
    
                            <li><Link to="/about">About us</Link></li>
                            <li><Link to="/">Get started</Link></li>
                        </ul>
                        <ul className="box">
                            <li className="link_name">Services</li>
                            <li><Link to="/">Your Notes</Link></li>
                            <li><Link to="/new">New Note</Link></li>
                        </ul>
                        <ul className="box">
                            <li className="link_name">Account</li>
                            <li><Link to="/login">Sign-in</Link></li>
                            <li><Link to="/register">Join Free</Link></li>
                        </ul>
                    
                        
                    </div>
                </div>
                <div className="bottom-details">
                    <div className="bottom_text">
                        <span className="copyright_text">Copyright © 2023 <Link to="/">SwiftNote</Link>All rights reserved</span>
                        <span className="policy_terms">
                            <Link to="/">Privacy policy</Link>
                            <Link to="/">Terms & conditions</Link>
                        </span>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default About
