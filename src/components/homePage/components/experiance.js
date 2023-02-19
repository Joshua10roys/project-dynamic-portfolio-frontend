

export default function Experiance({ data }) {

    return (
        <>
            <div id="experiance" className="m-0 p-3 p-md-5 mx-auto">
                <div className="container">

                    <h1 className="text-center font">Experiance</h1>
                    <hr />

                    <div className="d-flex flex-column flex-md-row justify-content-evenly align-items-center" style={{ minHeight: "250px" }}>

                        {data.map((e) => (
                            e.enabled
                                ?
                                <div key={e._id} className="card text-center shadow m-3" style={{ minWidth: "200px", maxHeight: "200px" }}>
                                    <div className="card-body">
                                        <h5 className="card-title">{e.position}</h5>
                                        <p className="card-text">{e.company}</p>
                                        <p className="card-text">{e.duration}</p>
                                    </div>
                                </div>
                                :
                                ''
                        ))}

                    </div>

                </div>
            </div>
        </>
    )
}