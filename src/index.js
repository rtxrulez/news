import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import configureStore from './store/index';
import store from './store/index'
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

store.subscribe(() => {
    alert('стора изменилась')
})


// setTimeout(() => {
//     store.dispatch({
//         type: 'CHANGE_REGION',
//         data: 'test'
//     })
//     console.log(store.getState())
// }, 1000)

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
 document.getElementById('root'));
// registerServiceWorker();

if (module.hot) {
    module.hot.accept();
}