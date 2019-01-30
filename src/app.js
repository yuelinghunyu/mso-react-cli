import "../static/component/app.scss";
import React, { Component } from 'react';

class App extends Component{
    constructor() {
        super()
        this.state = {
            logo: require('#/img/logo.jpg')
        }
    }
    render(){
        return(
            <div className='app-container'>
                <img src={this.state.logo} />
                <p className="logo-text">jdj react</p>
                <p className="slogon-text">不念过去、不畏将来</p>
            </div>
        )
    }
}
export default App;