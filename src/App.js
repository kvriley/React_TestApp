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
    this.state = {
      open: false,
      dragging: false,
      x: 0,
      y: 0
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen = () => {
    this.setState({ ...this.state, open: true, dragging: false, x: 0, y: 0 });
    const rObj = this;

    setTimeout(function() {
      const dragOverlay = document.getElementsByClassName("dragoverlay")[0];
      dragOverlay.onmousemove = (e) => {
        e.preventDefault();
        rObj.drag(e);
      };
      dragOverlay.onmouseup = (e) => {
        e.preventDefault();
        rObj.setDrag(e, false);
      };

      const dragPaper = document.getElementsByClassName("dragpaper")[0];
      dragPaper.onmousemove = (e) => {
        e.preventDefault();
        rObj.drag(e);
     };
     dragPaper.onmouseup = (e) => {
      e.preventDefault();
      rObj.setDrag(e, false);
    };

      /* add mover to title */
      const dialogDragger=document.getElementById("dialogdragger"); 
      const dragTitle = document.getElementsByClassName("dragtitle")[0];
      dragTitle.append(dialogDragger);

    },0);
    
  };

  handleClose = (e) => {
    this.setState({ ...this.state, open: false });
  };

  setDrag = (e, set) => {

    this.setState({ ...this.state, dragging: set, x: e.clientX, y: e.clientY }, () => {
//      console.log(`dragging set: ${set}`)
    });
  }

  drag = (e) => {
    if (!this.state.dragging) return;

    let newX = e.clientX - this.state.x;
    let newY = e.clientY - this.state.y;

    document.querySelectorAll('[data-reactroot]')[1].style.top = `${newY}px`;
    document.querySelectorAll('[data-reactroot]')[1].style.left = `${newX}px`;

    console.log(`dragged to x: ${this.state.x} y: ${this.state.y}`)
  }

  render() {

    const draggerStyle = {
      cursor: 'move',
      float: 'right',
      'margin-right': '-20px',
      'margin-top': '-20px',
      'font-size': '12px'
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
                bodyClassName="dragbody"
                contentClassName="dragcontent"
                overlayClassName="dragoverlay"
                paperClassName="dragpaper"
                titleClassName="dragtitle"
                >
                <div
                  id='dialogdragger'
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
