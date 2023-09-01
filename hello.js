const Fname=document.getElementById('fname');
const Form=document.getElementById('myform');
const Email=document.getElementById('email');
const pH=document.getElementById('phno');
const Date1=document.getElementById('date');
const Time=document.getElementById('time');
const userList=document.getElementById('items')

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

    const li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode( `Name:${Fname.value}---Email:${Email.value}
    PhoneNo:${pH.value}
    Date:${Date1.value}
    Time:${Time.value} `))
    userList.appendChild(li);
const userJson=JSON.stringify(user);
localStorage.setItem(`${Email.value}`,userJson);
const storedUserDetails = JSON.parse(userJson);
}