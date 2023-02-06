import { useRef } from "react";
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


export default function HomePage({ details, login, data }) {

    // console.log(data[1]);
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

                <div ref={componentref} className="fadeInAnimation">

                    {/* navbar */}
                    <Navbar_ login={login} printOnClick={printOnClick} />

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
                    <Footer login={login} printOnClick={printOnClick} />

                </div>
            }
        </>
    )
}