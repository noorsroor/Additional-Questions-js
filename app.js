
//Q1----------------------------------
let arr = ['apple', 'mango', 'banana', 'blueberry', 'kiwi'];
let imgPaths = [
    "./images/img1.jpg",
    "./images/img2.jpg",
    "./images/img3.jpg",
    "./images/img4.jpg",
    "./images/img5.jpg"
];

let body = document.body;
let list = document.createElement('ul');


arr.forEach((fruit, index) => {
    let li = document.createElement('li');
    let img = document.createElement('img');

    li.textContent = fruit;
    img.setAttribute("src", imgPaths[index]);

    li.appendChild(img); 
    list.appendChild(li); 
});

body.appendChild(list);


// //call div
// let body=document.body;


// //create elements
// let list= document.createElement('ul');
// let f1= document.createElement('li');
// let f2= document.createElement('li');
// let f3= document.createElement('li');
// let f4= document.createElement('li');
// let f5= document.createElement('li');

// let img1= document.createElement('img');
// let img2= document.createElement('img');
// let img3= document.createElement('img');
// let img4= document.createElement('img');
// let img5= document.createElement('img');

// img1.setAttribute("src", "./images/img1.jpg");
// img2.setAttribute("src", "./images/img2.jpg");
// img3.setAttribute("src", "./images/img3.jpg");
// img4.setAttribute("src", "./images/img4.jpg");
// img5.setAttribute("src", "./images/img5.jpg");



// //add content
// f1.textContent = arr[0];
// f2.textContent = arr[1];
// f3.textContent = arr[2];
// f4.textContent = arr[3];
// f5.textContent = arr[4];



// //append to html
// body.appendChild(list);
// list.appendChild(f1);
// list.appendChild(f2);
// list.appendChild(f3);
// list.appendChild(f4);
// list.appendChild(f5);

// f1.appendChild(img1);
// f2.appendChild(img2);
// f3.appendChild(img3);
// f4.appendChild(img4);
// f5.appendChild(img5);


//Q2---------------------
function searchArray(arr, num) {
    for(let i=0; i < arr.length; i++) {
    if(arr[i]== num){
        return i;
        }
    }
    return -1;
}

let numbers =[1,5,9,6,4];
console.log(searchArray(numbers, 9));
