import * as yup from "yup";
import { useFormik } from "formik";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { SERVER_URL } from "../utilities/links.js";

export default function Lonin({ show, setShow }) {

    const onClose = () => {
        setShow(false);
        formik.resetForm();
    }

    const formik = useFormik({

        initialValues: {
            username: "",
            password: ""
        },

        validationSchema: yup.object().shape({
            username: yup.string().required().matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i),
            password: yup.string().required(),
        }),

        onSubmit: (value) => {

            fetch(`${SERVER_URL}/user/login`, {
                method: 'POST',
                body: JSON.stringify(value),
                headers: {
                    "Content-type": "application/json",
                    "credentials": "include",
                    "withCredentials": "true",
                }
            })
                .then(res => res.json())
                .then((res) => console.log(res))
                .then(() => formik.resetForm())
                .catch((error) => console.log(error.message))
        }
    })

    return (
        <>
            <Modal size="lg" show={show} onHide={onClose} aria-labelledby="login-modal" >

                <Modal.Header>
                    <Modal.Title id="login-modal" className="mx-auto">
                        <h3>Login</h3>
                    </Modal.Title>
                </Modal.Header>

                <form onSubmit={formik.handleSubmit}>

                    <Modal.Body className="mx-auto needs-validation" style={{ maxWidth: "450px" }}>

                        <label htmlFor="username" className="form-label" >Username</label>
                        <input
                            autoFocus
                            type="text"
                            id="username"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={`form-control ${formik.errors.username && formik.touched.username
                                ? "is-invalid"
                                : ""}`}
                        />

                        <label htmlFor="password" className="mt-4 form-label" >Password</label>
                        <input
                            type="password"
                            id="password"
                            autoComplete="off"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={`form-control  ${formik.errors.password && formik.touched.password
                                ? "is-invalid"
                                : ""}`}
                        />
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={onClose}>Close</Button>
                        <Button variant="primary" type="submit" onClick={formik.handleSubmit}>Login</Button>
                    </Modal.Footer>

                </form>

            </Modal>
        </>
    )
}