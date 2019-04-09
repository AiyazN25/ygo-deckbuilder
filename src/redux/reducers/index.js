import { combineReducers } from "redux";
import deckControls from './deckControls';
import sampleHand from './sampleHand';
import enlargedCard from './enlargedCard'

export default combineReducers({ deckControls, sampleHand, enlargedCard });