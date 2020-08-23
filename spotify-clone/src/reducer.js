export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null
    // REMOVE when finished with developement
    // token: "BQBSOFmuF1VWlXSqA5TEZxoROWG3Rk0kc2vvqLL9NwGGpST00_4S0Cv1zBnRAlVTg9-hnwpWeLBzmlVQui_G9eSew2yzqe3NxKWDajY_xtpTcmn0PJWJrOBSA7dqPZ7VzY5tm9PRS1EmH67QwedeYzRbXDEI"
};

const reducer = (state, action) =>{
    console.log(action);

    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        case "SET_TOKEN":
            return{
                ...state,
                token: action.token
            }
        case "SET_PLAYLISTS":
            return{
                ...state,
                playlists: action.playlists
            }
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        default:
            return state;

        
            
    }
}

export default reducer;