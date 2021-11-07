function submitForm(form){
    console.log(document.getElementById('model').value);
    console.log(document.getElementById('quantity').value);
    console.log(document.getElementById('color').value);
    console.log(document.getElementById('name').value);
    console.log(document.getElementById('phone').value);
    console.log(document.getElementById('address').value);
    console.log(form.quantity.value);
    console.log(form.name.value);
    console.log(form.phone.value);
    console.log(form.address.value);

    if(!validateModel(form.model.value)){
        return false;
    } 
    if(!validateQuantity(form.quantity.value)){
        return false;
    } 
    if(!validateColor(form.color.value)){
        return false;
    } 
    if(!validateName(form.name.value)){
        return false;
    }
    if(!validatePhone(form.phone.value)){
        return false;
    }
    if(!validateAddress(form.address.value)){
        return false;
    }   
    return true;
}

function validateModel(data){
    if(data == ""){ //VALIDATTE 1
        alert('Model must be chosen!');
        return false;
    } return true;
}
function validateColor(data){
    if(data == ""){ 
        alert('Color must be chosen!');
        return false;
    } return true;
}
function validateName(data){
    if(data == ""){ 
        alert('Name must be filled!');
        return false;
    } 
    return true;
}

function validatePhone(data){
    if(data == ""){
        alert('Phone number must be filled!');
        return false;
    } else if(data.length != 12){ //VALIDATE 3
        alert('Phone number must be 12 digits!');
        return false;
    }
    return true;
}

function validateAddress(data){
    if(data == ""){
        alert('Address must be filled!');
        return false;
   // } else if(data.includes == "street"){
    //    alert('Address must include (street) in form!');
     //   return false;
    } 
    return true;
}

function validateQuantity(data){
    if(data == ""){
        alert('Quantity must be filled!');
        return false;
        
    } else if (data < 1) { //VALIDATTE 2
        alert('Quantity must be more than 0!')
        return false;
    }
    return true;
}

