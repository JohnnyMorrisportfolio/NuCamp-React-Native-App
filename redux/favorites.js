import * as ActionTypes from './ActionTypes';

export const favorites = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.ADD_FAVORITE:
            if (state.includes(action.payload)) {
                return state;
            }
            return state.concat(action.payload);
        
        case ActionTypes.DELETE_FAVORITE:
            console.log("Delete Favorite: " + action.payload)
            // favorite has the list of all the campsiteIds which are marked as Favorite
            // let's say: favorite has 0,1,3,5 <- CampsiteIds
            // let's say We want to delete/remove campsiteId: 3
            // following filter will return all campsitesIds from "favorite" list except for 3
            return state.filter(favorite => favorite !== action.payload);
            
        default:
            return state;
    }
};