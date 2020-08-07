import React, { Component } from 'react';
import TooltipItem from './TooltipItem';
import PropTypes from 'prop-types';

class Tooltip extends Component {

    render() {
        return (
            <div>
            {this.props.items.map((item) => (
                <TooltipItem key={item.id} item={item} 
                triggerToolTip={this.props.triggerToolTip} />
            ))}
            </div>
        )
    }
}

// Prop types
Tooltip.propTypes = {
    items: PropTypes.array.isRequired
}

export default Tooltip;