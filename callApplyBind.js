// let name = {
//   first: 'Aparna',
//   last: 'Joshi',
//   fullName: function() {
//     console.log(this.first +  '  ' + this.last);
//   }
// }
//
// name.fullName.call({first:'anu', last: 'jos'});
// name.fullName.apply({first:'anu', last: 'jos'});

//--------------------------------------------------

// let name = {
//   first: 'Aparna',
//   last: 'Joshi'
// }
// function fullName(addr) {
//   console.log(this.first +  '  ' + this.last + '  ' + addr);
// }
// fullName.call({first:'anu', last: 'jos'}, 'US');
// fullName.apply({first:'anu', last: 'jos'}, ['US']);


//--------------------------------------------------

let name = {
  first: 'Aparna',
  last: 'Joshi'
}
function fullName(addr) {
  console.log(this.first +  '  ' + this.last + '  ' + addr);
}
fullName.call({first:'anu', last: 'jos'}, 'US');
fullName.apply({first:'anu', last: 'jos'}, ['US']);
let x = fullName.bind(name, 'US');
x();

//--------------------------------------------------
// var obj = {
//     a : 'object???',
//     foo : () => { console.log(this.a) }
// };
//
// var a = 'global!!!';
//
// obj.foo();
