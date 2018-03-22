import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/* Media Object and Media import for music functionality */
import { Media, MediaObject } from '@ionic-native/media';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  musicFile: MediaObject
  constructor(public navCtrl: NavController, private media: Media) {

  }

  play() {
    this.musicFile = this.media.create('../../assets/music/All_I_Have_To_Give.mp3');
    this.musicFile.play()
  }

}
