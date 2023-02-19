import { useEffect, useRef, useState } from "react";
import { useReactToPrint } from 'react-to-print';
import axios from "axios";
import { SERVER_URL } from "../utilities/links.js";
import Spinner1 from "../components/otherCompo/spinner.js";
import Navbar1 from "../components/homePage/components/navbar.js";
import Home from "../components/homePage/components/home.js";
import About from "../components/homePage/components/about.js";
import Education from "../components/homePage/components/education.js";
import Skill from "../components/homePage/components/skills.js";
import Experiance from "../components/homePage/components/experiance.js";
import ContactMe from "../components/homePage/components/contact.js";
import Footer from "../components/homePage/components/footer.js";
import Lonin from "../components/homePage/models/login.js";


export default function HomePage({ login, setLogin, logout, displayAlert }) {

    // fetch data
    const [data, setData] = useState(null);
    // model
    const [show, setShow] = useState(false);

    // react to print
    const componentref = useRef();
    const printOnClick = useReactToPrint({
        content: () => componentref.current,
        documentTitle: "Dynamic Portfolio",
    }, []);

    // loading data
    useEffect(() => {
        document.title = 'Portfolio';
        setData(null);
        axios.get(`${SERVER_URL}/get/getData`)
            .then(res => {
                if (res.status >= 200 && res.status < 300) {
                    setData(res.data.data)
                }
            })
            .catch(err => console.log(err.message))
    }, [])

    return (
        <>
            {data == null
                ?
                <Spinner1 />
                :
                <>
                    <Lonin show={show} setShow={setShow} setLogin={setLogin} displayAlert={displayAlert} />

                    <div ref={componentref} className="fadeInAnimation">

                        {/* navbar */}
                        <Navbar1 login={login} printOnClick={printOnClick} show={show} setShow={setShow} logout={logout} />

                        {/* home */}
                        <Home />

                        {/* about */}
                        {data.component[0].about && <About data={data.about} />}

                        {/* education */}
                        {data.component[0].education && <Education data={data.education} />}

                        {/* skills */}
                        {data.component[0].skill && <Skill data={data.skill} />}

                        {/* experiance */}
                        {data.component[0].experiance && <Experiance data={data.experiance} />}

                        {/* Contact Me */}
                        <ContactMe data={data.contact} displayAlert={displayAlert} component={data.component[0]} />

                        {/* footer */}
                        <Footer login={login} printOnClick={printOnClick} show={show} setShow={setShow} logout={logout} />

                    </div>
                </>
            }
        </>
    )
}