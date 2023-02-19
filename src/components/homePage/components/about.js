

export default function About({ data }) {

    return (
        <>
            <div id="about" className="m-0 p-4 p-md-5 mx-auto text-center">

                <div className="container">

                    <h1 className="mb-3 mb-md-4 about">About</h1>
                    <hr />
                    <p className="my-3 my-md-4 mx-auto h4 fw-normal lh-lg aboutContect">
                        {data[0].aboutContent}
                    </p>

                </div>

            </div>
        </>
    )
}