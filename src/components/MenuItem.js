import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MenuItem extends Component {

    markedStyle = () => {
        return this.props.item.on ? " current" : "";
    }

    render () {
        const { id, title } = this.props.item;

        return (
            <li className={"list-group-item btn btn-light text-left d-flex align-items-center" + this.markedStyle()}>
                <div className="paddLeftRight10"><div className="checkbox"><input type="checkbox"/><label htmlFor=""></label></div></div>
                <button onClick={this.props.triggerToolTip.bind(this, id)}>
                    <span className="badge badge-pill badge-info">i</span>
                </button>
                <div className="paddLeftRight10">{title}</div>
            </li>
        );
    }
}

// Prop types
MenuItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default MenuItem;