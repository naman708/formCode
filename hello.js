const Fname=document.getElementById('fname');
const Form=document.getElementById('myform');
const Email=document.getElementById('email');
const pH=document.getElementById('phno');
const Date1=document.getElementById('date');
const Time=document.getElementById('time');

Form.addEventListener('submit',storeData);

function storeData(e){
    e.preventDefault();

    localStorage.setItem('Name',`${Fname.value}`);
    localStorage.setItem('Email',`${Email.value}`);
    localStorage.setItem('PhoneNo',`${pH.value}`);
    localStorage.setItem('Date',`${Date1.value}`);
    localStorage.setItem('Time',`${Time.value}`);
}
