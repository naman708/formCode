const Fname=document.getElementById('fname');
const Form=document.getElementById('myform');
const Email=document.getElementById('email');
const pH=document.getElementById('phno');
const Date1=document.getElementById('date');
const Time=document.getElementById('time');

const user={
    Name:`${Fname.value}`,
    Email:`${Email.value}`,
    PhoneNo:`${pH.value}`,
    Date:`${Date1.value}`,
    Time:`${Time.value}`,

}
Form.addEventListener('submit',storeData);

function storeData(e){
    e.preventDefault();
const userJson=JSON.stringify(user);
localStorage.setItem('UserDetails',userJson);
const storedUserDetails = JSON.parse(userJson);
}