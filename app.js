const sections = document.querySelectorAll('section');
for(const section of sections)
{
    // console.log(sections);
    section.style.border = '2px solid steelblue';
    section.style.marginBottom= '5px';
    section.style.borderRadius = '15px';
    section.style.scrollPaddingLeft = '10px';
    section.style.backgroundColor = 'black';
}
const plaselist= document.getElementById('places-list');
const li = document.createElement('li');
li.innerText = 'khagracori';
plaselist.appendChild(li);