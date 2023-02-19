//var items = document.getElementsByClassName('list-group-item');
/*items[0].textContent = 'Hello Maya';
items[1].textContent = 'Hello Mani';
items[2].textContent = 'Hello Money';
items[3].textContent = 'Hello Mishra';*/

//items[1].style.backgroundColor = 'green';

//items[2].style.display = 'none';

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

/*var selector = document.querySelectorAll('li');
selector[1].style.color = 'green';

var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor = 'green';
}*/

//var itemList = document.querySelector('#items');

//parentNode
/*console.log(itemList.parentNode.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';*/

//parentElement
//console.log(itemList.parentElement.parentElement);
//itemList.parentElement.style.backgroundColor = '#f4f4f4';

//first child
//console.log(itemList.firstChild);

//firstElement Child
//console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent = "Hello";

//firstElement Child
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent = "Hello";

//next sibling
//console.log(itemList.nextSibling);


//nextElement sibling
//console.log(itemList.nextElementSibling);


//previous sibling
//console.log(itemList.previousSibling);

//previousElement sibling
//console.log(itemList.previousElementSibling);

//create element
//var newDiv = document.createElement('div');

//create class
//newDiv.className = 'hello';

//create id
//newDiv.id = 'hello1';

//set attribute
//newDiv.setAttribute('title','hello world');

//create textnode
//var newDivNode = document.createTextNode('Hello word');

//append child
//newDiv.appendChild(newDivNode);

/*var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

newDiv.style.fontSize = '40px';*/



//itemList.insertBefore(newDiv, itemList.children[0]);

//console.log(newDiv);

//container.insertBefore(newDiv,h1);

var inputList = document.getElementById('items');

var form  = document.getElementById('addForm');
//var input = document.querySelector('#form-input');

var filter = document.getElementById('filter');

form.addEventListener('submit', addItem);

inputList.addEventListener('click',deleteItem);

filter.addEventListener('keyup', filterItems);

function addItem(e){
   e.preventDefault();

   var inputName = document.getElementById('form-input').value;

   var inputName2 = document.getElementById('form-input2').value;

   inputName = inputName + " " + inputName2;

   var li = document.createElement('li');
   li.className = 'list-group-item';

   li.appendChild(document.createTextNode(inputName));

   var deleteBtn = document.createElement('button');
   deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

   deleteBtn.appendChild(document.createTextNode('X'));

   li.appendChild(deleteBtn);

   inputList.appendChild(li);
}

function deleteItem(e){
    if(e.target.classList.contains('delete')){
         if(confirm("Are you sure?")){
            var li = e.target.parentElement;
            inputList.removeChild(li);
         }
    }
}

function filterItems(e){
    var text = e.target.value.toLowerCase();

    var items = inputList.getElementsByTagName('li');

    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;

        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    });
}