import * as exampleCards from '../../assets/exampleCards'
import { 
    UPLOAD_DATA, 
    CLEAR_SECTION, 
    SORT_SECTION, 
    FILTER_SECTION, 
    SEND_CARD, 
    OPEN_CLEAR_WARNING_MODAL, 
    CLOSE_CLEAR_WARNING_MODAL, 
    HIDE_UPLOAD_FAIL_ALERT, 
    SELECT_CARD 
} from '../actions/actionTypes'


const initialState = {
    trunk: {
        main: { cards: [], searchFilterValue: '' },
        side: { cards: [], searchFilterValue: '' },
        extra: { cards: [], searchFilterValue: '' },
        currentViewedCard: exampleCards.OBELISK,
        inWhichCardSectionCurrentCardViewedIs: null,
        currentViewedCardIndex: null
    },
    deck: {
        main: { cards: [], searchFilterValue: '' },
        side: { cards: [], searchFilterValue: '' },
        extra: { cards: [], searchFilterValue: '' },
        currentViewedCard: exampleCards.RA,
        inWhichCardSectionCurrentCardViewedIs: null,
        currentViewedCardIndex: null
    },
    showClearWarningModal: false,
    whatWillBeCleared: {
        whichDeckControl: null,
        whichCardsSection: null
    },
    showUploadFailAlert: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case UPLOAD_DATA: {
            const { allCards, e, uploadedFile } = action;
            try {
                const uploadedTextFile = JSON.parse(e.target.result);
                if (uploadedFile.type.match(/text.*/) && !uploadedFile.type.match(/text.javascript/)) {
                    const modifiedstate = { ...state }
                    const modifiedTrunk = { ...state.trunk }
                    const modifiedDeck = { ...state.deck }

                    modifiedDeck.main.cards = uploadedTextFile.deck.main.map(cardId => (
                        allCards.find(cardObj => cardObj.id === cardId)
                    ))
                    modifiedDeck.side.cards = uploadedTextFile.deck.side.map(cardId => (
                        allCards.find(cardObj => cardObj.id === cardId)
                    ))
                    modifiedDeck.extra.cards = uploadedTextFile.deck.extra.map(cardId => (
                        allCards.find(cardObj => cardObj.id === cardId)
                    ))

                    modifiedTrunk.main.cards = uploadedTextFile.trunk.main.map(cardId => (
                        allCards.find(cardObj => cardObj.id === cardId)
                    ))
                    modifiedTrunk.side.cards = uploadedTextFile.trunk.side.map(cardId => (
                        allCards.find(cardObj => cardObj.id === cardId)
                    ))
                    modifiedTrunk.extra.cards = uploadedTextFile.trunk.extra.map(cardId => (
                        allCards.find(cardObj => cardObj.id === cardId)
                    ))

                    modifiedstate.deck = modifiedDeck;
                    modifiedstate.trunk = modifiedTrunk;
                    return modifiedstate;
                }
                else {
                    throw new Error('Invalid file format uploaded')
                }
            }
            catch (error) {
                console.log(error);
                return { ...state, showUploadFailAlert: true }
            }
        }
        case OPEN_CLEAR_WARNING_MODAL: {
            return {
                ...state,
                showClearWarningModal: true,
                whatWillBeCleared: {
                    whichDeckControl: action.inWhichDeckControl,
                    whichCardsSection: action.inWhichCardSection
                }
            }
        }
        case CLEAR_SECTION: {

            const inWhichDeckControl = state.whatWillBeCleared.whichDeckControl;
            const inWhichCardSection = state.whatWillBeCleared.whichCardsSection;
            const modifiedDeckControl = { ...state[inWhichDeckControl] }
            modifiedDeckControl[inWhichCardSection].cards = [];
            if (modifiedDeckControl.inWhichCardSectionCurrentCardViewedIs === inWhichCardSection) {
                modifiedDeckControl.currentViewedCard = null;
                modifiedDeckControl.inWhichCardSectionCurrentCardViewedIs = null;
                modifiedDeckControl.currentViewedCardIndex = null;
            }
            return { ...state, [inWhichDeckControl]: modifiedDeckControl, showClearWarningModal: false }

        }
        case SORT_SECTION: {
            const { inWhichDeckControl, inWhichCardSection } = action;
            const modifiedDeckControl = { ...state[inWhichDeckControl] }
            const modifiedCardsSection = [...state[inWhichDeckControl][inWhichCardSection].cards];
            modifiedCardsSection.sort((a, b) => {
                if (a.name < b.name) { return -1; }
                if (a.name > b.name) { return 1; }
                return 0;
            })
            modifiedDeckControl[inWhichCardSection].cards = modifiedCardsSection;
            if (modifiedDeckControl.inWhichCardSectionCurrentCardViewedIs === inWhichCardSection) {
                modifiedDeckControl.currentViewedCard = null;
                modifiedDeckControl.inWhichCardSectionCurrentCardViewedIs = null;
                modifiedDeckControl.currentViewedCardIndex = null;
            }
            return { ...state, [inWhichDeckControl]: modifiedDeckControl }
        }
        case FILTER_SECTION: {
            const { inWhichDeckControl, inWhichCardSection, searchFilterValue } = action;
            const modifiedDeckControl = { ...state[inWhichDeckControl] }
            modifiedDeckControl[inWhichCardSection].searchFilterValue = searchFilterValue;
            return { ...state, [inWhichDeckControl]: modifiedDeckControl }
        }
        case SEND_CARD: {
            const { toWhichDeckControl, toWhichCardSection, card, fromWhichDeckControl, fromWhichCardSection } = action;
            if (!fromWhichDeckControl) {
                // Means we're sending a card from AllCardsSection to a DeckControl
                const toModifiedDeckControl = { ...state[toWhichDeckControl] };
                const toModifiedCardsSection = [...state[toWhichDeckControl][toWhichCardSection].cards];
                toModifiedCardsSection.push(card);
                toModifiedDeckControl[toWhichCardSection].cards = toModifiedCardsSection;
                return { ...state, [toWhichDeckControl]: toModifiedDeckControl }
            }

            else if (toWhichDeckControl === null && toWhichCardSection === null) {
                // Means we're deleting a card in a DeckControl
                const fromModifiedDeckControl = { ...state[fromWhichDeckControl] };
                const fromModifiedCardsSection = [...state[fromWhichDeckControl][fromWhichCardSection].cards];
                const indexOfCardToRemove = fromModifiedDeckControl.currentViewedCardIndex;
                fromModifiedCardsSection.splice(indexOfCardToRemove, 1);
                fromModifiedDeckControl[fromWhichCardSection].cards = fromModifiedCardsSection;
                fromModifiedDeckControl.currentViewedCard = null;
                fromModifiedDeckControl.inWhichCardSectionCurrentCardViewedIs = null;
                fromModifiedDeckControl.currentViewedCardIndex = null;
                return { ...state, [fromWhichDeckControl]: fromModifiedDeckControl }
            }

            else if (toWhichDeckControl !== fromWhichDeckControl) {
                // Means we're sending a card from a deckControl to a different deckControl
                const toModifiedDeckControl = { ...state[toWhichDeckControl] };
                const toModifiedCardsSection = [...state[toWhichDeckControl][toWhichCardSection].cards];
                toModifiedCardsSection.push(card);
                toModifiedDeckControl[toWhichCardSection].cards = toModifiedCardsSection;

                const fromModifiedDeckControl = { ...state[fromWhichDeckControl] };
                const fromModifiedCardsSection = [...state[fromWhichDeckControl][fromWhichCardSection].cards];
                const indexOfCardToRemove = fromModifiedDeckControl.currentViewedCardIndex;
                fromModifiedCardsSection.splice(indexOfCardToRemove, 1);
                fromModifiedDeckControl[fromWhichCardSection].cards = fromModifiedCardsSection;
                fromModifiedDeckControl.currentViewedCard = null;
                fromModifiedDeckControl.inWhichCardSectionCurrentCardViewedIs = null;
                fromModifiedDeckControl.currentViewedCardIndex = null;
                return { ...state, [toWhichDeckControl]: toModifiedDeckControl, [fromWhichDeckControl]: fromModifiedDeckControl }
            }
            else if (toWhichDeckControl === fromWhichDeckControl) {
                // Means we're sending a card from a deckControl to the same deckControl (to a different cardsSection)
                const toModifiedDeckControl = { ...state[toWhichDeckControl] };
                const toModifiedCardsSection = [...state[toWhichDeckControl][toWhichCardSection].cards];
                toModifiedCardsSection.push(card);
                toModifiedDeckControl[toWhichCardSection].cards = toModifiedCardsSection;

                const fromModifiedCardsSection = [...state[fromWhichDeckControl][fromWhichCardSection].cards];
                const indexOfCardToRemove = toModifiedDeckControl.currentViewedCardIndex;
                fromModifiedCardsSection.splice(indexOfCardToRemove, 1);
                toModifiedDeckControl[fromWhichCardSection].cards = fromModifiedCardsSection;
                toModifiedDeckControl.currentViewedCard = null;
                toModifiedDeckControl.inWhichCardSectionCurrentCardViewedIs = null;
                toModifiedDeckControl.currentViewedCardIndex = null;
                return { ...state, [toWhichDeckControl]: toModifiedDeckControl }
            }
            else {
                return state;
            }
        }
        case SELECT_CARD: {
            const {inWhichDeckControl, inWhichCardSection, card, cardIndex} = action;
            const modifiedDeckControl = { ...state[inWhichDeckControl] };
            modifiedDeckControl.currentViewedCardIndex = cardIndex;
            modifiedDeckControl.currentViewedCard = card;
            modifiedDeckControl.inWhichCardSectionCurrentCardViewedIs = inWhichCardSection;
            return { ...state, [inWhichDeckControl]: modifiedDeckControl }
        }
        case CLOSE_CLEAR_WARNING_MODAL: {
            return {
                ...state,
                showClearWarningModal: false,
                whatWillBeCleared: {
                    whichDeckControl: null,
                    whichCardsSection: null
                }

            }
        }
        case HIDE_UPLOAD_FAIL_ALERT: {
            return { ...state, showUploadFailAlert: false }
        }
        default: {
            return state;
        }
    }
}