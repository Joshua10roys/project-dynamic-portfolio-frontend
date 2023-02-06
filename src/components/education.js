



export default function Education({ data }) {

    // data.map(e => console.log(e))
    return (
        <>
            <div id="education" className="m-0 p-3 p-md-5 mx-auto">
                <div className="container">

                    <h1 className="text-center">Education</h1>
                    <hr />

                    <div className="d-flex flex-column flex-md-row justify-content-evenly align-items-center" style={{ minHeight: "250px" }}>

                        {data.map((e) => (
                            <div key={e.id} className="card text-center shadow m-3" style={{ maxHeight: "200px" }}>
                                <div className="card-body">
                                    <h5 className="card-title">{e.course}</h5>
                                    <p className="card-text">{e.institute}</p>
                                    <p className="card-text">{e.duration}</p>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>
            </div>

        </>
    )
}