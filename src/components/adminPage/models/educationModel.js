import { useState } from "react";
import axios from "axios";
import { SERVER_URL } from "../../../utilities/links.js";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Spinner } from "react-bootstrap";

export default function EducationModel({ addModel, setAddModel, method, modelData, loadData, token, displayAlert }) {

    // loading spinner staue
    const [spinner, setSpinner] = useState(false);

    // submit fn.
    const handleSubmit = () => {

        setSpinner(true);

        axios({
            method: method,
            url: `${SERVER_URL}/${method}/education`,
            headers: { "Content-type": "application/json", "token": token },
            data: modelData
        })
            .then(res => {
                if (res.status >= 200 && res.status < 300) {
                    loadData();
                    displayAlert('Saved Successfully', 'primary');
                }
            })
            .catch(err => displayAlert('Something went wrong, try again', 'danger'))
            .finally(() => setSpinner(false))
    }

    return (
        <Modal show={addModel} backdrop="static" keyboard={false}>

            <Modal.Header>
                <Modal.Title>Education</Modal.Title>
            </Modal.Header>

            <Modal.Body>

                {/* Course */}
                <div className="mb-3">
                    <label
                        htmlFor="courseName"
                        className="form-label"
                    >
                        Course Name
                    </label>
                    <input
                        id="courseName"
                        type="text"
                        className="form-control"
                        autoComplete="off"
                        defaultValue={modelData.course}
                        onChange={(e) => modelData.course = e.target.value}
                    />
                </div>

                {/* Institute */}
                <div className="mb-3">
                    <label
                        htmlFor="institute"
                        className="form-label"
                    >
                        Institute Name
                    </label>
                    <input
                        id="institute"
                        type="text"
                        className="form-control"
                        autoComplete="off"
                        defaultValue={modelData.institute}
                        onChange={(e) => modelData.institute = e.target.value}
                    />
                </div>

                {/* Duration */}
                <div className="mb-3">
                    <label
                        htmlFor="duration"
                        className="form-label"
                    >
                        Course Duration
                    </label>
                    <input
                        id="duration"
                        type="text"
                        className="form-control"
                        autoComplete="off"
                        defaultValue={modelData.duration}
                        onChange={(e) => modelData.duration = e.target.value}
                    />
                </div>

                {/* Visibility */}
                <div className="mb-2">
                    <span className="me-3">Course Visibility:</span>
                    <input
                        id="visible"
                        className="form-check-input me-1"
                        type="radio"
                        name="visibility"
                        value={true}
                        onClick={(e) => modelData.enabled = e.target.value}
                        defaultChecked={modelData.enabled == true ? true : false}
                    />
                    <label
                        className="form-check-label me-2"
                        htmlFor="visible"
                    >
                        Visible
                    </label>
                    <input
                        id="hide"
                        className="form-check-input me-1"
                        type="radio"
                        name="visibility"
                        value={false}
                        onClick={(e) => modelData.enabled = e.target.value}
                        defaultChecked={modelData.enabled == false ? true : false}
                    />
                    <label
                        className="form-check-label"
                        htmlFor="hide"
                    >
                        Hide
                    </label>
                </div>

            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => setAddModel(false)}>Close</Button>
                <Button variant="primary" onClick={handleSubmit}>
                    {spinner && <Spinner animation="border" size="sm" className="pe-2" />}
                    <span>Save</span>
                </Button>
            </Modal.Footer>

        </Modal>
    )
}