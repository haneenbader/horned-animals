
import React from 'react'
import Header from './component/Header'
import Main from './component/Main'
import Footer from './component/Footer'
import SelectedBeast from './SelectedBeast'
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from '../assest/data.json'



class App extends React.Component {
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
      <div>
        <Header />
        <Main />
        <SelectedBeast/>
        <Footer />
        
      </div>
    );
  }
}
export default App ;