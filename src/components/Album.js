 import React, { Component } from 'react';
import albumData from './../data/albums';

 class Album extends Component {
   constructor(props) {
   super(props);

     const album = albumData.find( album => {
       <section id="album-info">
             <img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title}/>
             <div className="album-details">
               <h1 id="album-title"></h1>
               <h2 className="artist"></h2>
               <div id="release-info"></div>
             </div>
           </section>
     });

     this.state = {
       album: album
     };
 }
    render() {
      return (
        <section className="album">
         {this.props.match.params.slug} Album will go here
        </section>
      );
    }
  }


export default Album;
