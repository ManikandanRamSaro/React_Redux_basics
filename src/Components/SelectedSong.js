import React from 'react';
import {connect} from 'react-redux';

const SelectedSongView = ({song}) => {
    if(!song)
        {
            return <div>Pleae Select a Song</div>
        }
    return (
        
        <div>
            <h3>Song Details</h3>
            <p>
                Title : {song.title} <br/>
                Counts : {song.collection}
            </p>
            Selected song - {song.title}</div>
    );
}

const mapStateToProps = (state) => {
    return { song : state.selectSong }
}

export default connect(mapStateToProps)(SelectedSongView);