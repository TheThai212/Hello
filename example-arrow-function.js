var names = ['thai','the','nguyen'];

names.forEach(  function (name){
  console.log('forEach',name);
});

names.forEach((name)=>  {
  console.log('arrowfunc',name);
});

function add(a,b){
  return a + b;
}
console.log(add(2,2));

//tuong tu

var addExpression = (a,b) => a+b;

console.log(addExpression(2,3));
