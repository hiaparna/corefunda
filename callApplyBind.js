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

// let name = {
//   first: 'Aparna',
//   last: 'Joshi'
// }
// function fullName(addr) {
//   console.log(this.first +  '  ' + this.last + '  ' + addr);
// }
// fullName.call({first:'anu', last: 'jos'}, 'US');
// fullName.apply({first:'anu', last: 'jos'}, ['US']);
// let x = fullName.bind(name, 'US');
// x();

//--------------------------------------------------
// var obj = {
//     a : 'object???',
//     foo : () => { console.log(this.a) }
// };
//
// var a = 'global!!!';
//
// obj.foo();

//--------------------------------------------------

let name = {
  first: 'Aparna',
  last: 'Joshi'
}
function fullName(addr) {
  console.log(this.first +  '  ' + this.last + '  ' + addr);
}

Function.prototype.mybind = function(...args) {
  // this
  let obj = this;

  console.log('--0-- ' + typeof(args));
  console.log(JSON.stringify(args));
  console.log(...args);
  return function() {
    let {x, ...all} = args;

    console.log('--1-- ' + args);
    console.log('--2-- ' + x);
    console.log('--3-- ' + all);
    //obj.apply(x, all)
    obj.apply(...args)
  }
}

let xy = fullName.mybind(name);
xy();
