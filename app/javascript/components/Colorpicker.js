import React from "react"
import PropTypes from "prop-types"

import {SketchPicker} from "react-color"

/* Line 5 is your inheritance */
class Colorpicker extends React.Component {

	constructor(props){
		super(props);

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = (color) => {
		console.log(color.hex);
	}

	render(){
		return (<React.Fragment>
				<SketchPicker color= {this.props.color}
				              onChange={this.handleChange}/> //gets the color of the sketch picker as an input 
               </React.Fragment>

       );

	}

}

/* export default makes it so that some other javascript that we're using to actually load all of the stuff onto the browser
   can find the colorpicker class when we reference it */

export default Colorpicker;

/* Proptypes are the declarations of which properties you will be using */
Colorpicker.propTypers = {};