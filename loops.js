function forLoop(ar) {
  for (var x=0; x<25; x++) {
    ar.push(`"I am ${x} strange loop${x === 0 ? '' : 's'}."`);
  }
  return ar;
}

function whileLoop(nu) {
  while (nu > 0) {
    console.log(nu--);
  }
  return 'done';
}
function maybeTrue() {
  return Math.random() >= 0.5
}
function doWhileLoop(ar) {
  do {
    ar.splice(0, 1)
  } while (ar.length > 0 && maybeTrue());
  return ar;
}
