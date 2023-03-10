

export default function Footer({ login, printOnClick, show, setShow, logout }) {

    return (
        <>
            <div id="footer" className="p-4 p-md-4 mx-auto text-white">

                <div className="d-md-flex justify-content-around align-items-center text-center">

                    <div className="pt-3">
                        <p><a href="#home" className="h6">Home</a></p>
                        <p><a href="#about" className="h6">About</a></p>
                        <p><a href="#education" className="h6">Education</a></p>
                        <p><a href="#skills" className="h6">Skills</a></p>
                    </div>

                    <div className="pt-md-3">
                        <p><a href="#experiance" className="h6">Experiance</a></p>
                        <p><a href="#contactMe" className="h6">Contact Me</a></p>
                        <p><a type="button" onClick={printOnClick} className="h6 m-0">Print</a></p>
                        {
                            login
                                ?
                                <p><a type="button" className="h6 m-0" onClick={logout}>Logout</a></p>
                                :
                                <p><a type="button" className="h6 m-0" onClick={() => setShow(!show)}>Login</a></p>
                        }
                    </div>

                    <hr className="d-none d-md-block vr" />
                    <hr className="d-md-none" />

                    <div>
                        <p>Made by <b>Joshua Ashvinth Roys</b></p>
                        <hr className="d-none d-md-block mx-auto" style={{ width: "160px" }} />
                    </div>

                </div>

            </div>
        </>
    )
}