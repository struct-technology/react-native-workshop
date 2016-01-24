/* @flow weak */

'use strict';
import tree from '../tree';
import _ from 'lodash';

var flickrCursor = tree.select('flickr');

var REQUEST_URL = 'https://api.flickr.com/services/rest/?';
    REQUEST_URL += 'method=flickr.photos.search';
    REQUEST_URL += '&api_key=9ff0fef9b6c8e4509682e9576b9480f3';
    REQUEST_URL += '&format=json';
    REQUEST_URL += '&media=photos';
    REQUEST_URL += '&nojsoncallback=1';
    REQUEST_URL += '&tags=landscape';
    REQUEST_URL += '&sort=interestingness-desc';
    REQUEST_URL += '&per_page=20';
    REQUEST_URL += '&page=1';

// Define service object
export var FlickrServices  = {

  getPhotos() {
    return new Promise((resolve, reject) => {
      fetch(REQUEST_URL)
        .then((response) => response.json(), (error) => reject(error))
        .then((responseData) => {
          flickrCursor.set('photos', responseData.photos.photo);
          resolve();
        },
        (error)=> {
          reject(error);
        })
        .done();
    });
  },

  isCached() {
    return flickrCursor.get('photos').length !== 0;
  },

  mountUri(data) {
    return {uri:'https://farm'+data.farm+'.staticflickr.com/'+data.server+'/'+data.id+'_'+data.secret+'_z.jpg'};
  },

  getOneRandomImage() {
    return FlickrServices.mountUri(_.sample(flickrCursor.get('photos')));
  },

  getRandomImage() {
    return new Promise((resolve, reject) => {
      if (FlickrServices.isCached()) {
        resolve(FlickrServices.getOneRandomImage());
      } else {
        FlickrServices.getPhotos().then(() => {
          if (FlickrServices.isCached()) {
            resolve(FlickrServices.getOneRandomImage());
          } else {
            reject('Error to get Flickr photos.');
          }
        });
      }
    });
  },

};
