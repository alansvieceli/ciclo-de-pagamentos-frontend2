import Constants from '../consts';

export function selectTab(tabId) {
    return {
            type: Constants.TAB_SELECTED,
            payload: tabId
    }    
}

//Spread operator
//vai juntar n parametros em um array
export function showTabs(...tabIds){
    const tabToShow = {}
    tabIds.forEach( e => tabToShow[e] = true)

    return {
        type: Constants.TAB_SHOWED,
        payload: tabToShow
}   
}