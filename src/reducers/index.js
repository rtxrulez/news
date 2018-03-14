import {
    combineReducers
} from 'redux';

import posts from './posts'
import region from './region'

const rootReducers = combineReducers({
    posts,
    region
})

export default rootReducers