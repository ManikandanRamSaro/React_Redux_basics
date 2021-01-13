import React from 'react';
import SongList from './SongList';
import SelectedSongView from './SelectedSong'
const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                   <SongList/>
                </div>
                <div className="column eight wide">
                   <SelectedSongView/>
                </div>

            </div>
           
        </div>
    );
};

export default App;