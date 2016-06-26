import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import themeManager from 'material-ui/styles'

class MyAwesomeComponent extends React.Component {
    childContextTypes: { 
        muiTheme: React.PropTypes.object
    }

    getChildContext() {
        return {
            muiTheme: themeManager.getCurrentTheme()
        };
    }

    render() {
        return (
            <FlatButton label="Default" />
        );
    }

}
  
export default MyAwesomeReactComponent;

