import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DisplayAlert from "../components/otherCompo/alert.js";
import Spinner1 from "../components/otherCompo/spinner.js";
import Dashboard from "../components/adminPage/components/dashboard.js";
import About from "../components/adminPage/components/about.js";
import Education from "../components/adminPage/components/education.js";
import Skill from "../components/adminPage/components/skill.js";
import Experiance from "../components/adminPage/components/experiance.js";
import Message from "../components/adminPage/components/message.js";
import Contact from "../components/adminPage/components/contact.js";


export default function AdminPage({ logout }) {

    const navigate = useNavigate();
    const token = localStorage.getItem('auth_token'); const [data, setData] = useState(null);

    // for alert
    const [alert, setAlert] = useState({ display: false, message: "", variant: "" });

    // alert function
    const displayAlert = (msg, vari) => {
        setAlert({ display: true, message: msg, variant: vari });
    }

    // loading data
    const loadData = () => {

        setData(null);
        axios.get('http://localhost:4000/get/getAllData', {
            headers: {
                token: token
            }
        })
            .then(res => {
                if (res.status >= 200 && res.status < 300) {
                    setData(res.data.data);
                }
            })
            .catch(err => console.log(err.message))
    }

    useEffect(() => {
        document.title = 'Portfolio | Admin';
        loadData();
    }, [])

    return (
        <>
            <DisplayAlert alert={alert} setAlert={setAlert} />
            <div className="container" id="adminPage">

                {/* navbar */}
                <nav className="navbar navbar-dark bg-primary">
                    <div className="container-fluid">

                        <div className="navbar-brand d-flex">
                            <img src="2412886.png" width="30" height="30" className="" />
                            <p className="h5 ps-2 mt-1">Dynamic Portfolio | Admin</p>
                        </div>

                        <form className="d-flex">
                            <button className="btn btn-sm btn-success fw-bold m-1"
                                onClick={() => navigate('/')}>Home</button>
                            <button className="btn btn-sm btn-danger fw-bold m-1"
                                onClick={logout}>Logout</button>
                        </form>

                    </div>
                </nav>

                {/* nav tab */}
                <nav id="admin_nav">
                    <div className="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">

                        <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#nav-dashboard"
                            id="tab-dashboard" type="button" role="tab">Dashboard</button>

                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#nav-about"
                            id="tab-about" type="button" role="tab">About</button>

                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#nav-education"
                            id="tab-education" type="button" role="tab">Education</button>

                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#nav-skill"
                            id="tab-skill" type="button" role="tab">Skill</button>

                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#nav-experiance"
                            id="tab-experiance" type="button" role="tab">Experiance</button>

                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#nav-contact"
                            id="tab-contact" type="button" role="tab">Contact</button>

                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#nav-message"
                            id="tab-message" type="button" role="tab">Message</button>

                    </div>
                </nav>

                {data == null
                    ?
                    <Spinner1 />
                    :
                    <div className="tab-content" id="nav-tabContent">

                        <div className="tab-pane fade show active" id="nav-dashboard" role="tabpanel">
                            <Dashboard data={data.component} loadData={loadData} token={token}
                                displayAlert={displayAlert} />
                        </div>

                        <div className="tab-pane fade" id="nav-about" role="tabpanel">
                            <About data={data.about} loadData={loadData} token={token}
                                displayAlert={displayAlert} />
                        </div>

                        <div className="tab-pane fade" id="nav-education" role="tabpanel">
                            <Education data={data.education} loadData={loadData} token={token}
                                displayAlert={displayAlert} />
                        </div>

                        <div className="tab-pane fade" id="nav-skill" role="tabpanel">
                            <Skill data={data.skill} loadData={loadData} token={token}
                                displayAlert={displayAlert} />
                        </div>

                        <div className="tab-pane fade" id="nav-experiance" role="tabpanel">
                            <Experiance data={data.experiance} loadData={loadData} token={token}
                                displayAlert={displayAlert} />
                        </div>

                        <div className="tab-pane fade" id="nav-contact" role="tabpanel">
                            <Contact data={data.contact} loadData={loadData} token={token}
                                displayAlert={displayAlert} />
                        </div>

                        <div className="tab-pane fade" id="nav-message" role="tabpanel">
                            <Message data={data.message} loadData={loadData} token={token}
                                displayAlert={displayAlert} />
                        </div>

                    </div>
                }
            </div>
        </>
    )
}