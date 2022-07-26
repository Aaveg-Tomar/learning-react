import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './user.css';




function User(props){
    const {data}=props;
        console.log(props.data)
    return(
        <Card className='mainDiv'>
        <Card.Img variant="top" src={data.picture} />
        <Card.Body>
          <Card.Title>{ ` ${data.title} ${data.firstName} ${data.lastName} ` }</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

    
    );
}

export default User;