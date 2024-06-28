const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name){
    return cats.push(name)

}
destructivelyAppendCat('Ralph');
console.log(cats);

function destructivelyPrependCat(name){
    return cats.unshift(name)
}
destructivelyPrependCat('Bob');
console.log(cats);

function destructivelyRemoveLastCat(){
    return cats.pop()
}
destructivelyRemoveLastCat();
console.log(cats);

function destructivelyRemoveFirstCat(){
    return cats.shift()
}
destructivelyRemoveFirstCat();
console.log(cats);

function appendCat(name){
    return [...cats, name]
    
}
appendCat('Broom');

function prependCat(name){
    return [name, ...cats]
}
prependCat('Arnold');

function removeLastCat(){
    return cats.slice(0, 2)
}
removeLastCat();

function removeFirstCat(){
    return cats.slice(-2)
}
removeFirstCat();