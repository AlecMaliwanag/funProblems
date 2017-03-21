var changeCalculator = function change(total, coinArray) {
  //permutation problem!
  //recursion!
  let solutionCount = 0;

  var recurse = function(amountLeft, index) {
    for (var i = index; i < coinArray.length; i++) {
      if (amountLeft - coinArray[i] < 0) return;
      else if (amountLeft - coinArray[i] === 0) solutionCount++
      else recurse (amountLeft-coinArray[i], i)
    }
  }
  recurse(total,0);
  return solutionCount;

  //iterate over array, starting with first index, every time slice and subtract
}

changeCalculator(4, [1, 2, 3]);