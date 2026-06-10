console.log("santhosh sankar");

const f1=20;
const f2=40;
console.log(f1);
const str1="santhosn is gay";
console.log(str1);

const array1=["pakka","mukilan","muthu","santho"]  ;
console.log(array1[0]);
array1[2]="ms"
console.log(array1[2]);
const array2=[1,"sp",true,1.4]  
console.log(array2)
for(let i=0; i<array2.length; i++){
    console.log(array2[i]+" ");
}
const fourth = document.getElementById("ptag")
fourth.innerHTML = "this is fourth document"
function newFunction(){
    console.log("RAJ MOHAN IS A GAY")
}

const input=document.getElementById("eventListener")
const output=document.getElementById("ptag")
input.addEventListener("input", ()=>{
    output.textContent = input.value
})