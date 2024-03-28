
  const LENGTH = 17;

  let ResultArray = new Array(LENGTH); 

  function generateSparseArray(length, gapSize = 1) {
        const arr = new Array(length);
        for (let i = 0; i < length; i += gapSize ) {
          arr[i] = Math.floor(Math.random() * 178);
        }
        return arr;
  }

  function generateArray(length) {
        const arr = new Array(length);
        for (let i = 0; i < length; i++ ) {
          arr[i] = Math.floor(Math.random() * 178);
        }
        return arr;
  }

// function moveUndefinedToEnd(arr) {
//   const result = [];
//   const undefinedValues = [];

//   for (const item of arr) {
//     if (typeof item === 'undefined') {
//       undefinedValues.push(item);
//     } else {
//       result.push(item);
//     }
//   }

//   return result.concat(undefinedValues);
// }
function moveUndefinedToEnd(arr) {
  const result = [];
  const undefinedValues = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'undefined') {
      undefinedValues.push(arr[i]);
    } else {
      result.push(arr[i]);
    }
  }

  return result.concat(undefinedValues);
}
// function moveUndefinedToEnd(arr) {
//   let undefinedCount = 0;

//   // Лічильник кількості undefined елементів та видалення їх з масиву
//   for (let i = 0; i < arr.length; i++) {
//       if (typeof arr[i] === 'undefined') {
//           undefinedCount++;
//           arr.splice(i, 1);
//           i--; // Зменшуємо індекс, оскільки видалили елемент
//       }
//   }

//   // Додаємо всі undefined елементи в кінець масиву
//   for (let i = 0; i < undefinedCount; i++) {
//       arr.push(undefined);
//   }

//   return arr;
// }
    // const array = generateSparseArray(LENGTH, 2);
    //   console.log( "sparse array:");
    //   console.log( array);
      // const unsortedArray = moveUndefinedToEnd(array.slice());
      // console.log(unsortedArray);
      // console.log("type:", typeof unsortedArray[5]);
      const sortButton = document.getElementById("sort-button");
      const resultDiv = document.getElementById("result");
      let array = new Array(LENGTH); 
      sortButton.addEventListener("click", () => {

        if(document.getElementById("sparseArr").checked){
           array = generateSparseArray(LENGTH, 3);
          console.log( "sparse array:");
          console.log(array);
         // document.getElementById("result").innerHTML = 'RESULT : '+  generateSparseArray(17, 3);
       
       }
       if(document.getElementById("array").checked){
     
         // document.getElementById("result").innerHTML =  'RESULT : '+ generateArray(17) ;
          array = generateArray(LENGTH);
        console.log( "sparse array:");
         console.log(array);
       }

          const unsortedArray = moveUndefinedToEnd(array.slice());

       if(document.getElementById("asc").checked){
        console.log("Exchange Sort (Ascending):", SortArray.exchangeSort(unsortedArray.slice()));
        console.log("Min Element Sort (Ascending):", SortArray.minElementSort(unsortedArray.slice()));
        console.log("Insertion Sort (Ascending):", SortArray.insertionSort(unsortedArray.slice()));
        console.log("Shell Sort (Ascending):", SortArray.shellSort(unsortedArray.slice()));
        console.log("Quick Sort (Ascending):", moveUndefinedToEnd(SortArray.quickSort(unsortedArray.slice())));


         document.getElementById("result").innerHTML = 'RESULT : '+ SortArray.exchangeSort(unsortedArray.slice());
          
          }
          if(document.getElementById("desc").checked){
        
            console.log("Exchange Sort (desc):", SortArray.exchangeSort(unsortedArray.slice(), 'desc'));
            console.log("Min Element Sort (desc):", SortArray.minElementSort(unsortedArray.slice(), 'desc'));
            console.log("Insertion Sort (desc):", SortArray.insertionSort(unsortedArray.slice(), 'desc'));
            console.log("Shell Sort (desc):", SortArray.shellSort(unsortedArray.slice(), 'desc'));
            console.log("Quick Sort (desc):",moveUndefinedToEnd(SortArray.quickSort(unsortedArray.slice(), 'desc')));
          }

      });

     


// (function (window) {
//   const sortButton = document.getElementById("sort-button");
//   const resultDiv = document.getElementById("result");


//   const LENGTH = 17;
//   const array = new Array(LENGTH);
//   let ResultArray = new Array(LENGTH); 

//  

  
//   sortButton.addEventListener("click", () => {
//       const sortingFunctions = [
//           SortArray.exchangeSort,
//           SortArray.minElementSort,
//           SortArray.insertionSort,
//           SortArray.shellSort,
//           SortArray.quickSort,
//       ];

//       sortingFunctions.forEach((sortingFunction, index) => {
//         if(document.getElementById("asc").checked){
//           ResultArray = sortingFunction(array.slice(), "asc");
//           //resultDiv.innerHTML += `<p (Ascending): ${sortedArray}</p>`;
            
//             }
//             if(document.getElementById("desc").checked){
          
//               ResultArray = sortingFunction(array.slice(), "desc");
              
//             }
         

        
//       });
//       resultDiv.innerHTML +=`  ${ResultArray} `;
//   });
// })(window);