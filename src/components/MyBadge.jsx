import Badge from 'react-bootstrap/Badge'
import Container from 'react-bootstrap/Container'
function MyBadge(props){
    return(
        <>
       <Container>
       <h1>
    {props.text} <Badge variant="primary" text="light" bg={props.color}>-50%</Badge>
  </h1>
       </Container>
        </>
    )
}

export default MyBadge