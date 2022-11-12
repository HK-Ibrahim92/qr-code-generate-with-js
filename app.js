const generate=document.querySelector(".generate");
const qrinput= generate.querySelector(".form input")
const generatebtn=generate.querySelector(".form button");
const getqrimg=generate.querySelector(".gr-code img");
const getdown=generate.querySelector(".download button");

generatebtn.addEventListener("click", ()=>{
    let getinput= qrinput.value;
    console.log(getinput)
    if(!getinput){
        console.log("khali h")
       // getqrimg.style.display="none"
    }else{
        getqrimg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${getinput} `;
        //getqrimg.style.display="active"
    }
generate.classList.add("active");
qrinput.addEventListener("keyup",() =>{
    if(!getinput){
        generate.classList.remove("active")
    }
})
})
function download(){
        
    html2pdf();
        addPage();
        save();

}