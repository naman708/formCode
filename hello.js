const Fname = document.getElementById('fname');
const Form = document.getElementById('myform');
const Email = document.getElementById('email');
const pH = document.getElementById('phno');
const Date1 = document.getElementById('date');
const Time = document.getElementById('time');
const userList = document.getElementById('items');

Form.addEventListener('submit', storeData);
userList.addEventListener('click', delItems);

function delItems(e) {
    if (e.target.classList.contains('delete')) {
        var li = e.target.parentElement;
        const email = li.id; // Get the email from the list item's id attribute
        userList.removeChild(li);

        // Remove the item from localStorage based on the email
        localStorage.removeItem(email);
    }
    if (e.target.classList.contains('edit')) {
        var li = e.target.parentElement;
        const email = li.id; // Get the email from the list item's id attribute

        // Retrieve the user data from localStorage
        const userDataJSON = localStorage.getItem(email);
        const userData = JSON.parse(userDataJSON);

        // Populate the input fields with the user data
        Fname.value = userData.Name;
        Email.value = userData.Email;
        pH.value = userData.PhoneNo;
        Date1.value = userData.Date;
        Time.value = userData.Time;
        userList.removeChild(li);
        localStorage.removeItem(email);
    }
}

function storeData(e) {
    e.preventDefault();

    const li = document.createElement('li');
    const delbtn = document.createElement('button');
    const editbtn = document.createElement('button');
    editbtn.className = 'btn btn-sm edit';
    editbtn.style.backgroundColor = 'blue';
    editbtn.appendChild(document.createTextNode('Edit'));
    delbtn.className = 'btn btn-danger btn-sm float-right delete';
    delbtn.appendChild(document.createTextNode('Delete'));
    li.className = 'list-group-item';
    li.id = Email.value;
    li.appendChild(document.createTextNode(`Name: ${Fname.value}---Email: ${Email.value}---PhoneNo: ${pH.value}---Date: ${Date1.value}---Time: ${Time.value} `));
    li.appendChild(delbtn);
    li.appendChild(editbtn);
    userList.appendChild(li);

    const user = {
        Name: Fname.value,
        Email: Email.value,
        PhoneNo: pH.value,
        Date: Date1.value,
        Time: Time.value,
    };

    const userJson = JSON.stringify(user);
    localStorage.setItem(`${Email.value}`, userJson);

    // Clear the input fields
    Fname.value = '';
    Email.value = '';
    pH.value = '';
    Date1.value = '';
    Time.value = '';
}
