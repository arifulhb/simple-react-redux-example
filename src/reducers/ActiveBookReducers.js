//state argument is not application state
// state is only related to this reducer
export default function (state = null, action) {

    switch (action.type){

        case 'SELECTED_BOOK':

            return action.payload;
            break;

    }//end switch case

    return state;
}