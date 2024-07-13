// DOM Manipulation

/* // getElementById()

const title = document.getElementById('main-heading');
console.log(title);


// getElementByClassName()

const listItem = document.getElementsByClassName('list-items');
console.log(listItem);

// getElementByTagName()

const tagName = document.getElementsByTagName('li');
console.log(tagName);

// querySelector()

const container = document.querySelector('div');
console.log(container);

// querySelectorAll()

const allContainer = document.querySelectorAll('div');
console.log(allContainer); */

const title = document.querySelector('#main-heading');
title.style.background = 'red';

const listItems = document.querySelectorAll('.list-items');
for(i = 0; i <= listItems.length; i++){
	listItems[i].style.background = 'blue';
}
