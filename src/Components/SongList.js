import React,{Component} from 'react';
import {connect} from 'react-redux';
import {SelectedSong} from '../actions/index'

class SongList extends Component{

    renderLists(){
        return this.props.songs.map((song)=>
        {
          return (
              <div className="item" key={song.title}>
                  <div className="right floated content">
                        <button className="ui button primary" onClick={()=>{this.props.Selected(song)}} >Select</button>
                  </div>
                  <div className="content">
                      {song.title}
                  </div>
              </div>
          );  
        })
    }

    render() { 
        return (<div className="ui divided list">{this.renderLists()}</div>);
    }
}

const mapStateToProps = (state) => {
    console.log(state)
     return {songs:state.songs};
}

export default connect(mapStateToProps,{
    Selected : SelectedSong 
})(SongList);

     //Reducer Name : Action Name