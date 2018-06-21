import React from "react"
import PropTypes from "prop-types"

import {SketchPicker} from "react-color"

/* Line 5 is your inheritance */
class Colorpicker extends React.Component {
	render(){
		return (<React.Fragment>
				<SketchPicker/>
               </React.Fragment>)
	}
}

/* export default makes it so that some other javascript that we're using to actually load all of the stuff onto the browser
   can find the colorpicker class when we reference it */
export default Colorpicker;

/* Proptypes are the declarations of which properties you will be using */
Colorpicker.propTypers = {};