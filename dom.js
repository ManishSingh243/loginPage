var items = document.getElementsByClassName('list-group-item');
/*items[0].textContent = 'Hello Maya';
items[1].textContent = 'Hello Mani';
items[2].textContent = 'Hello Money';
items[3].textContent = 'Hello Mishra';*/

items[1].style.backgroundColor = 'green';

items[2].style.display = 'none';

//var fontChange = document.getElementById('items');
//fontChange.style.fontWeight = 'bold';

/*var headerTitle = document.getElementById('header-title');
headerTitle.style.borderBottom = 'solid 3px black';

var title  = document.getElementById('add');
title.style.color = 'green';

console.log(document.getElementsByClassName('list-group-item'));
console.log(document.getElementById('items'));

for(var i=0;i<items.length;i++){
    items[i].style.backgroundColor = 'yellow';
}

var tag = document.getElementsByTagName('li');
for(var i=0;i<tag.length;i++){
    tag[i].style.backgroundColor = 'red';
}*/

var selector = document.querySelectorAll('li');
selector[1].style.color = 'green';

var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor = 'green';
}