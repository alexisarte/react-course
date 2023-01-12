import { legacy_createStore as createStore } from 'redux';
import reducer from '../reducers';

const store = createStore(reducer);

store.subscribe(() => {
  console.log('store changed', store);
});

export default store;
