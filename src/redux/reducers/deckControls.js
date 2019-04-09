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
        currentViewedCard: { "id": "10000020", "name": "Slifer the Sky Dragon", "desc": "Requires 3 Tributes to Normal Summon (cannot be Normal Set). This card's Normal Summon cannot be negated. When Normal Summoned, cards and effects cannot be activated. Once per turn, during the End Phase, if this card was Special Summoned: Send it to the Graveyard. This card gains 1000 ATK and DEF for each card in your hand. If a monster(s) is Normal or Special Summoned to your opponent's field in face-up Attack Position: That monster(s) loses 2000 ATK, then if its ATK has been reduced to 0 as a result, destroy it.", "atk": "0", "def": "0", "type": "Effect Monster", "level": "10", "race": "Divine-Beast", "attribute": "DIVINE", "scale": null, "linkval": null, "linkmarkers": null, "archetype": null, "set_tag": "MVP1-EN057,CT13-EN001,LDK2-ENS01,MVP1-ENG57,BP02-EN127,PGLD-EN032,JMPS-EN005,JUMP-EN061,", "setcode": "Yu-Gi-Oh! The Dark Side of Dimensions Movie Pack,2016 Mega-Tins,Legendary Decks II,Yu-Gi-Oh! The Dark Side of Dimensions Movie Pack: Gold Edition,Battle Pack 2: War of the Giants,Premium Gold,WSJ Jump Pack Fall 2017 promotional card,Weekly Shonen Jump Alpha July 2012 membership promotional card,", "ban_tcg": null, "ban_ocg": null, "ban_goat": null, 'image_url': 'https://ygoprodeck.com/pics/10000020.jpg' },
        inWhichCardSectionCurrentCardViewedIs: null,
        currentViewedCardIndex: null
    },
    deck: {
        main: { cards: [], searchFilterValue: '' },
        side: { cards: [], searchFilterValue: '' },
        extra: { cards: [], searchFilterValue: '' },
        currentViewedCard: { "id": "10000000", "name": "Obelisk the Tormentor", "desc": "Requires 3 Tributes to Normal Summon (cannot be Normal Set). This card's Normal Summon cannot be negated. When Normal Summoned, cards and effects cannot be activated. Cannot be targeted by Spells, Traps, or card effects. Once per turn, during the End Phase, if this card was Special Summoned: Send it to the Graveyard. You can Tribute 2 monsters; destroy all monsters your opponent controls. This card cannot declare an attack the turn this effect is activated.", "atk": "4000", "def": "4000", "type": "Effect Monster", "level": "10", "race": "Divine-Beast", "attribute": "DIVINE", "scale": null, "linkval": null, "linkmarkers": null, "archetype": null, "set_tag": "LDK2-ENS02,BP01-EN021,CT13-EN002,BP01-EN021,MVPC-EN001,MVPC-EN001,GLD4-EN030,BP02-EN125,JUMP-EN037,PGLD-EN030,JMPS-EN004,", "setcode": "Legendary Decks II,Battle Pack: Epic Dawn,2016 Mega-Tins,Battle Pack: Epic Dawn,Yu-Gi-Oh! The Dark Side of Dimensions Theater distribution cards,Yu-Gi-Oh! The Dark Side of Dimensions Blu-ray & DVD promotional card,Gold Series 4: Pyramids Edition,Battle Pack 2: War of the Giants,Shonen Jump Vol. 8, Issue 1 promotional card,Premium Gold,WSJ Jump Pack Spring 2017 promotional card,", "ban_tcg": null, "ban_ocg": null, "ban_goat": null, 'image_url': 'https://ygoprodeck.com/pics/10000000.jpg' },
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