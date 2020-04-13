function  formValidation(){
    let yname = document.preorder.uname;
    let yphno = document.preorder.phno;
    let ypro = document.preorder.pro;
    let ypcod = document.preorder.pcod;
    let yst = document.preorder.st;

if (validname(yname)){
if(validphno(yphno)){
if(proselect(ypro)){
if(validpcod(ypcod)){
if(ValidityState(yst)){
}
}
}
}
}
return false;
}

function validname(yname){
    let letters = /^[A-Za-z]+$/;
if(yname.value.match(letters))
{
return true;
}
else
{
alert('name must have alphabet characters only');
yname.focus();
return false;
}
}

function validphno(yphno)
{ 
var numbers = /^[0-9]+$/;
if(yphno.value.match(numbers))
{
return true;
}
else
{
alert('phone number must have numeric characters only');
yphno.focus();
return false;
}
}

function proselect(ypro)
{
if(ypro.value == "Default")
{
alert('Select your product from the list');
ypro.focus();
return false;
}
else
{
return true;
}
}

function validpcod(ypcod)
{ 
var numbers = /^[0-9]+$/;
if(ypcod.value.match(numbers))
{
return true;
}
else
{
alert('Postcode must have numeric characters only');
ypcod.focus();
return false;
}
}

function ValidityState(yst){
let letters = /^[A-Za-z]+$/;
if(yst.value.match(letters))
{
 alert('Form Succesfully Submitted');
window.location.reload()
return true;
}
else
{
alert('State must have alphabet characters only');
yst.focus();
return false;
}
}