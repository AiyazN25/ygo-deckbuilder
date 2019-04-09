import { DRAW_CARD, CLOSE_TESTHAND_MODAL, OPEN_TESTHAND_MODAL } from '../actions/actionTypes';

const initialState = {
    showTestHandModal: false,
    numCardsToShowInTestHand: 5,
    sampleHand: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case DRAW_CARD: {
            return {
                ...state,
                numCardsToShowInTestHand: state.numCardsToShowInTestHand + 1
            }
        }
        case CLOSE_TESTHAND_MODAL: {
            return {
                ...state,
                showTestHandModal: false
            }
        }
        case OPEN_TESTHAND_MODAL: {
            return {
                ...state,
                showTestHandModal: true,
                numCardsToShowInTestHand: 5,
                sampleHand: [...action.cards].sort(() => 0.5 - Math.random())
            }
        }
        default: {
            return state
        }
    }
}