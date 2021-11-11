
import './App.css';
import WarningSign from './components/WarningSign';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MyBadge from './components/MyBadge';
import HistoryBooks from './components/history.json'
import SingleBook from './components/SingleBook';
import BookList from './components/BookList';

function App() {
  return (
   <>
   <Container>
   <h1>Hi there</h1>
   <WarningSign alertType="1st task: Alert"/>

   <MyBadge text="Books List" color="success" />
    <SingleBook bookObj = {HistoryBooks} /> 
    <BookList booklist= {HistoryBooks}/>
   </Container>
   

   </>
  );
}

export default App;
