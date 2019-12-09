import React, { Component } from 'react';

export default class ColorBox extends Component {


  render() {
    const newOpacity = this.props.opacity - 0.1;
    let child = null
    if (this.props.opacity > 0.2) {  
     child = <ColorBox opacity={newOpacity}/>
    }
    
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>   
        {child}
      </div>
    )
  }

}

