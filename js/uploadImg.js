function uploadImage(){  
  if(true){
    const newItem = document.createElement('img');
    newItem.src = linkText.value;
    newItem.classList.add('w-full', 'border', 'h-64', 'bg-slate-50');
    galleryContainer.appendChild(newItem);
    document.getElementById('p1').innerText += newItem.src;
  }
}