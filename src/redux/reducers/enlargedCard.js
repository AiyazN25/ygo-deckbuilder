import { OPEN_ENLARGED_CARD_MODAL, CLOSE_ENLARGED_CARD_MODAL } from '../actions/actionTypes';

const initialState = {
    showEnlargedCardModal: false,
    enlargedCardToShow: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case OPEN_ENLARGED_CARD_MODAL: {
            return {
                ...state,
                showEnlargedCardModal: true,
                enlargedCardToShow: action.cardImgUrl
            }
        }
        case CLOSE_ENLARGED_CARD_MODAL: {
            return { ...state, showEnlargedCardModal: false }
        }
        default: {
            return state
        }
    }
}