
// arguments javascript object
// clearTimeout
//

function debounce() {
  //console.log(arg);
  console.log('clicked on it ');
}

function doMagic ( func, timer, item) {
  let x;
  let args = arguments;
  console.log('-----1-----');
  return function(item) {
    let context = this;
    //let args = arguments;
    // console.log(arguments[2]);
    clearTimeout(x);
    x = setTimeout(()=> {
      func.call(this, item);
    }, timer)
  };
}

// const debounce = doMagic(callmessage, 1000, 'red');
