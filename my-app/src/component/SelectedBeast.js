import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'



class SelectedBeast extends React.Component {
    
    render() {
        return (
            <div>


                <Card style={{ width: '18rem' } }>
                    <Card.Img variant="top" onClick={this.increaseVotes} src={this.props.image_url} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>{this.props.description}</Card.Text>
                    </Card.Body>
                </Card> 

                

            </div>
        );
    }
}
export default SelectedBeast;

