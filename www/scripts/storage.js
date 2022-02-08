"use strict";

/**
 * @class Saves all the information needed to run the application
 * @constructs Storage
 * @property {Playlist[]} classes - array of objects of type Class, to store all the classes in our system
 */
class Storage {
  constructor() {
    // Attributes
    this.classes = [
      {
        id: 1,
        year: 10,
        letter: "A",
        course: "IG",
        students: [],
      },
      {
        id: 2,
        year: 11,
        letter: "C",
        course: "GPSI",
        students: [],
      },
    ];
  }

  // Getters
  get Classes() {
    return this.classes;
  }

  /**
   * Loads data from local storage and update local data structures
   */
  loadFromStorage() {
    const classes = localStorage.getItem("classes");
    if (!classes) return;

    this.classes = JSON.parse(classes);
  }

  /**
   * Function that aims to get a Class feature
   * @param {string} id The id of the class
   * @returns the class object
   */
  getClass(id) {
    // Checks if the class with the passed id exists
    const schoolClass = this.classes.find((c) => c.id === id);
    if (!schoolClass) {
      alert("A turma selecionada não pôde ser encontrada!");
    }

    return schoolClass;
  }

  // /**
  //  * Function that aims to add a Playlist feature
  //  * @param {string} title The title of the new playlist
  //  * @param {string} description The description of the new playlist
  //  */
  // addPlaylist(title, description) {
  //   // Get next available id for the playlist
  //   const id = this.retrieveNextPlaylistId();

  //   // Create playlist and add to array
  //   const playlist = new Playlist(id, title, description);
  //   this.playlists.push(playlist);

  //   // Updates the DOM of the playlists
  //   window.viewManager.updatePlaylistsView(this.playlists);

  //   // Update local storage
  //   localStorage.setItem("playlists", JSON.stringify(this.playlists));
  // }

  // /**
  //  * Function that aims to update a Playlist resource
  //  */
  // updatePlaylist(id, title, description) {
  //   // Checks if the playlist with the passed id exists
  //   const playlist = this.playlists.find((playlist) => playlist.id === id);
  //   if (!playlist) {
  //     alert("A lista de reprodução selecionada não pôde ser encontrada!");
  //   }

  //   // Updates playlist attributes
  //   playlist.title = title;
  //   playlist.description = description;

  //   // Updates the DOM of the playlists
  //   window.viewManager.updatePlaylistsView(this.playlists);

  //   // Update local storage
  //   localStorage.setItem("playlists", JSON.stringify(this.playlists));
  // }

  // /**
  //  * Function that aims to remove a Playlist resource
  //  */
  // deletePlaylist(id) {
  //   // Checks if the playlist with the passed id exists
  //   const index = this.playlists.findIndex((playlist) => playlist.id === id);
  //   if (index === -1) {
  //     alert("A lista de reprodução selecionada não pôde ser encontrada!");
  //   }

  //   // Remove a playlist da array
  //   this.playlists.splice(index, 1);

  //   // Updates the DOM of the playlists
  //   window.viewManager.updatePlaylistsView(this.playlists);

  //   // Update local storage
  //   localStorage.setItem("playlists", JSON.stringify(this.playlists));
  // }
}
