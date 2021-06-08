import React from 'react'
import HornedBeast from './HornedBeast.js'
import 'bootstrap/dist/css/bootstrap.min.css';


class Main extends React.Component {
    
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