import { useState } from "react";
import axios from "axios";
import { SERVER_URL } from "../../../utilities/links.js";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Spinner } from "react-bootstrap";


export default function SkillModel({ addModel, setAddModel, method, modelData, loadData, token, displayAlert }) {

    // loading spinner staue
    const [spinner, setSpinner] = useState(false);

    // submit fn.
    const handleSubmit = () => {

        setSpinner(true);

        axios({
            method: method,
            url: `${SERVER_URL}/${method}/skill`,
            headers: { "Content-type": "application/json", "token": token },
            data: modelData
        })
            .then(res => {
                if (res.status >= 200 && res.status < 300) {
                    loadData();
                    displayAlert('Changes Saved Successfully', 'primary');
                }
            })
            .catch(err => displayAlert('Something went wrong, try again', 'danger'))
            .finally(() => setSpinner(false))
    }

    return (
        <Modal show={addModel} backdrop="static" keyboard={false}>

            <Modal.Header>
                <Modal.Title>Skill</Modal.Title>
            </Modal.Header>

            <Modal.Body>

                {/* Name */}
                <div className="mb-3">
                    <label
                        htmlFor="name"
                        className="form-label"
                    >
                        Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        className="form-control"
                        autoComplete="off"
                        defaultValue={modelData.name}
                        onChange={(e) => modelData.name = e.target.value}
                    />
                </div>

                {/* Value */}
                <div className="mb-3">
                    <label
                        htmlFor="value"
                        className="form-label"
                    >
                        Value
                    </label>
                    <input
                        id="value"
                        type="text"
                        className="form-control"
                        autoComplete="off"
                        defaultValue={modelData.value}
                        onChange={(e) => modelData.value = e.target.value}
                    />
                </div>

                {/* Color */}
                <div className="mb-3">
                    <label
                        htmlFor="color"
                        className="form-label"
                    >
                        Color
                    </label>
                    <input
                        id="color"
                        type="text"
                        className="form-control"
                        autoComplete="off"
                        defaultValue={modelData.color}
                        onChange={(e) => modelData.color = e.target.value}
                    />
                </div>

                {/* Visibility */}
                <div className="mb-2">
                    <span className="me-3">Language Visibility:</span>
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