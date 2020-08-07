import React, { Component } from 'react';
import MenuItem from './MenuItem';
import PropTypes from 'prop-types';

class Menu extends Component {

    render() {
        return (
            <nav>
                <ul className="list-group">
                    {this.props.items.map((item) => (
                        <MenuItem key={item.id} item={item}  
                        triggerToolTip={this.props.triggerToolTip}/>
                    ))}
                </ul>
            </nav>
        )
    }
}

// Prop types
Menu.propTypes = {
    items: PropTypes.array.isRequired
}

export default Menu;