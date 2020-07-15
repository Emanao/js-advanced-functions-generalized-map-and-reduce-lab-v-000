function map(ary, cb){
  const new_ary = []
  ary.forEach(elem => new_ary.push(cb(elem)));
  return new_ary;
}

function reduce(ary, cb, initialValue){
  let accu =!!initialValue?initialValue:ary[0];
  console.log(accu);
  ary.forEach(elem => accu = cb(elem, accu));
  return accu;
}
