const items = [
  'Item 1','Item 2','Item 3','Item 4','Item 5',
  'Item 6','Item 7','Item 8','Item 9','Item 10'
];

let page = 0;
const perPage = 3;

function render(){
  const list = document.getElementById('list');
  list.innerHTML = '';

  const start = page * perPage;
  const slice = items.slice(start, start + perPage);

  slice.forEach(i=>{
    const li = document.createElement('li');
    li.innerText = i;
    list.appendChild(li);
  });
}

function next(){
  if((page + 1) * perPage < items.length){
    page++;
    render();
  }
}

function prev(){
  if(page > 0){
    page--;
    render();
  }
}

render();
