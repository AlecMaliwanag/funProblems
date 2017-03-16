const sampleArray = [1, 7, 3, 4];
const getProductsofAllIntsExceptAtIndex = function products(array) {
  //iterate over each, nested for loop
//   let results = [];
//   array.forEach((val, index, arg) => {
//     let sum = 1;
//     for (let i = 0; i < arg.length; i++) {
//       if (i !== index) {
//         sum = sum * arg[i];
//       }
//     }
//     results.push(sum);
//   });
//   return results;
// };
  const productsOfAllIntsBeforeIndex = [];
  let productSofar = 1;
  for (let i = 0; i < array.length; i+=1) {
    productsOfAllIntsBeforeIndex[i] = productSofar;
    productSofar *= array[i];
  }
};

getProductsofAllIntsExceptAtIndex(sampleArray);
