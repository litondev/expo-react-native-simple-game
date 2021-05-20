import React from "react";
import HomeScreen from "./views/Home.js";
import StartScreen from "./views/Start.js";
import RankScreen from "./views/Rank.js";
import AmountScreen from "./views/Amount.js";
import SettingScreen from "./views/Setting.js";
import GameScreen from "./views/Game.js";

export default [
	{
		name : "Home",
		component : HomeScreen
	},
	{
		name : "Rank",
		component : RankScreen,		
	},
	{
		name : 'Setting',
		component : SettingScreen
	},
	{
		name : "Start",
		component :  StartScreen
	},
	{
		name : "Amount",
		component : AmountScreen
	},
	{
		name : 'Game',
		component : GameScreen
	}
];