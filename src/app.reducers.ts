import { combineReducers } from 'redux';

import drawer from './shared/reducers/drawer';
import route from './shared/reducers/route';
import list from './shared/reducers/list';
import user from './login/login.reducer';
import counter from './counter/counter.reducer';

export default combineReducers({

  drawer,
  route,
  user,
  list,
  counter,

});
