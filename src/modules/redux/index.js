import { combineReducers } from "redux";

import { ENTITY } from '../redux/entity';
import { ENTITIES } from '../redux/entities';
// import entities from '../redux/entities';

export default combineReducers({
  ...ENTITY,
  ...ENTITIES
})