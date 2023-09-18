const form=document.getElementById('addForm');
const Input1=document.getElementById('item');
const Input2=document.getElementById('item1');
const Input3=document.getElementById('S1');
const userList=document.getElementById('items');
const card=document.getElementById('main1');
main1.style.backgroundColor='#D3D3D3';
const addAnExpenseBtn = document.querySelector('#game');
form.addEventListener('submit',onsubmit)


function onsubmit(e){
    e.preventDefault();


    
    const user = {
        expenseAmount: Input1.value,
        expenseDescription: Input2.value,
       category: Input3.value,
        
    };
    if (addAnExpenseBtn.id) {
        axios.put("https://crudcrud.com/api/ac5ae4539a99489ebf64d6b6b1a4e377/data/"+ addAnExpenseBtn.id,user)
        .then((res) => {
            console.log(res);
            user._id = addAnExpenseBtn.id;
            display(user)
        })
        .catch((err) => console.log(err));
        addAnExpenseBtn.id = '';
    } else {
        axios.post("https://crudcrud.com/api/ac5ae4539a99489ebf64d6b6b1a4e377/data",user)
        .then((res) => display(res.data))
        .catch((err) => console.log(err));
    }
   
   

    //const userJson = JSON.stringify(user);
    //localStorage.setItem(`${Input2.value}`, userJson);

    // Clear the input fields
    Input1.value = '';
    Input2.value = '';
    Input3.value = '';
 
    

}
function display(user){
    const li=document.createElement('li');
    //create edit and delete btn
    const delBtn=document.createElement('button');
    const editBtn=document.createElement('button');
    //created class of edit and delete btn
    delBtn.className='btn btn-danger btn-sm float-right delete';
    editBtn.className='btn btn-blue btn-sm float-right edit';
    editBtn.style.backgroundColor='blue';
    //add text to btn
    delBtn.appendChild(document.createTextNode('Delete'));
    editBtn.appendChild(document.createTextNode('Edit'));
    // set id to del btn
    let id =user._id;
    //onclick event
    delBtn.onclick = () => {
        axios.delete("https://crudcrud.com/api/ac5ae4539a99489ebf64d6b6b1a4e377/data/"+ id)
            .then(() => {
                console.log(res);
            })
            .catch((error) => console.log(error));

        // localStorage.removeItem(userData.amountData);
        userList.removeChild(li);
    };
    editBtn.onclick=()=>{
        addAnExpenseBtn.id = id;
        userList.removeChild(li);

     Input1.value = `${user.expenseAmount}`;
     Input2.value = `${user.expenseDescription}`;
     Input3.value = `${user.category}`;
     
    };
    li.className='list-group-item';
    li.id=Input2.value;
    li.appendChild(document.createTextNode(`${user.expenseAmount}-${user.expenseDescription}-${user.category}`));
    li.appendChild(editBtn);
    li.appendChild(delBtn);
    userList.appendChild(li);
}
window.addEventListener('DOMContentLoaded', () => {
    axios.get("https://crudcrud.com/api/ac5ae4539a99489ebf64d6b6b1a4e377/data")
        .then((res) => {
            for (var i = 0; i < res.data.length; i++) {
                display(res.data[i]);
            }
        })
        .catch((err) => console.log(err));
})
