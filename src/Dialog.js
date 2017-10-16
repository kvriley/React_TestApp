import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import './App.css';

const customContentStyle = {
  width: '30%',
  maxWidth: 'none',
};


class App extends Component {

  constructor() {
    super();
    this.state= {open: false};
    
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen = () => {
    this.setState({open: true, dragging: false, x: 0, y: 0 }, () => {
      this.setPosition(this.state.x, this.state.y);
      
      const rObj = this;

      const dialogOverlay = document.getElementsByClassName("dialog-overlay")[0];
      dialogOverlay.onmousemove = (e) => {
        e.preventDefault();
        rObj.drag(e);
      };
      dialogOverlay.onmouseup = (e) => {
        e.preventDefault();
        rObj.setDrag(e, false);
      };

      const dialogPaper = document.getElementsByClassName("dialog-paper")[0];
      dialogPaper.onmousemove = (e) => {
        e.preventDefault();
        rObj.drag(e);
      };
      dialogPaper.onmouseup = (e) => {
      e.preventDefault();
      rObj.setDrag(e, false);
      };

      /* add mover to title */
      const dialogDragger=document.getElementById("dialogDragger"); 
      const dialogTitle = document.getElementsByClassName("dialog-title")[0];
      dialogTitle.append(dialogDragger);
    });

  };

  handleClose = (e) => {
    this.setState({ ...this.state, open: false});
  };

  setDrag = (e, set) => {

    let x = e.clientX - this.state.x;
    let y = e.clientY - this.state.y;

    this.setState({ ...this.state, dragging: set, x: x, y: y }, () => {
//      console.log(`state set: ${set} x: ${x} y: ${y}`);
    });
  }

  setPosition = (x,y) => {
    document.querySelectorAll('[data-reactroot]')[1].style.left = `${x}px`;
    document.querySelectorAll('[data-reactroot]')[1].style.top = `${y}px`;
//    console.log(`position x: ${x} y: ${y}`)
  };

  drag = (e) => {
    if (!this.state.dragging) return;

    let newX = e.clientX - this.state.x;
    let newY = e.clientY - this.state.y;

    this.setPosition(newX, newY);
  }

  render() {

    const draggerStyle = {
      cursor: 'move',
      float: 'right',
      'marginRight': '-20px',
      'marginTop': '-20px',
      'fontSize': '14px'
    };

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={(e) => this.handleClose(e)}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={(e) => this.handleClose(e)}
      />,
    ];

    return (
      <MuiThemeProvider>
        <div className="App" >
          <div className="App-header">
            <h2>Test App</h2>
          </div>

          <div>
            <RaisedButton label="Dialog" onClick={this.handleOpen} />
              <Dialog
                title="Dialog With Actions"
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
                contentStyle={customContentStyle}
                overlayClassName="dialog-overlay"
                paperClassName="dialog-paper"
                titleClassName="dialog-title"
                >
                <div
                  id='dialogDragger'
                  style= {draggerStyle}
                  onMouseDown={(e) => this.setDrag(e, true)}
                  className="material-icons md-18">zoom_out_map</div>
              </Dialog>
          </div>

        </div>
      </MuiThemeProvider>
    );
  }
};

export default App;
