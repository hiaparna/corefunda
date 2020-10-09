//restSpread
let arr1 = ['rose', 3, 'lily'];
let arr2 = ['John Doe', 23, arr1];

listDetails([...arr1, ...arr2]);

function listDetails(allInfo) {
  console.log (allInfo);
  allInfo.forEach((each, itr) => {
       console.log(each);
       if (Array.isArray(each)) {
         each.forEach( (ec, itr) => {
           console.log(ec);
         })
       }
  })
}
