import { useRef, useState } from "react";
import { useReactToPrint } from 'react-to-print';

import Spinner_ from "../components/spinner.js";
import Navbar_ from "../components/navbar.js";
import Home from "../components/home.js";
import About from "../components/about.js";
import Education from "../components/education.js";
import Skill from "../components/skills.js";
import Experiance from "../components/experiance.js";
import ContactMe from "../components/contact.js";
import Footer from "../components/footer.js";
import Lonin from "../components/login.js";


export default function HomePage({ details, login, data }) {

    // model
    const [show, setShow] = useState(false);
    // react to print
    const componentref = useRef();
    const printOnClick = useReactToPrint({
        content: () => componentref.current,
        documentTitle: "Dynamic Portfolio",
    });

    return (
        <>
            {details == null

                ?

                <Spinner_ />

                :
                <>

                    <Lonin show={show} setShow={setShow} />

                    <div ref={componentref} className="fadeInAnimation">

                        {/* navbar */}
                        <Navbar_ login={login} printOnClick={printOnClick} show={show} setShow={setShow} />

                        {/* home */}
                        <Home />

                        {/* about */}
                        <About data={data[0][0].about} />

                        {/* education */}
                        <Education data={data[1]} />

                        {/* skills */}
                        <Skill data={data[2]} />

                        {/* experiance */}
                        <Experiance data={data[3]} />

                        {/* Contact Me */}
                        <ContactMe />

                        {/* footer */}
                        <Footer login={login} printOnClick={printOnClick} show={show} setShow={setShow} />

                    </div>
                </>
            }
        </>
    )
}