import React from 'react'
import noteImg from '../images/inotebook.svg'
import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import "../styles/home.css"
import Notes from './Notes';
import Navbar from "./Navbar";
import Alertss from "./Alertss";

function Home() {
    

    return (
        <>
            <Navbar />
            <Alertss />
            <div className="container-fluid" >
                <div className="row">
                    <div className="col-md-5">
                        <h1 className="display-1 pt-5 ps-5 respo"><span style={{ color: "#9C27B0" }}>Swift</span>Note</h1>
                        <p className="ps-5 respo" style={{ fontSize: "1.7rem", fontWeight: "bold" }}>Notes on cloud - safe and secure</p>
                        <p className="ps-5 mt-3 respo" style={{ fontSize: "1rem" }}>An online web platform where you can create, edit, upload, delete your notes smoothly and easily.   </p><br/><br/>
                        <div className="d-flex justify-content-center">
                            <Button component={Link} to="/new" variant="contained" color="secondary" style={{ color: "White", textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1.3rem" }}>Create New Note</Button>
                        </div>
                    </div>
                    <div className="col-md-7 d-flex flex-column align-items-center">
                        <img className="img-fluid" style={{width: "75%"}} src={noteImg} alt="iNotebook" />
                    </div>
                </div>

                <Notes />
            </div>
        </>
    )
}

export default Home