import { connect } from 'react-redux';
import Home from '../components/Home';
import updateTitle from '../../../modules/ui/actions/updateTitle';

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (title) => {
            dispatch(updateTitle(title));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);