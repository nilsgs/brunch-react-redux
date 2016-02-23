import { UPDATE_TITLE } from '../constants';

const updateTitle = (title) => {
    return {
        type: UPDATE_TITLE,
        title: title
    };
}

export default updateTitle;