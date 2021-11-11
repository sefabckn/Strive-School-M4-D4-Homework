import Alert from 'react-bootstrap/Alert'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

function WarningSign (props){ 
    return(
<>

<Container>
<Alert  variant="danger">
    {props.alertType}
  </Alert>
</Container>

</>
    )

}

export default WarningSign