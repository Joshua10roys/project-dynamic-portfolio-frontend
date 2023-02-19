import axios from "axios";
import { SERVER_URL } from "../../../utilities/links.js";
import Button from "react-bootstrap/Button";


export default function Message({ data, loadData, token, displayAlert }) {

    // fn. for date format
    const getDate = (date) => {
        let D = new Date(date);
        let dateTime = D.getDate() + '/' + D.getMonth() + '/' + D.getFullYear() + ' ' + D.getHours() + ':' + D.getMinutes();
        return dateTime;
    }

    // delete fn.
    const deleteMessage = (_id) => {
        axios.delete(`${SERVER_URL}/delete/message/${_id}`, {
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

                <div className="container card my-4 p-0" >

                    {/* header */}
                    <div className="card-header m-0">
                        <h4 className="text-center py-2">Message</h4>
                    </div>

                    {/* body */}
                    <div className="card-body">

                        {/* table */}
                        <table className="table table-bordered table-striped align-middle text-center m-0">

                            {/* table head */}
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Message</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Options</th>
                                </tr>
                            </thead>

                            {/* table body */}
                            <tbody>
                                {data.map(ele => (
                                    <tr key={ele._id}>
                                        <th>{ele.name}</th>
                                        <td>{ele.message}</td>
                                        <td>{getDate(ele.created)}</td>
                                        <td >
                                            <Button className="mx-2 my-1" variant="danger"
                                                onClick={() => deleteMessage(ele._id)}>Delete</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>

                    </div>

                    {/* footer */}
                    <div className="card-footer d-flex justify-content-end py-3"> </div>

                </div>
            </div>
        </>
    )
}