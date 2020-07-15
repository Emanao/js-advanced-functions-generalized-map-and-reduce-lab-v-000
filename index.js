function map(ary, cb){
  const new_ary = []
  ary.forEach(elem=>new_ary.push(cb(elem)));
  return new_ary;
}

function reduce(ary, cb, initialValue){
  console.log(arguments[1])
  let accu =!!initialValue?initialValue:ary[0];
  ary.forEach(elem=>cb(accu, elem, initialValue));
  return accu;
}

// function reduceToTotal(ary,initialValue){
//   let accu =!!initialValue?initialValue:0;
//   ary.forEach(elem=>accu+=elem);
//   return accu;
// }
// function reduceToAllTrue(ary){
//   console.log(ary);
//   let accu=true;
//    ary.forEach(elem=> accu= accu&&Boolean(elem));
//   return accu;
// }
// function reduceToAnyTrue(ary){
//   let accu=false;
//    ary.forEach(elem=> accu= accu||Boolean(elem));
//   return accu;
// }
