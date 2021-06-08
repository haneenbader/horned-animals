import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numOfVotes: 0
        }
    }
    increaseVotes = () => {
        this.setState(
            {
                numOfVotes: this.state.numOfVotes + 1
            }
        );
    }
    showModal = ()=> { 

    }
    render() {
        return (
            <div>
                <Card style={{width: '18rem' }} onClick={this.showModal}>
                    <Card.Img variant="top" onClick={this.increaseVotes} src={this.props.image_url} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>{this.props.description}</Card.Text>
                        <Card.Title> ❤️ {this.state.numOfVotes}</Card.Title>
                    </Card.Body>
                </Card> 


            </div>
        );
    }
}
export default HornedBeast;

