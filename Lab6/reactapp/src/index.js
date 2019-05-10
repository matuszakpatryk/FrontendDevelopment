import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './domain/flower'
import FlowerListView from './component/FlowerListView';
import FakeType from './domain/flower'
import RealType from './domain/flower'
import DB_MODULE from './services/database'

var fakeType = new FakeType("Fake", "23")
var realType = new RealType("Real", "8")

var DB = DB_MODULE()
DB.addFlower("123Orch", "Orchidea", 10, 12.99, ["White", "Blue", "Red"], false, fakeType, "Plastic")
DB.addFlower("345Ros", "Rose", 30, 8.99, ["Blue", "Orange"], false, realType, "Plastic")
DB.addFlower("11Amar", "Amarylis", 3, 11.22, ["Black", "Red"], true, realType, true)
DB.addFlower("756Cac", "Cactus", 70, 21.00, ["Blue", "Green"], true, realType, true)
DB.addFlower("156Sun", "Sunflower", 120, 6.99, ["Purple", "Red"], true, realType, true)
DB.addFlower("6464Tul", "Tulip", 300, 2.99, ["Blue"], true, realType, true)
DB.addFlower("756Dai", "Daisy", 20, 14.50, ["Pink", "Red"], true, realType, true)
DB.addFlower("675Cro", "Crocus", 30, 4.5, ["Green", "White"], true, realType, true)
DB.addFlower("999For", "Forget me not", 30, 1.22, ["Blue", "Yellow"], true, realType, true)
DB.showFlowers()
var flowers = DB.getFlowers()
ReactDOM.render(<FlowerListView flowers={flowers} />, document.getElementById('root'))