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
userList.addEventListener('click',delItems);
function delItems(e){
    
    if(e.target.classList.contains('delete')){
        var li = e.target.parentElement;
        const email = li.id; // Get the email from the list item's id attribute
        userList.removeChild(li);

        // Remove the item from localStorage based on the email
        localStorage.removeItem(email);
        
    }
    


    
   
}

function storeData(e){
    e.preventDefault();

    const li=document.createElement('li');
    const delbtn=document.createElement('button');
    delbtn.className='btn btn-danger btn-sm float-right delete';
    delbtn.appendChild(document.createTextNode('Delete'));
    li.className='list-group-item';
    li.id=Email.value;
    li.appendChild(document.createTextNode( `Name:${Fname.value}---Email:${Email.value}
    ---PhoneNo:${pH.value}
    ---Date:${Date1.value}
    ---Time:${Time.value} `))
    li.appendChild(delbtn);
    userList.appendChild(li);
const userJson=JSON.stringify(user);
localStorage.setItem(`${Email.value}`,userJson);
const storedUserDetails = JSON.parse(userJson);
}