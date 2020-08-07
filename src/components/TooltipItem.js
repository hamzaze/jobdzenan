import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TooltipItem extends Component {

    markedStyle = () => {
        return this.props.item.on ? " current" : "";
    }
   
        render () {
            const { id, url, text, target } = this.props.item;

            return (
            <div className={"my-tooltip" + this.markedStyle()} data-rel={target}>
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.triggerToolTip.bind(this, id)}>
                        <span aria-hidden="true">X</span>
                    </button>
                </div>
                <div className="modal-body">
                    <p>{text}</p>
                    <a target="_blank" rel="noopener noreferrer" href={url}>Wiki Link</a>
                </div>
            </div>
        );
    } 
}

TooltipItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default TooltipItem;