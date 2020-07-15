function map(ary, cb){
  const new_ary = []
  ary.forEach(elem => new_ary.push(cb(elem)));
  return new_ary;
}

function reduce(ary, cb, initialValue){
  const aryCopy = [...ary];
  console.log(aryCopy);
  let accu;
  // =Boolean(initialValue)?initialValue:ary[0];

  if (!!initialValue){
    accu = initialValue;
  }else {
    //accu
  }
  console.log(accu +":"+ initialValue+":"+ary[0]);
  ary.forEach(elem => {
    accu = cb(elem, accu)
    console.log(accu);
  });
  return accu;
}
