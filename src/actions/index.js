// Action Creator

// below line is example for named export, using named export we can create more number of actions in one file
export const SelectedSong = song =>{
    return {
        type :'SELECTED_SONG',
        payload :  song
         
    };
};
