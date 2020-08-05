// // console.dir(document);  it is used for get all the documnet object like url an nodes and children
// // console.log(document.domain)      localhost
// // console.log(document.URL)         http://localhost:5500/Day2/
// // console.log(document.title)       Item Lister
// // document.title = 123              changes the title


// // console.log(document.doctype);              will give the doctype of page like HTML5
// // console.log(document.head);                 will give hed of the page
// // console.log(document.body);                 will give hed of the body
// // console.log(document.all);                  in console return all component in form of array but not aray
// // console.log(document.all[10]);              to go to a specific no of component but its not good what if we change code and place something else on index 10
// // document.all[10].textContent = 'Hello';     it will manipulate the text content to else but does not follow style component
// // console.log(document.forms[0]);             
// // console.log(document.links);
// // console.log(document.images);

// // GETELEMENTBYID //
// // console.log(document.getElementById('header-title'));
// // var headerTitle = document.getElementById('header-title');      the fetched element can be stored in var
// // var header = document.getElementById('main-header');
// // console.log(headerTitle);
// // headerTitle.textContent = 'Hello';                              to change the text content       
// // headerTitle.innerText = 'Goodbye';                              these are basically same but this is more accurate 
// // console.log(headerTitle.innerText);
// // headerTitle.innerHTML = '<h3>Hello</h3>';                       this will insert this html elment in that
// // header.style.borderBottom = 'solid 3px #000';                   we can alse add style but tags re user in camel form

// // GETELEMENTSBYCLASSNAME //
// // var items = document.getElementsByClassName('list-group-item');
// // console.log(items);
// // console.log(items[1]);
// // items[1].textContent = 'Hello 2';
// // items[1].style.fontWeight = 'bold';
// // items[1].style.backgroundColor = 'yellow';

// // // Gives error
// // //items.style.backgroundColor = '#f4f4f4';

// // for(var i = 0; i < items.length; i++){
// //   items[i].style.backgroundColor = '#f4f4f4';
// // }

// // GETELEMENTSBYTAGNAME //
// // var li = document.getElementsByTagName('li');
// // console.log(li);
// // console.log(li[1]);
// // li[1].textContent = 'Hello 2';
// // li[1].style.fontWeight = 'bold';
// // li[1].style.backgroundColor = 'yellow';

// // // Gives error
// // //items.style.backgroundColor = '#f4f4f4';

// // for(var i = 0; i < li.length; i++){
// //   li[i].style.backgroundColor = '#f4f4f4';
// // }

// // QUERYSELECTOR //
// // var header = document.querySelector('#main-header');      in this we can pass any tags or id or classname
// // header.style.borderBottom = 'solid 4px #ccc';

// // var input = document.querySelector('input');       will get the  input from 
// // input.value = 'Hello World'

// // var submit = document.querySelector('input[type="submit"]');        now for second we have to specify the 
// // submit.value="SEND"

// // var item = document.querySelector('.list-group-item');          this  is we accsessing by class       
// // item.style.color = 'red';

// // var lastItem = document.querySelector('.list-group-item:last-child');     we can alse class its last child 
// // lastItem.style.color = 'blue';                                             

// // var secondItem = document.querySelector('.list-group-item:nth-child(2)');                for a specfic child we use :nth-child
// // secondItem.style.color = 'coral';                                                           

// // QUERYSELECTORALL //
// // var titles = document.querySelectorAll('.title');   // this will give all the element with classname title           

// // console.log(titles);                       // this will node list in array format we can perform array opreation on them
// // titles[0].textContent = 'Hello';               to index 0 text Content we can change    

// // var odd = document.querySelectorAll('li:nth-child(odd)');     //  to select the odd elements of li child we use this 
// // var even = document.querySelectorAll('li:nth-child(even)');      //this is used for even elements 

// // for (var i = 0; i < odd.length; i++) {
// //     even[i].style.backgroundColor = '#ccc';
// //     odd[i].style.backgroundColor = 'red';

// // }


// // TRAVERSING THE DOM //



// var itemList = document.querySelector('#items');
// // // parentNode
// // console.log(itemList.parentNode);                      this will give  the parent node of selected items
// // itemList.parentNode.style.backgroundColor = '#f4f4f4';    and change it bg color
// // console.log(itemList.parentNode.parentNode.parentNode);     and we can alse chain to parents parents 

