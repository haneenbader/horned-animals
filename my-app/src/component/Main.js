import React from 'react'
import HornedBeast from './HornedBeast.js'
import Data from './Component/assest/data.json'


class Main extends React.Component {
    // pass value from main to hornedbeast
    constructor(props) {
        super(props);
        // change condition in hornedbeast  
        this.state = {
            Pictures: Data
        };
    }
    render() {
        return (
            this.state.Picture.map(hornedInfo => {
                return (
                    <div>
                        <HornedBeast
                            title={hornedInfo.title}
                            image_url={hornedInfo.image_url}
                            description={hornedInfo.description}
                        />
                        <div>
                            <h2> {this.hornedInfo.title} </h2>
                            <img src={this.hornedInfo.image_url} alt='UniWhal'/>
                            <p> {this.hornedInfo.description} </p>
                        </div>
                    </div>
                );
            })
        )
    }
}
export default Main;