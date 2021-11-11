import SingleBook from "./SingleBook";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


function BookList(props){
    return(
        <>
    //Create a BookList component. 
    //This component receives by props a list of books and displays them using the SingleBook component
        <Container>
                <Row>
                {
                props.bookList.map(book =>(
                    <Col lg={4} className="my-2">
                    
                   
                    <Card style={{ width: '22rem' }}>
                    <Card.Img   variant="top" src={book.img} />
                    <Card.Body>
               
                      <Card.Text>
                      {book.title}
                      </Card.Text>
                      <Button variant="primary">Buy</Button>
                    </Card.Body>
                  </Card>
                  </Col>
                    ))
                
            }
                </Row>
            </Container>

        </>
    )
}

export default BookList