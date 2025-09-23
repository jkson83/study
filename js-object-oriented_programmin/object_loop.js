var memberArray = ['egoing', 'graphittie', 'leezche'];
var memberObject = {
  manager:'egoing',
  delveloper : 'graphittie',
  designer:'leezche'
}

console.group('object loop');
for(var name in memberObject){
  console.log(name, memberObject[name]);
}
console.groupEnd('object loop');