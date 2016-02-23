import React, {Component, PropTypes} from 'react';

class Home extends Component {
    render() {
        const { onClick, ...other } = this.props;
        return (
            <div>
                Home
                <br/>
                <button onClick={() => onClick('New Header')}>Try me</button>
            </div>
        );
    }
}

Home.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default Home;