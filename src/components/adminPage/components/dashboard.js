import { useState } from "react"
import axios from "axios";
import { SERVER_URL } from "../../../utilities/links.js";
import Button from "react-bootstrap/Button"
import Spinner from 'react-bootstrap/Spinner';


export default function Dashboard({ data, loadData, token, displayAlert }) {

    // content states
    const [about, setAbout] = useState(data[0].about);
    const [education, setEducation] = useState(data[0].education);
    const [skill, setSkill] = useState(data[0].skill);
    const [experiance, setExperiance] = useState(data[0].experiance);
    const [contact, setContact] = useState(data[0].contact);
    const [message, setMessage] = useState(data[0].message);

    // loading spinner staue
    const [spinner, setSpinner] = useState(false);

    // doc. id
    let _id = data[0]._id;

    // submit fn.
    const handleSubmit = () => {

        setSpinner(true);

        let data = { _id, about, education, skill, experiance, contact, message }

        axios({
            method: "patch",
            url: `${SERVER_URL}/patch/component`,
            headers: { "Content-type": "application/json", "charset": "UTF-8", "token": token },
            data: data
        })
            .then(res => {
                if (res.status >= 200 || res.status < 200) {
                    loadData();
                    displayAlert('Changes Saved Successfully', 'primary');
                }
            })
            .catch(err => displayAlert('Something went wrong, try again', 'danger'))
            .finally(() => setSpinner(false))
    }

    return (
        <>
            <div className="container card my-4 p-0" >

                <div className="card-header m-0">
                    <h4 className="text-center py-2">Hide/Show Content</h4>
                </div>

                <div className="card-body m-2">

                    {/* about */}
                    <div className="row">
                        <h5 className="col">About</h5>
                        <div className="col">
                            {about ?
                                <Button className="m-1" variant="danger" onClick={() => setAbout(!about)} >
                                    Hide
                                </Button>
                                :
                                <Button className="m-1" variant="primary" onClick={() => setAbout(!about)}>
                                    Show
                                </Button>}
                        </div>
                    </div>

                    {/* education */}
                    <div className="row">
                        <h5 className="col">Education</h5>
                        <div className="col">
                            {education ?
                                <Button className="m-1" variant="danger" onClick={() => setEducation(!education)} >
                                    Hide
                                </Button>
                                :
                                <Button className="m-1" variant="primary" onClick={() => setEducation(!education)}>
                                    Show
                                </Button>}
                        </div>
                    </div>

                    {/* skill */}
                    <div className="row">
                        <h5 className="col">Skill</h5>
                        <div className="col">
                            {skill ?
                                <Button className="m-1" variant="danger" onClick={() => setSkill(!skill)} >
                                    Hide
                                </Button>
                                :
                                <Button className="m-1" variant="primary" onClick={() => setSkill(!skill)}>
                                    Show
                                </Button>}
                        </div>
                    </div>

                    {/* experiance */}
                    <div className="row">
                        <h5 className="col">Experiance</h5>
                        <div className="col">
                            {experiance ?
                                <Button className="m-1" variant="danger" onClick={() => setExperiance(!experiance)} >
                                    Hide
                                </Button>
                                :
                                <Button className="m-1" variant="primary" onClick={() => setExperiance(!experiance)}>
                                    Show
                                </Button>}
                        </div>
                    </div>

                    {/* contact */}
                    <div className="row">
                        <h5 className="col">contact</h5>
                        <div className="col">
                            {contact ?
                                <Button className="m-1" variant="danger" onClick={() => setContact(!contact)} >
                                    Hide
                                </Button>
                                :
                                <Button className="m-1" variant="primary" onClick={() => setContact(!contact)}>
                                    Show
                                </Button>}
                        </div>
                    </div>

                    {/* message */}
                    <div className="row">
                        <h5 className="col">message</h5>
                        <div className="col">
                            {message ?
                                <Button className="m-1" variant="danger" onClick={() => setMessage(!message)} >
                                    Hide
                                </Button>
                                :
                                <Button className="m-1" variant="primary" onClick={() => setMessage(!message)}>
                                    Show
                                </Button>}
                        </div>
                    </div>

                </div>
                {/* submit btn */}
                <div className="card-footer d-flex justify-content-end py-3">
                    <Button variant="primary" style={{ minWidth: "150px" }}
                        disabled={
                            about != data[0].about || education != data[0].education ||
                                skill != data[0].skill || experiance != data[0].experiance ||
                                contact != data[0].contact || message != data[0].message
                                ? false : true
                        } onClick={handleSubmit}
                    >
                        {spinner && <Spinner animation="border" size="sm" />}
                        <span className="ps-2">Save Changes</span>
                    </Button>
                </div>

            </div>
        </>
    )
} 