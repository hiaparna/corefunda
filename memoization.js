function  squareit(n) {
  const pro = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve (n*n);
    },1000)
  })
  return pro;
}

async function getLog() {
    let x = new Date();
    await memoizeIt(squareit, 5).then(resolve => {
      return console.log(resolve);
    });
    console.log(new Date() - x);

    let x1 = new Date();
    await memoizeIt(squareit, 6).then(resolve => {
      return console.log(resolve);
    });
    console.log(new Date() - x1);

    let x2 = new Date();
    await memoizeIt(squareit, 7).then(resolve => {
      return console.log(resolve);
    });
    console.log(new Date() - x2);

    let x3 = new Date();
    await memoizeIt(squareit, 8).then(resolve => {
      return console.log(resolve);
    });
    console.log(new Date() - x3);
}

function memoizeIt(func, key) {
  const x = {}

  if (!x.key) {
    x.key = func (key)
  }
  return x.key;
}

getLog();
