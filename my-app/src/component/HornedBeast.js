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
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" onClick={this.increaseVotes} src={this.props.image_url} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>{this.props.description}</Card.Text>
                        <Card.Title> ❤️ {this.state.numOfVotes}</Card.Title>
                    </Card.Body>
                </Card> 

                {/* <h2> {this.props.title} </h2>
                <img src={this.props.image_url} alt='UniWhal' onClick={this.increaseVotes} />
                <p> {this.props.description} </p>
                <p> {this.state.numOfVotes} </p> */}

            </div>
        );
    }
}
export default HornedBeast;

