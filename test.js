
var str = "avcb12 * #_a_a";
var s = str.replace(/\W+|_+/gi,'');
var ss = str.slice(0,2);
//console.log(s);
//console.log(ss);

function chunkArrayInGroups(arr, size) {
  // Break it up.
  var l = arr.length;
  var p = 0;
  var ar = [];
  while (p < l) {
    ar.push(arr.slice(p,size+p));
    p += size;
  }
  return ar;
}

//console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));


function mutation(arr) {
  var sarr = arr[1].split('');
  var i = sarr.length;
  var sum = 0;
  while (i--) { 
    if (arr[0].toLowerCase().indexOf(sarr[i].toLowerCase()) > -1) {
      sum++;
    }
  }
  return sum == sarr.length;
}

//console.log(mutation(["hello", "hey"]));


function destroyer(arr) {
  var args = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return !args.includes(val);
  });
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(function(a, b){return a-b});
  return arr.indexOf(num);
}

console.log(getIndexToIns([40, 60], 50));

function rot13(str) { // LBH QVQ VG!
  return str.replace(/[A-Z]/g, function(L) { return String.fromCharCode((L.charCodeAt(0) % 26) + 65); });
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("LBH QVQ VG!"));
