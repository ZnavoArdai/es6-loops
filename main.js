



// var elements=document.getElementsByClassName("ele");

// for (const i of elements) {
//     console.log(i)
// }


// var elementp=document.getElementsByClassName("texts");




// btn1.onclick=()=>{
//     for(const i of elementp){

//         i.style.color="blue"
//         }
// }

// btn2.onclick=()=>{
//     for(const i of elementp){

//         i.innerText="hello"
//         }
// }

// //4
// let person1={
//     name:"gggg",
//     lastname:"fffff",
//     age:26,
//     city:"jerosalem",
// }


// for (const key in person1) {
//     console.log(`${key} : ${person1[key]}`)
//  div1.innerText+=`${key}  ${person1[key]}\n`
// }

//5
// fname.style.display="block";
// lname.style.display="block";
// age.style.display="block";





// btn.onclick=()=>{
//     let peron={

//         fname:"dsd",
//         lname:"sdsd",
//         age:0,
//     }
//     peron.fname=fname.value
//     peron.lname=lname.value
//     peron.age=age.value
// for (const key in peron) {
   
//        display.innerText+=`${key} : ${peron[key]}\n`
//     }
// }

//6

let personArray=[
    person1={
        name:"avi",
        last_name:"avrom",
        birthday:"14/45/1994",
        email:"avi@gmail.com",
    }
    ,
    person2={
        name:"natan",
        last_name:"avrom",
        birthday:"14/45/1994",
        email:"avi@gmail.com",
    },
    person3={
        name:"haim",
        last_name:"avrom",
        birthday:"14/45/1994",
        email:"avi@gmail.com",
    },
    person4={
        name:"ron",
        last_name:"avrom",
        birthday:"14/45/1994",
        email:"avi@gmail.com",
    }

]


 

    for (const it of personArray) {

        tbodyid.innerHTML+=`<tr><td>${it.name}</td> <td>${it.last_name}</td> <td>${it.birthday}</td> <td>${it.email}</td></tr>`;
  
    }