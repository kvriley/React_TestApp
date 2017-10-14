import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import $ from 'jquery';

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
      $(".dragoverlay").on("mousemove", (e) => {
        e.preventDefault();
        rObj.drag(e);
     });
     $(".dragpaper").on("mousemove", (e) => {
       e.preventDefault();
      rObj.drag(e);
   });
   $(".dragoverlay").on("mouseup", (e) => {
      rObj.setDrag(e, false);
   });
   $(".dragpaper").on("mouseup", (e) => {
    rObj.setDrag(e, false);
 });
  }, 1000);
    
  };

  handleClose = (e) => {
    this.setState({ ...this.state, open: false });
  };

  handleDrag = (e) => {
    console.log(`x:${e.clientX} y:${e.clientY}`);
  }

  setDrag = (e, set) => {

    this.setState({ ...this.state, dragging: set, x: e.clientX, y: e.clientY }, () => {
      console.log(`dragging set: ${set}`)
    });
  }

  drag = (e) => {
    if (!this.state.dragging) return;

    let newX = e.clientX - this.state.x;
    let newY = e.clientY - this.state.y;

    $("[data-reactroot]").css("top", newY);
    $("[data-reactroot]").css("left", newX);

    console.log(`dragged to x: ${this.state.x} y: ${this.state.y}`)
  }



  render() {

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
                  onMouseDown={(e) => this.setDrag(e, true)}
                  className="material-icons testdrag">settings_overscan</div>
              </Dialog>
          </div>

        </div>
      </MuiThemeProvider>
    );
  }
};

export default App;
