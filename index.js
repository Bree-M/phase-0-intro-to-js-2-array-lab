const cats=[
  "Milo",
  "Otis",
  "Garfield",
];

function destructivelyAppendCat(name){
  cats.push(name)
}

function destructivelyPrependCat(name){
  cats.unshift(name)
}

function destructivelyRemoveLastCat(){
  cats.pop()
}

function destructivelyRemoveFirstCat(){
  cats.shift()
}

function appendCat(name){
  return [...cats,name]
}
// append means adding to the end and prepend means to add at the beginning.


function prependCat(name){
  return [name,...cats]
}


function removeLastCat(){
  return cats.slice(0,-1);
  
}

function removeFirstCat(){
  return cats.slice(1)
}