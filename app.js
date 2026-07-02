// let id=100;
// let  name="keerthana";
// let personaldata=()=>{
    
// }
// function personaldata(){
//     let department="MCA";
//     console.log(id);
// }
// personaldata();
// console.log(name);
let add=()=>{
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    let c = a + b;
    console.log(c);
    documnet.getElementById('btn').addeventListener('click',add);
}

