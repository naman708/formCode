const li=document.querySelectorAll('li')
li[1].style.backgroundColor='green';
li[2].style.visibility='hidden';
li[1].style.color='green';
const odd=document.querySelectorAll('li:nth-child(odd)')
for(let i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='green';
}