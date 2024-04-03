/*
    Trevor Kulczycki-McIntyre
    Assignment 2
    Internet Programming section 00001

*/






// Declaring Constants
const totalBox = document.getElementById(`total-text`);

const calcBtn = document.getElementById(`calc-button`);

const subBtn = document.getElementById(`submit-button`);

const dinBox = document.getElementsByClassName(`dinner-box`)[0];

const formBox = document.getElementsByClassName(`form-box`)[0];


// Submit Button that verifies if the fields are properly filled 
subBtn.addEventListener(`click`, function () {
    let fName = document.getElementById(`fname`).value;
    let lName = document.getElementById(`lname`).value;
    let email = document.getElementById(`email`).value;
    let ecomFee = document.getElementById(`ecom-check`).checked;
    let futureFee = document.getElementById(`future-check`).checked;
    let webFee = document.getElementById(`web-check`).checked;
    let netFee = document.getElementById(`net-check`).checked;

     if(fName.length>0&&lName.length>0&&email.length>0){

     
    if (ecomFee || futureFee || webFee || netFee)  {
        window.alert(`Thank You For Your Purchase ${fName} ${lName}, A Receipt Was Sent To ${email} `);
    }
    else {       
        let invalidPurchase = document.createElement(`p`);
        invalidPurchase.innerHTML = "Please Select at Least One Option";
        invalidPurchase.classList.add(`invalid-purchase`);
       
       dinBox.appendChild(invalidPurchase);

    }
}
else{
  let invalidForm =  document.createElement(`h2`);
  invalidForm.innerHTML = "Please Fill Out All Fields Marked With An Asterisk *";
  invalidForm.classList.add(`invalid-form`);
  formBox.appendChild(invalidForm);
}


});

// Calculation logic for Calculation Button
calcBtn.addEventListener(`click`, function () {

    let ecomFee = document.getElementById(`ecom-check`).checked ? 295 : 0;
    let futureFee = document.getElementById(`future-check`).checked ? 295 : 0;
    let webFee = document.getElementById(`web-check`).checked ? 395 : 0;
    let netFee = document.getElementById(`net-check`).checked ? 395 : 0;
    let dinnerFee = document.getElementById(`dinner-check`).checked ? 30 : 0;
    
    
    console.log(ecomFee);
    totalBox.value = `$` + parseInt(ecomFee + futureFee + webFee + netFee + dinnerFee);
});



