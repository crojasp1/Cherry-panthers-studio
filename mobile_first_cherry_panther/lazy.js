const isIntersecting = (entry)=>{
  return entry.isIntersecting; //A la vista del viewport
};

const action = (entry)=>{
  console.log("hey");
  const nodo = entry.target;
  //unlisten 
  observer.unobserve(nodo);
};

const observer = new IntersectionObserver((entries)=>{
  entries.filter(isIntersecting).forEach(action);

});
export const registerImage = (img)=>{
  //Observer image
  observer.observe(img);
};