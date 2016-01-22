/* @flow weak */

'use strict';
import Baobab from 'baobab';
import _ from 'loadash';
import keyMirror from 'keyMirror';

const tree = new Baobab({
  user: {
    id: null,
    username: null,
    firstName: null,
    lastName: null,
    email: null,
    avatar: null,
  },
  viewStates: {
    login: {
      username: '',
      password: '',
      invalidLogin: false,
      loading: false
    },
    signup: {

      currentState: null,

      authData: null,

      name: null,
      email: null,
      phone: null,
      avatar: null,
    },
  }
},
{
  asynchronous: false,
  facets: {
    missionsWithBrands: {
      cursors: {
        missions: ['missions'],
        brands: ['brands']
      },
      get: function(data) {
        return data.missions.map((mission)=>{
          mission["brand"] = _.find(data.brands, {id: mission.brand_id});
          return mission;
        })
      }
    }
  }
});

export default tree;