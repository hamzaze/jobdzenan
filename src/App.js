import React, { Component } from 'react';
import Menu from './components/Menu';
import Tooltip from './components/Tooltip';

import './App.css';

class App extends Component {

  state = {
    items: [
        {
            id: 1,
            target: "tooltipSql",
            title: "SQL injection (SQLI)",
            text: `SQL injection is a code injection technique, used to attack data-driven applications,
                in which malicious SQL statements are inserted into an entry field for execution
                (e.g. to dump the database contents to the attacker).
                SQL injection must exploit a security vulnerability in an application's software,
                for example, when user input is either incorrectly filtered for string literal
                escape characters embedded in SQL statements or user input is not strongly typed and unexpectedly executed.`,
            url: "https://en.wikipedia.org/wiki/SQL_injection",
            on: false
        },
        {
            id: 2,
            target: "tooltipXss",
            title: "Cross-site scripting (XSS)",
            text: `Cross-site scripting (XSS) is a type of web application security vulnerability typically found in web applications.
                XSS attacks enable attackers to inject client-side scripts into web pages viewed by other users.
                A cross-site scripting vulnerability may be used by attackers to bypass access controls such as the same-origin policy.`,
            url: "https://en.wikipedia.org/wiki/Cross-site_scripting",
            on: false
        }
        
    ]
  }


  triggerToolTip = (id) => {
    this.setState({
      items: this.state.items.map(item => {
        
        if(item.id === id) {
          item.on = !item.on
          //Get curr offset (X,Y) of clicked element
          
        } else {
          item.on = false
        }
        return item;
      })
    });
  }

  render() {
    return (
      <div className="App">
        <Menu items={this.state.items} triggerToolTip={this.triggerToolTip} />
        <Tooltip items={this.state.items} triggerToolTip={this.triggerToolTip} />
      </div>
    );
  }
}

export default App;