// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render(){
    return(
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.producer}</p>
        <p>{this.props.hasWatermark}</p>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
      </div>
    )
  }
};

Product.defaultProps = {
  hasWatermark: false
};

function checkThisOut(props, propName, componentName){
  if(!props[propName]){
    return new Error('IsRequired');
  }
  if(typeof props[propName] !== 'number'){
    return new Error('notanumber');
  }
  if(props[propName] < 80 || props[propName] > 300) {
    return new Error('Invalid');
  }
  return null;
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: checkThisOut
};
