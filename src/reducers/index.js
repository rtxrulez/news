import {
    combineReducers
} from 'redux';

import posts from './reducers/posts'
import region from './reducers/region'

const rootReducers = combineReducers({
    posts,
    region
})