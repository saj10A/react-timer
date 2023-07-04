import React from 'react';
import './style.css'

import Hello from './Hello';
import Timer from './Timer';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "سلام بر شما دوستان"
        }
    }
    handleSetTitle = () => {
        this.setState({
            title: "به وبسایت سجاد خوش آمدید"
        })
    }
    render(){
        return (
        <div className="main">
            <Hello title={this.state.title}/>        
            <Timer handleSetTitle={this.handleSetTitle}/>
        </div>
        ) 
    }
}


export default App;
