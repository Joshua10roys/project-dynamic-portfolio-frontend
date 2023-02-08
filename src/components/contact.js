import * as yup from "yup";
import { useFormik } from "formik";


export default function ContactMe() {

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
            console.log(value);
            formik.resetForm();
        }
    })

    return (
        <>
            <div id="contactMe" className="m-0 p-5 mx-auto">
                <div className="container">

                    <h1 className="mb-3 mb-md-4 ontactMe text-center font">Contact Me</h1>
                    <hr />

                    <div className="row">

                        <div className="col-12 col-md-4 my-md-4 mx-auto">

                            <i className="bi bi-github" style={{ fontSize: "23px" }}></i>
                            <p className="d-inline-block fs-5 ps-3">
                                <a target="_blank" className="text-dark" href="https://github.com/login">
                                    GitHub
                                </a>
                            </p><br />

                            <i className="bi bi-linkedin" style={{ fontSize: "23px" }}></i>
                            <p className="d-inline-block fs-5 ps-3">
                                <a target="_blank" className="text-dark" href="https://www.linkedin.com/login">
                                    LinkedIn
                                </a>
                            </p><br />


                            <i className="bi bi-twitter" style={{ fontSize: "23px" }}></i>
                            <p className="d-inline-block fs-5 ps-3">
                                <a target="_blank" className="text-dark" href="https://twitter.com/">
                                    Twitter
                                </a>
                            </p><br />

                            <i className="bi bi-envelope-fill" style={{ fontSize: "23px" }}></i>
                            <p className="d-inline-block fs-5 ps-3">
                                samplemail@gmail.com
                            </p><br />

                            <i className="bi bi-geo-alt-fill" style={{ fontSize: "23px" }}></i>
                            <p className="d-inline-block fs-5 ps-3">
                                Chennai, Tamil Nadu, India
                            </p><br />

                        </div>

                        <hr className="d-none d-md-block p-0 vr" />
                        <hr className="d-md-none p-0" />

                        <div className="col-12 col-md-6 my-md-4 mx-auto">
                            <form onSubmit={formik.handleSubmit} className="needs-validation">
                                <label
                                    htmlFor="name"
                                    className="form-label"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className={`form-control ${formik.errors.name && formik.touched.name
                                        ? "is-invalid"
                                        : ""}`}
                                    autoComplete="off"
                                    placeholder="name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />

                                <label
                                    htmlFor="message"
                                    className="mt-4 form-label"
                                >
                                    Message
                                </label>
                                <textarea
                                    className={`form-control  ${formik.errors.message && formik.touched.message
                                        ? "is-invalid"
                                        : ""}`}
                                    id="message"
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

                    </div>

                </div>

            </div>
        </>
    )
}