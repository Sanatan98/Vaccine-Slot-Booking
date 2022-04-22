const submit=e=>
{
  let nam= document.getElementById('name').ariaValueMax,
  ema= document.getElementById("email").value,
  age=document.getElementById("age").value,
  pho=document.getElementById("phone number").value,
  adh=document.getElementById("adhaar number").value,
  add=document.getElementById("address").value,
  dat=document.getElementById("date").value;
  let formData =Json.parse(localStorage.getItem('formData'))
  formData.push({nam,ema,age,pho,adh,add,dat});
    localStorage.setItem('formData',JSON.stringify(formData));
    dispData();
    ema.preventDefault();
}