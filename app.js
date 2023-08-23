// // // // // let para = document.createElement('p');
// // // // // para.innerText="ankit hii!";
// // // // // document.querySelector('body').append(para);
// // // // // para.classList.add("red");

// // // // // let heading = document.createElement('h3');
// // // // // heading.innerText="ankit hii!";
// // // // // document.querySelector('body').append(heading);
// // // // // heading.classList.add("blue");

// // // // // let box = document.createElement('div');
// // // // // let heading2 = document.createElement('h1');
// // // // // heading2.innerText="I'm a DIV";
// // // // // let para2 = document.createElement('p');
// // // // // para2.innerText="ME TOO!!";
// // // // // box.append(heading2);
// // // // // box.append(para2);
// // // // // box.classList.add("div1");
// // // // // document.querySelector('body').append(box);

// // // // let input=document.createElement('input');
// // // // document.querySelector('body').append(input);

// // // // let btn =document.createElement('button');
// // // // document.querySelector('body').append(btn);
// // // // btn.innerText="Click Me!";

// // // // btn.setAttribute("id","btn");
// // // // btn.setAttribute("placeholder","username");

// // // // btn.classList.add("btn1");

// // // // let heading = document.createElement('h1');
// // // // document.querySelector('body').append(heading);
// // // // h1.innerText="DOM Practice";
// // // // heading.classList.add("h1");
// // // let btn=document.querySelector("button");
// // // btn.addEventListener("click",function(){
// // //     let h3=document.querySelector("h3");
// // //     let randomcolor=getrandomcolor();
// // //     h3.innerText=randomcolor;

// // //     let div=document.querySelector("div");
// // //     div.style.backgroundColor=randomcolor;
// // // });
// // // function getrandomcolor(){
// // //     let red=Math.floor(Math.random()*255);
// // //     let green=Math.floor(Math.random()*255);
// // //     let blue=Math.floor(Math.random()*255);
// // //     let color=`rgb(${red},${green},${blue})`;
// // //     return color;
// // // }
// // let inp=document.querySelector("#user");
// // let h2 = document.querySelector("h2");
// // inp.addEventListener("input",function(){
// //     h2.innerText=inp.value;
// // });
// // let btn = document.querySelector("button");
// // btn.addEventListener("click",function(){
// //     btn.style.color="green";
// //     inp.style.backgroundcolor="blue";
// // });
let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText=inp.value;
    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    item.appendChild(delbtn)
    ul.append(item);
inp.value="";
});
ul.addEventListener("click",function(event){
if(event.target.nodeName=="BUTTON"){
    let listItem=event.target.parentElement;
    listItem.remove();
}
});
// let btn=document.querySelector("button");
// let inp = document.querySelector("input");
// let para = document.querySelector("p");
// btn.addEventListener("click",function(){
//     let pass = '';
//     let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
//         'abcdefghijklmnopqrstuvwxyz0123456789@#$';
    
//     for (let i = 1; i <= 8; i++) {
//         let char = Math.floor(Math.random()
//             * str.length + 1);
    
//         pass += str.charAt(char)
//     }
//     para.innerText=pass;
// });


