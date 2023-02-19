import { useState } from "react";
import axios from "axios";
import { SERVER_URL } from "../../../utilities/links.js";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Spinner } from "react-bootstrap";


export default function ExperianceModel({ model, setModel, method, modelData, loadData, token, displayAlert }) {

    // loading spinner staue
    const [spinner, setSpinner] = useState(false);

    // submit fn.
    const handleSubmit = () => {

        setSpinner(true);

        axios({
            method: method,
            url: `${SERVER_URL}/${method}/experiance`,
            headers: { "Content-type": "application/json", "token": token },
            data: modelData
        })
            .then(res => {
                if (res.status >= 200 && res.status < 300) {
                    loadData();
                    displayAlert('Saved Successfully', 'primary');
                }
            })
            .catch(err => {
                console.log(err);
                displayAlert('Something went wrong, try again', 'danger');
            })
            .finally(() => setSpinner(false))
    }

    return (
        <Modal show={model} backdrop="static" keyboard={false}>

            <Modal.Header>
                <Modal.Title>Experiance</Modal.Title>
            </Modal.Header>

            <Modal.Body>

                {/* Company */}
                <div className="mb-3">
                    <label
                        htmlFor="company"
                        className="form-label"
                    >
                        Company
                    </label>
                    <input
                        id="company"
                        type="text"
                        className="form-control"
                        autoComplete="off"
                        defaultValue={modelData.company}
                        onChange={(e) => modelData.company = e.target.value}
                    />
                </div>

                {/* position */}
                <div className="mb-3">
                    <label
                        htmlFor="position"
                        className="form-label"
                    >
                        Position
                    </label>
                    <input
                        id="position"
                        type="text"
                        className="form-control"
                        autoComplete="off"
                        defaultValue={modelData.position}
                        onChange={(e) => modelData.position = e.target.value}
                    />
                </div>

                {/* Duration */}
                <div className="mb-3">
                    <label
                        htmlFor="duration"
                        className="form-label"
                    >
                        Duration
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
                <Button variant="secondary" onClick={() => setModel(false)}>Close</Button>
                <Button variant="primary" onClick={handleSubmit}>
                    {spinner && <Spinner animation="border" size="sm" className="pe-2" />}
                    <span>Save</span>
                </Button>
            </Modal.Footer>

        </Modal>
    )
}