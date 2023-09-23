/**
 You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

**/

/**
 P.R.E.P Parameter, return, example, pseudo code

 Parameter - 2 arrays will be given, they will contain only numbers, 

 Return - return a console log

 Example - * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
**/



function mergeArrays(arr1, arr2) {
  //Pseudo code - combine the two arrays
    let arr3 = arr1.concat(arr2)
    //add to anki - how do you combine 2 arrays? using the concat (property)
      //sort the arrays
    let sorted = arr3.sort(function(a, b) {
        return a - b
    })
    //eliminate all duplicates
    let uniqueNumbers = sorted.filter((c, index) => {
        return sorted.indexOf(c) === index;
    })
    return uniqueNumbers

}

console.log(mergeArrays([1,3,5], [1,7,9,4]))