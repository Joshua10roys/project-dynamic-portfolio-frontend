import { useState } from "react";
import axios from "axios";
import { SERVER_URL } from "../../../utilities/links.js";
import EducationModel from "../models/educationModel.js";
import Button from "react-bootstrap/Button";


export default function Education({ data, loadData, token, displayAlert }) {

    // for adding new
    const [addModel, setAddModel] = useState(false);
    const [method, setMethod] = useState('');
    const [modelData, setModelData] = useState({});

    const object = { enabled: true, course: "", institute: "", duration: "" }

    // model fn.
    const handleModel = (model, method, data) => {

        setMethod(method)
        setModelData(data);
        setAddModel(model);
    }

    // delete fn.
    const deleteEdu = (_id) => {
        axios.delete(`${SERVER_URL}/delete/education/${_id}`, {
            headers: { "token": token }
        })
            .then(res => {
                if (res.status >= 200 && res.status < 300) {
                    displayAlert('Deletion Successful', 'success');
                    loadData();
                }
            })
            .catch(err => {
                console.log(err);
                displayAlert('Something Went Wrong', 'success')
            })
    }

    return (
        <>
            <div className="container">

                <EducationModel addModel={addModel} setAddModel={setAddModel} method={method} modelData={modelData}
                    loadData={loadData} token={token} displayAlert={displayAlert} />

                <div className="container card my-4 p-0" >

                    <div className="card-header m-0">
                        <h4 className="text-center py-2">Edit/Delete/Add Education</h4>
                    </div>

                    <div className="card-body">
                        <table className="table table-bordered table-striped align-middle m-0">
                            <thead>
                                <tr className="text-center">
                                    <th scope="col">Course</th>
                                    <th scope="col">Institute</th>
                                    <th scope="col">Duration</th>
                                    <th scope="col">Visibility</th>
                                    <th scope="col">Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(ele => (
                                    <tr key={ele._id}>
                                        <th>{ele.course}</th>
                                        <td>{ele.institute}</td>
                                        <td>{ele.duration}</td>
                                        <td className="text-center">{ele.enabled
                                            ? <span className="badge bg-success">Visible</span>
                                            : <span className="badge bg-warning">Hidden</span>
                                        }</td>
                                        <td className="text-center">
                                            <Button className="mx-2 my-1" variant="secondary"
                                                onClick={() => handleModel(true, 'patch', ele)}>Edit</Button>
                                            <Button className="mx-2 my-1" variant="danger"
                                                onClick={() => deleteEdu(ele._id)}>Delete</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* buttons */}
                    <div className="card-footer d-flex justify-content-end py-3">
                        <Button className="mx-2" variant="primary" style={{ width: '100px', fontWeight: 600 }}
                            onClick={() => handleModel(true, 'post', object)}
                        >
                            Add New
                        </Button>
                    </div>

                </div>
            </div>
        </>
    )
}