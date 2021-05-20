import { createStore } from "redux";
import AsyncStorage from '@react-native-async-storage/async-storage';

// AsyncStorage.getItem('@LANG').then(())
// AsyncStorage.setItem('@USER',JSON.stringify(action.user));  
// AsyncStorage.removeItem('@USER');

let states = {
  lang : 'en',
  language : {
    'id' : {
      'home' : 'Rumah',
      'start' : 'Mulai',
      'rank' : 'Peringkat',
      'setting' : 'Pengaturan',
      'exit' : 'Keluar',
      'choose-language' : 'Pilih Bahasa',
      'not-found' : 'Data Tidak Ditemukan',
      'back' : 'Kembali',
      'time' : 'Waktu',
      'current' : 'Benar',
      'wrong' : 'Salah',
      'section' : 'Bagian',
      'choose-section' : 'Pilih Gambar',
      'screens' : {
        'start' : {
          'animal-images' : 'Gambar Hewan',
          'plant-images' : 'Gambar Tumbuhan',
          'planet-images' : 'Gambar Planet'
        },
        'game' : {
          'image' : 'Gambar Ke',
          'time' : 'Waktu',
          'answer' : 'Jawaban',
          'submit' : 'Kirim'
        }
      }
    },
    'en' : {
      'home' : 'Home',
      'start' : 'Start',
      'rank' : 'Ranks',
      'setting' : 'Settings',
      'exit' : 'Exit',
      'choose-language' : 'Choose Language',
      'not-found' : 'Data Not Found',
      'back' : 'Back',
      'time' : 'Time',
      'current' : 'Current',
      'wrong' : 'Wrong',
      'section' : 'Section',
      'choose-section' : 'Choose Image',
      'screens' : {
        'start' : {
          'animal-images' : 'Animal Images',
          'plant-images' : 'Plant Images',
          'planet-images' : 'Planet Images'
        },
        'game' : {
          'image' : 'Image',
          'time' : 'Time',
          'answer' : 'Answer',
          'submit' : 'Submit'
        }
      }
    }
  },
  ranks : [
    {point : 1000,wrong : 1000,current : 1000,time : '03:00',section : '10 Gambar Benda'},
    {point : 1000,wrong : 1000,current : 1000,time : '03:00',section : '10 Gambar Benda'},
    {point : 1000,wrong : 1000,current : 1000,time : '03:00',section : '1000 Gambar Benda'},
    {point : 1000,wrong : 1000,current : 1000,time : '03:00',section : '10 Gambar Benda'},
    {point : 1000,wrong : 1000,current : 1000,time : '03:00',section : '10 Gambar Benda'},
    {point : 1000,wrong : 1000,current : 1000,time : '03:00',section : '10 Gambar Benda'},
    {point : 1000,wrong : 1000,current : 1000,time : '03:00',section : '10 Gambar Benda'},
  ],
  game : {
    section : null,
    slug : null,
    total : 0,
    queue : [],
    currentQueue : null,
    nextQueue : null,
    beforeQueue : null,
    point : 0,
    time : 0,
    wrong : 0,
    current : 0
  },
  images : {
    'plant' : [
      {image : require('../assets/images/plants/1.png'),currentId : 'anjing0',currentEn : 'dog0',isAnswer : false},
      {image : require('../assets/images/plants/2.png'),currentId : 'anjing1',currentEn : 'dog1',isAnswer : false},
      {image : require('../assets/images/plants/3.png'),currentId : 'anjing2',currentEn : 'dog2',isAnswer : false},
      {image : require('../assets/images/plants/4.png'),currentId : 'anjing3',currentEn : 'dog3',isAnswer : false},
      {image : require('../assets/images/plants/5.png'),currentId : 'anjing4',currentEn : 'dog4',isAnswer : false},
      {image : require('../assets/images/plants/6.png'),currentId : 'anjing5',currentEn : 'dog5',isAnswer : false},
      {image : require('../assets/images/plants/7.png'),currentId : 'anjing6',currentEn : 'dog6',isAnswer : false},
      {image : require('../assets/images/plants/8.png'),currentId : 'anjing7',currentEn : 'dog7',isAnswer : false},
      {image : require('../assets/images/plants/9.png'),currentId : 'anjing8',currentEn : 'dog8',isAnswer : false},
      {image : require('../assets/images/plants/10.png'),currentId : 'anjing9',currentEn : 'dog9',isAnswer : false},
    ],
    'animal' : [
      {image : require('../assets/images/animals/1.png'),currentId : 'anjing0',currentEn : 'dog0',isAnswer : false},
      {image : require('../assets/images/animals/2.png'),currentId : 'anjing1',currentEn : 'dog1',isAnswer : false},
      {image : require('../assets/images/animals/3.png'),currentId : 'anjing2',currentEn : 'dog2',isAnswer : false},
      {image : require('../assets/images/animals/4.png'),currentId : 'anjing3',currentEn : 'dog3',isAnswer : false},
      {image : require('../assets/images/animals/5.png'),currentId : 'anjing4',currentEn : 'dog4',isAnswer : false},
      {image : require('../assets/images/animals/6.png'),currentId : 'anjing5',currentEn : 'dog5',isAnswer : false},
      {image : require('../assets/images/animals/7.png'),currentId : 'anjing6',currentEn : 'dog6',isAnswer : false},
      {image : require('../assets/images/animals/8.png'),currentId : 'anjing7',currentEn : 'dog7',isAnswer : false},
      {image : require('../assets/images/animals/9.png'),currentId : 'anjing8',currentEn : 'dog8',isAnswer : false},
      {image : require('../assets/images/animals/10.png'),currentId : 'anjing9',currentEn : 'dog9',isAnswer : false},
    ]
  }
}

function App(state = states,action){
  switch(action.type){
    case "SET_LANGUAGE" :    
      AsyncStorage.setItem('@LANG',action.data);

      let newLanguage = Object.assign({},state,{
        lang : action.data
      });

      return newLanguage;              
    case "SET_RANKS" : 
      let newRanks = Object.assign({},state,{
        ranks : action.data
      });

      return newRanks;
    case "SET_GAME" : 
      let newGame = Object.assign({},state,{
        game : action.data 
      });

      return newGame;
    default : 
      return state
  }
}

export default createStore(App);