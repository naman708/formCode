const form=document.getElementById('addForm');
const itemList=document.getElementById('items');
const Input=document.getElementById('item');
const Input1=document.getElementById('item1');
const filterI=document.getElementById('filter');

form.addEventListener('submit',addItems);
itemList.addEventListener('click',delItems);
filterI.addEventListener('keyup',filterItems);

function addItems(e){
    e.preventDefault();

    const li=document.createElement('li');
    const newItem=document.createTextNode(`${Input.value} ${Input1.value}`);
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
function filterItems(e){
    var text=e.target.value.toLowerCase();

   var items=itemList.getElementsByTagName('li');

   Array.from(items).forEach(function(i){
    var itemName=i.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text)!=-1)
    {
        i.style.display='block';
    }
    else{
        i.style.display='none';
    }
   });
}