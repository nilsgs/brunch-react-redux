import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';

class App extends Component {
    render() {
        const { title, children, ...other } = this.props;
        
        return (
            <div>
                <div className="header">
                    {title}
                </div>
                <div className="content">
                    {children}           
                </div>
            </div>
        );
    }
}

App.propTypes = {
    title: PropTypes.string
}

const mapStateToProps = (state, ownProps) => {
    const { title } = state.ui;
    
    return {
        title: title
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);