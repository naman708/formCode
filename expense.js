const form=document.getElementById('addForm');
const Input1=document.getElementById('item');
const Input2=document.getElementById('item1');
const Input3=document.getElementById('S1');
const userList=document.getElementById('items');
const card=document.getElementById('main1');
main1.style.backgroundColor='#D3D3D3';
form.addEventListener('submit',onsubmit)


function onsubmit(e){
    e.preventDefault();


    
    const user = {
        expenseAmount: Input1.value,
        expenseDescription: Input2.value,
       category: Input3.value,
        
    };
    const li=document.createElement('li');
    const delBtn=document.createElement('button');
    const editBtn=document.createElement('button');
    delBtn.className='btn btn-danger btn-sm float-right delete';
    editBtn.className='btn btn-blue btn-sm float-right edit';
    editBtn.style.backgroundColor='blue';
    delBtn.appendChild(document.createTextNode('Delete'));
    editBtn.appendChild(document.createTextNode('Edit'));
    li.className='list-group-item';
    li.id=Input2.value;
    li.appendChild(document.createTextNode(`${Input1.value}-${Input2.value}-${Input3.value}`));
    li.appendChild(editBtn);
    li.appendChild(delBtn);
    userList.appendChild(li);
    axios.post("https://crudcrud.com/api/ac5ae4539a99489ebf64d6b6b1a4e377/data",user)
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })

    //const userJson = JSON.stringify(user);
    //localStorage.setItem(`${Input2.value}`, userJson);

    // Clear the input fields
    Input1.value = '';
    Input2.value = '';
    Input3.value = '';
 
    

}
function display(user){
    const li=document.createElement('li');
    const delBtn=document.createElement('button');
    const editBtn=document.createElement('button');
    delBtn.className='btn btn-danger btn-sm float-right delete';
    editBtn.className='btn btn-blue btn-sm float-right edit';
    editBtn.style.backgroundColor='blue';
    delBtn.appendChild(document.createTextNode('Delete'));
    editBtn.appendChild(document.createTextNode('Edit'));
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
