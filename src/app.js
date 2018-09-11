import "../static/component/app.scss";
import React, { Component } from 'react';

class App extends Component{
    render(){
        return(
            <div className='app-container'>
                <img src="../static/img/logo" />
                <p className="logo-text">jdj react</p>
                <p className="slogon-text">不念过去、不畏将来</p>
            </div>
        )
    }
}
export default App;