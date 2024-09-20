import * as actionTypes from "./actionTypes";

export const uploadData = (allCards, e, uploadedFile) => ({
  type: actionTypes.UPLOAD_DATA,
  allCards,
  e,
  uploadedFile,
});

export const fetchAllCardsAndUploadData = (event) => {
  return (dispatch) => {
    event.persist();
    fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php")
      .then((response) => response.json())
      .then((json) => {
        const allCards = json.data;
        const uploadedFile = event.target.files[0];
        var reader = new FileReader();
        reader.onload = (e) => {
          dispatch(uploadData(allCards, e, uploadedFile));
        };
        if (uploadedFile) reader.readAsText(uploadedFile);
      });
  };
};

export const sortCards = (inWhichDeckControl, inWhichCardSection) => ({
  type: actionTypes.SORT_SECTION,
  inWhichDeckControl,
  inWhichCardSection,
});

export const filterCards = (
  inWhichDeckControl,
  inWhichCardSection,
  searchFilterValue
) => ({
  type: actionTypes.FILTER_SECTION,
  inWhichDeckControl,
  inWhichCardSection,
  searchFilterValue,
});

export const clearCards = () => ({
  type: actionTypes.CLEAR_SECTION,
});

export const sendCard = (
  toWhichDeckControl,
  toWhichCardSection,
  card,
  fromWhichDeckControl,
  fromWhichCardSection
) => ({
  type: actionTypes.SEND_CARD,
  toWhichDeckControl,
  toWhichCardSection,
  card,
  fromWhichDeckControl,
  fromWhichCardSection,
});

export const drawCard = () => ({
  type: actionTypes.DRAW_CARD,
});

export const openTestHandModal = (cards) => ({
  type: actionTypes.OPEN_TESTHAND_MODAL,
  cards,
});

export const closeTestHandModal = () => ({
  type: actionTypes.CLOSE_TESTHAND_MODAL,
});

export const openClearWarningModal = (
  inWhichDeckControl,
  inWhichCardSection
) => ({
  type: actionTypes.OPEN_CLEAR_WARNING_MODAL,
  inWhichDeckControl,
  inWhichCardSection,
});

export const closeClearWarningModal = () => ({
  type: actionTypes.CLOSE_CLEAR_WARNING_MODAL,
});

export const openEnlargedCardModal = (cardImgUrl) => ({
  type: actionTypes.OPEN_ENLARGED_CARD_MODAL,
  cardImgUrl,
});

export const closeEnlargedCardModal = () => ({
  type: actionTypes.CLOSE_ENLARGED_CARD_MODAL,
});

export const hideUploadFailAlert = () => ({
  type: actionTypes.HIDE_UPLOAD_FAIL_ALERT,
});

export const selectCard = (
  inWhichDeckControl,
  card,
  cardIndex,
  inWhichCardSection
) => ({
  type: actionTypes.SELECT_CARD,
  inWhichDeckControl,
  inWhichCardSection,
  card,
  cardIndex,
});
