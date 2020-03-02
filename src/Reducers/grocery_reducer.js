import {ADD_GROCERY, REMOVE_GROCERY} from '../Actions';
import groceryItemsList from '../data/groceryItems.json';
import { addToBag } from './helper';

export default function grocery(state = groceryItemsList, action){
	let grocery;
  switch(action.type){
		case ADD_GROCERY :
			grocery = state.filter(item => item.id !== action.id);
			return grocery;
		
		case REMOVE_GROCERY :
			grocery = [...state,addToBag(action.id)];
			return grocery;
			default:
				return state;
	}
}