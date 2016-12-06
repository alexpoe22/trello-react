import React from 'react';
import ReactDOM from 'react-dom';

import Card from './card.js';

export default function List (props) {
	//console.log(props, "list")
  const cardsArr = props.cards.map((cardElem, index) => {
    const listItem = <li>{cardElem}</li>;
 	  return <Card text={listItem} key={index}/>
  })

  return (
    <div>
      <h4>{props.title}</h4>
      <ul>
        {cardsArr}
      </ul>
    </div>
  )
}
