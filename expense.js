const form=document.getElementById('addForm');
const Input1=document.getElementById('item');
const Input2=document.getElementById('item1');
const Input3=document.getElementById('S1');
const userList=document.getElementById('items');
const card=document.getElementById('main1');
main1.style.backgroundColor='#D3D3D3';
form.addEventListener('submit',onsubmit)
userList.addEventListener('click', delItems);

function delItems(e) {
    if (e.target.classList.contains('delete')) {
        var li = e.target.parentElement;
        const item1 = li.id; // Get the choose description from the list item's id attribute
        userList.removeChild(li);

        // Remove the item from localStorage based on the choose description
        localStorage.removeItem(item1);
    }
    if (e.target.classList.contains('edit')) {
        var li = e.target.parentElement;
                const item1 = li.id; // Get the expenseDescription from the list item's id attribute

                // Retrieve the user data from localStorage
                const userDataJSON = localStorage.getItem(item1);
                const userData = JSON.parse(userDataJSON);

                // Populate the input fields with the user data
                Input1.value = userData.expenseAmount;
                Input2.value = userData.expenseDescription;
                Input3.value = userData.category;

                userList.removeChild(li);
                localStorage.removeItem(item1);
    }
}
function onsubmit(e){
    e.preventDefault();

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
    const user = {
        expenseAmount: Input1.value,
        expenseDescription: Input2.value,
       category: Input3.value,
        
    };

    const userJson = JSON.stringify(user);
    localStorage.setItem(`${Input2.value}`, userJson);

    // Clear the input fields
    Input1.value = '';
    Input2.value = '';
    Input3.value = '';
 
    

}
