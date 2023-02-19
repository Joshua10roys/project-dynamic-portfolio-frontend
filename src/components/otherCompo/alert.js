import Alert from 'react-bootstrap/Alert';


export default function DisplayAlert({ alert, setAlert }) {

    const { display, message, variant } = alert;

    // alert close fn.
    const alertClose = () => {
        setAlert({ display: false, message: "", variant: "" })
    }

    // alert auto close
    if (display) {
        setTimeout(() => {
            setAlert({ display: false, message: "", variant: "" });
        }, 3000);
    }

    return (
        <div style={{
            position: "fixed",
            top: "50px",
            left: 0,
            right: 0,
            marginLeft: "auto",
            marginRight: "auto",
            zIndex: 1070,
            maxWidth: "500px",
            display: display ? "block" : "none"
        }} >

            <Alert className='m-0 p-3' variant={variant} onClose={alertClose} dismissible >
                <h5 className='m-0'>{message}</h5>
            </Alert>

        </div>
    )
}

