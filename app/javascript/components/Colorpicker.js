import React from "react"
import PropTypes from "prop-types"

import {SketchPicker} from "react-color"

/* Line 5 is your inheritance */
class Colorpicker extends React.Component {

	constructor(props){
		super(props);
		this.state = {selector: props.selector};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = (color) => {
		document.body.style.background = color.hex;
		let element = document.querySelector('#'+this.state.selector);

		element.value = color.hex;
	}

	render(){
		return (<React.Fragment>
				<SketchPicker color= {this.props.color} // to specify which color the sketch picker should start off with 
				              onChange={this.handleChange}/> 
				</React.Fragment>

       );

	}

}



export default Colorpicker;


Colorpicker.propTypers = {};