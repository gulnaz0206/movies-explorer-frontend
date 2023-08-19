import {
    CARDS_FOR_PAGE_LARGE,
    CARDS_FOR_PAGE_MIDDLE,
    CARDS_FOR_PAGE_SMALL,
    ADDED_CARDS_LARGE,
    ADDED_CARDS_MIDDLE,
    ADDED_CARDS_SMALL,
    LARGE_WIDTH,
    MIDDLE_WIDTH,
    SMALL_WIDTH,
} from './constants';

export default function calcQtyCards () {
    const widthWindow = window.innerWidth;
    let cardsForPage, addedCardsQty;

    if (widthWindow >= LARGE_WIDTH) {
        addedCardsQty = ADDED_CARDS_LARGE;
        cardsForPage = CARDS_FOR_PAGE_LARGE;

    } else if (widthWindow >= MIDDLE_WIDTH) {
        addedCardsQty = ADDED_CARDS_MIDDLE;
        cardsForPage = CARDS_FOR_PAGE_MIDDLE;

    } else if (widthWindow >= SMALL_WIDTH) {
        addedCardsQty = ADDED_CARDS_SMALL;
        cardsForPage = CARDS_FOR_PAGE_SMALL;
    }
    else {
        addedCardsQty = ADDED_CARDS_MIDDLE;
        cardsForPage = 1;
    }
    return { cardsForPage, addedCardsQty };
}
