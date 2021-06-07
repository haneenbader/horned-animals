import React from 'react'
import HornedBeast from './HornedBeast.js'
import Data from '../assest/data.json'


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
            this.state.Pictures.map(hornedInfo => {
                return (
                    <div>
                        <HornedBeast
                            title={hornedInfo.title}
                            image_url={hornedInfo.image_url}
                            description={hornedInfo.description}
                        />
                        
                    </div>
                );
            })
        )
    }
}
export default Main;