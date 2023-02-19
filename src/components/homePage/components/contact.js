import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import { SERVER_URL } from '../../../utilities/links.js'


export default function ContactMe({ data, displayAlert, component }) {

    // formik
    const formik = useFormik({
        initialValues: {
            name: "",
            message: ""
        },
        validationSchema: yup.object().shape({
            name: yup.string().required().min(4).max(20),
            message: yup.string().required().min(10).max(200),
        }),
        onSubmit: (value) => {

            axios({
                method: 'post',
                url: `${SERVER_URL}/post/message`,
                headers: { 'content-type': 'application/json' },
                data: JSON.stringify(value),
            })
                .then(res => displayAlert('Message Sent', 'success'))
                .catch(res => displayAlert('Something went wrong, Please try again', 'warning'))
                .finally(() => formik.resetForm())
        }
    })

    return (
        <>
            {component.contact || component.message

                ?

                <div id="contactMe" className="m-0 p-5 mx-auto">
                    <div className="container">

                        <h1 className="mb-3 mb-md-4 ontactMe text-center font">Contact Me</h1>
                        <hr />

                        <div className="row">

                            {/* contact & profiles */}
                            {component.contact &&
                                <div className="col-12 col-md-4 my-md-4 mx-auto">

                                    {data.map(item => (
                                        item.enabled &&
                                        <div key={item._id} className="row">
                                            {item.isLink
                                                ?
                                                <div>
                                                    <i className={item.icon} style={{ fontSize: "23px" }}></i>
                                                    <p className="d-inline-block fs-5 ps-3">
                                                        <a target="_blank" className="text-dark" href={item.link}>
                                                            {item.name}
                                                        </a>
                                                    </p>
                                                </div>
                                                :
                                                <div>
                                                    <i className={item.icon} style={{ fontSize: "23px" }}></i>
                                                    <p className="d-inline-block fs-5 ps-3">
                                                        {item.name}
                                                    </p>
                                                </div>
                                            }</div>
                                    ))}
                                </div>
                            }

                            <hr className="d-none d-md-block p-0 vr" />
                            <hr className="d-md-none p-0" />

                            {/* message */}
                            {component.message &&
                                <div className="col-12 col-md-6 my-md-4 mx-auto">

                                    {/* form */}
                                    <form onSubmit={formik.handleSubmit} className="needs-validation">

                                        {/* name */}
                                        <label
                                            htmlFor="name"
                                            className="form-label"
                                        >
                                            Name
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            className={`form-control ${formik.errors.name && formik.touched.name
                                                ? "is-invalid"
                                                : ""}`}
                                            autoComplete="off"
                                            placeholder="name"
                                            value={formik.values.name}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />

                                        {/* message text area */}
                                        <label
                                            htmlFor="message"
                                            className="mt-4 form-label"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            className={`form-control  ${formik.errors.message && formik.touched.message
                                                ? "is-invalid"
                                                : ""}`}
                                            rows="3"
                                            autoComplete="off"
                                            placeholder="send me your message"
                                            value={formik.values.message}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        >
                                        </textarea>

                                        <button type="submit" className="btn btn-primary ms-2 mt-4 fw-bold"
                                            style={{ width: "90px" }}>
                                            Send
                                        </button>
                                    </form>
                                </div>
                            }

                        </div>

                    </div>

                </div >
                :
                ''
            }
        </>
    )
}