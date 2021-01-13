import { combineReducers } from 'redux';

const SongsReducer = () =>{
    return [
        { title :'family songs', collection :24},
        {title:'brothers songs', collection : 12 },
        {title : 'love songs', collection :50},
        { title : 'New Songs' , collection :25}
    ];
};

const SongsSelected = (songSelect = null, action) => {
    if(action.type ==='SELECTED_SONG')
    {
        return action.payload;
    }

    return songSelect;

};

export default combineReducers({
    songs : SongsReducer,
    selectSong : SongsSelected
});