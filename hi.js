const form=document.getElementById('addForm');
const itemList=document.getElementById('items');
const Input=document.getElementById('item');

form.addEventListener('submit',addItems);
itemList.addEventListener('click',delItems);

function addItems(e){
    e.preventDefault();

    const li=document.createElement('li');
    const newItem=document.createTextNode(Input.value);
    const delBtn=document.createElement('button');
    
    delBtn.className='btn btn-danger btn-sm float-right delete';
    delBtn.appendChild(document.createTextNode('X'));
    li.className='list-group-item';
    li.appendChild(newItem);
    li.appendChild(delBtn);
    itemList.appendChild(li);
}
function delItems(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
          var li = e.target.parentElement;
          itemList.removeChild(li);
        }
      }
}