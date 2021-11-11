import 'bootstrap/dist/css/bootstrap.min.css'
import { Component } from 'react'
import Card from 'react-bootstrap/Card'
// import Col from 'react-bootstrap/Col'



class SingleBook extends Component{
    // const {img, title, category, price} = this.props
state={
    selected:false
}
  render(){
    return(
        <>
        <Card
        onClick={()=> this.setState({selected: !this.state.selected})}
        style={
            // eslint-disable-next-line no-sequences
            {transform: this.state.selected ? 'scale(1.05)': 'none',
            border: this.state.selected ? '3px solid blue': 'none'
        }
           
        }
        >
            <Card.Img height="500px" variant="top" src={this.props.historyBook.img}></Card.Img>
            <Card.Body className="bg-secondary text-light">
            <Card.Text >
                {this.props.historyBook.title}
            </Card.Text>
            </Card.Body>
        </Card>
        </>
    )
  }
}

export default SingleBook