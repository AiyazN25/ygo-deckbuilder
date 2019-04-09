export const getMainCards = deckControl => (deckControl.main.cards);
export const getSideCards = deckControl => (deckControl.side.cards);
export const getExtraCards = deckControl => (deckControl.extra.cards);

export const getTrunkCards = state => (
    {
        main: getMainCards(state.deckControls.trunk),
        side: getSideCards(state.deckControls.trunk),
        extra: getExtraCards(state.deckControls.trunk)
    }
);

export const getDeckCards = state => (
    {
        main: getMainCards(state.deckControls.deck),
        side: getSideCards(state.deckControls.deck),
        extra: getExtraCards(state.deckControls.deck)
    }
);

export const getDeckAndTrunkCardsOnly = state => (
    {
        trunk: getTrunkCards(state),
        deck: getDeckCards(state)
    }
);

export const getWhatWillBeCleared = state => (state.deckControls.whatWillBeCleared);

export const getShowStatusOfClearWarningModal = state => (state.deckControls.showClearWarningModal);

export const getTestHandModalData = state => (state.sampleHand);

export const getShowStatusOfUploadFailAlert = state => (state.deckControls.showUploadFailAlert);

export const getEnlargedCardModalData = state => (state.enlargedCard);
