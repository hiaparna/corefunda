
// arguments javascript object
// clearTimeout
//

function callmessage(arg) {
  console.log(arg);
  console.log('clicked on it ', arg);
}

function doMagic ( func, timer) {
  let x;
  let args = arguments;
  return function(...args) {
    let context = this;
    //let args = arguments;
    // console.log(arguments[2]);
    clearTimeout(x);
    x = setTimeout(()=> {
      func.call(this, args);
    }, timer)
  };
}

const debounce = doMagic(callmessage, 1000);