// // parentElement
// // console.log(itemList.parentElement);
// // itemList.parentElement.style.backgroundColor = '#f4f4f4';           both of parent node and parent element are basically same 
// // console.log(itemList.parentElement.parentElement.parentElement);

// // childNodes
// // console.log(itemList.childNodes);        in child nodes this will give us an nodelist in wich we have spaces to returned as text Element

// // console.log(itemList.children);                so we use children because we dont want the text element this return  only list items  
// // console.log(itemList.children[1]);
// // itemList.children[1].style.backgroundColor = 'yellow';

// // FirstChild
// //console.log(itemList.firstChild);            this  also use to give the  text chlid
// // firstElementChild
// // console.log(itemList.firstElementChild);            this firstelementchild this will give the elemnt we want so we use this 
// // itemList.firstElementChild.textContent = 'Hello 1';


// // lastChild
// // console.log(itemList.lastChild);
// // lastElementChild
// // console.log(itemList.lastElementChild);
// // itemList.lastElementChild.textContent = 'Hello 4';

// // nextSibling
// // console.log(itemList.nextSibling);
// // // nextElementSibling
// // console.log(itemList.nextElementSibling);

// // previousSibling
// // console.log(itemList.previousSibling);
// // previousElementSibling
// // console.log(itemList.previousElementSibling);itemList.previousElementSibling.style.color = 'green';

// // createElement

// // Create a div
// // var newDiv = document.createElement('div');

// // // Add class
// // newDiv.className = 'hello';

// // // Add id
// // newDiv.id = 'hello1';

// // // Add attr
// // newDiv.setAttribute('title', 'Hello Div');

// // // Create text node
// // var newDivText = document.createTextNode('Hello World');

// // // Add text to div
// // newDiv.appendChild(newDivText);

// // var container = document.querySelector('header .container');
// // var h1 = document.querySelector('header h1');

// // console.log(newDiv);

// // newDiv.style.fontSize = '30px';

// // container.insertBefore(newDiv, h1);



// // EVENTS //

// // var button = document.getElementById('button').addEventListener('click', buttonClick);

// // function buttonClick(e){
// //   //console.log('Button clicked');
// //   // document.getElementById('header-title').textContent = 'Changed';
// //   // document.querySelector('#main').style.backgroundColor = '#f4f4f4';
// //   //console.log(e);

// //   // console.log(e.target);
// //   // console.log(e.target.id);
// //   // console.log(e.target.className);
// //   // console.log(e.target.classList);
// //   // var output = document.getElementById('output');
// //   // output.innerHTML = '<h3>'+e.target.id+'</h3>';

// //   // console.log(e.type);

// //   //console.log(e.clientX);
// //   //console.log(e.clientY);

// //   //console.log(e.offsetX);
// //   //console.log(e.offsetY);

// //   // console.log(e.altKey);
// //   // console.log(e.ctrlKey);
// //   // console.log(e.shiftKey);
// // }

// var button = document.getElementById('button');
// var box = document.getElementById('box');

// //button.addEventListener('click', runEvent);
// //button.addEventListener('dblclick', runEvent);
// //button.addEventListener('mousedown', runEvent);
// //button.addEventListener('mouseup', runEvent);

// //box.addEventListener('mouseenter', runEvent);
// //box.addEventListener('mouseleave', runEvent);

// //box.addEventListener('mouseover', runEvent);
// //box.addEventListener('mouseout', runEvent);

// // box.addEventListener('mousemove', runEvent);

// var itemInput = document.querySelector('input[type="text"]');
// var form = document.querySelector('form');
// var select = document.querySelector('select');

// // itemInput.addEventListener('keydown', runEvent);
// // itemInput.addEventListener('keyup', runEvent);
// // itemInput.addEventListener('keypress', runEvent);

// // itemInput.addEventListener('focus', runEvent);
// // itemInput.addEventListener('blur', runEvent);

// // itemInput.addEventListener('cut', runEvent);
// // itemInput.addEventListener('paste', runEvent);

// // itemInput.addEventListener('input', runEvent);

// // select.addEventListener('change', runEvent);
// // select.addEventListener('input', runEvent);

// // form.addEventListener('mousemove', runEvent);

// // function runEvent(e) {
// //     e.preventDefault();
// //     console.log('EVENT TYPE: ' + e.type);

// //     // console.log(e.target.value);
// //     //  document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';

// //     //  output.innerHTML = '<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+'</h3>';

// //     box.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ", 40)";
// // }
