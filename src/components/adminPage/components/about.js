import { useState } from "react"
import axios from "axios";
import { SERVER_URL } from "../../../utilities/links.js";
import Button from "react-bootstrap/Button"
import Spinner from 'react-bootstrap/Spinner';


export default function About({ data, loadData, token, displayAlert }) {

    // edit state
    const [edit, setEdit] = useState(false);
    // loading spinner staue
    const [spinner, setSpinner] = useState(false);

    // submit fn.
    const handleSubmit = () => {

        setEdit(false);
        setSpinner(true);

        let textContent = document.getElementById('aboutContent').value;
        data[0].aboutContent = textContent;

        axios({
            method: "patch",
            url: `${SERVER_URL}/patch/about`,
            headers: { "Content-type": "application/json", "token": token },
            data: data[0]
        })
            .then(res => {
                if (res.status >= 200 && res.status < 300) {
                    loadData();
                    displayAlert('Changes Saved Successfully', 'primary');
                }
            })
            .catch(err => {
                displayAlert('Something went wrong, try again', 'danger');
            })
            .finally(() => {
                setEdit(false);
                setSpinner(false);
            })
    }

    return (
        <div className="container">
            <div className="container card my-4 p-0" >

                <div className="card-header m-0">
                    <h4 className="text-center py-2">Edit/Change Content</h4>
                </div>

                <div className="card-body" style={{ width: "90%" }}>
                    <label htmlFor="aboutContent" className="form-label">About Content</label>
                    <textarea className="form-control mx-md-5" id="aboutContent" rows="5"
                        defaultValue={data[0].aboutContent} disabled={!edit} />
                </div>

                {/* buttons */}
                <div className="card-footer d-flex justify-content-end py-3">
                    <Button className="mx-2" variant="secondary" disabled={edit}
                        onClick={() => setEdit(!edit)} style={{ width: '80px', fontWeight: 600 }}>
                        Edit
                    </Button>
                    <Button className="mx-2" variant="primary" disabled={!edit}
                        onClick={handleSubmit} style={{ width: '100px', fontWeight: 600 }}>
                        {spinner && <Spinner animation="border" size="sm" />}
                        <span className="ps-2">Save</span>
                    </Button>
                </div>

            </div>
        </div>
    )
}