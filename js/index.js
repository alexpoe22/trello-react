require('babel-polyfill')
import React from 'react'
import ReactDOM  from 'react-dom'

import Board from './components/board'

const boardState = {
	title: "My board title",
	lists: [
		{
			listTitle: 'List 1',
			card: ['groceries', 'laundry', 'make chores']
		},
		{
			listTitle: 'List 2',
			card: ['eggs', 'bread', 'milk']
		},
		{
			listTitle: 'List 3',
			card: ['run', 'situps', 'yoga']
		}
	]
}

document.addEventListener('DOMContentLoaded', () => {
	//console.log(boardState.title);
	//console.log(boardState.lists);
  //const boardTitle = 'My First Board'
  //const lists = ['First List', 'Second List', 'Third List']
  ReactDOM.render(
    <Board title={boardState.title} lists={boardState.lists} />,
    document.getElementById('app'))
})
