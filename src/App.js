import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import {settings} from './config/App.js';
import MainTabs from './components/MainTabs';
import MainMenu from './components/MainMenu';

import './App.css';

const appStyles= {
    backgroundColor: '#eeeeee',
};

const mainStyles = {
    backgroundColor: '#eeeeee',
    height: '1000px'
};
const tabStyles = {
    marginLeft: '30px',
    marginRight: '30px',
    backgroundColor: 'white',
};


class App extends Component {

    constructor() {
        super();
    }

    render() {

        return (
        <MuiThemeProvider>
            <div className="App" >
                <div style={mainStyles}>
                    <div style={tabStyles}>
                        <MainTabs />
                    </div>
                </div>
            </div>

        </MuiThemeProvider>
        );
    }
};

export default App;
