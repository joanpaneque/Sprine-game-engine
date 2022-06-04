export function chunkArray(array, size) {
    const chunked_arr = [];
    for (let i = 0; i < array.length; i++) {
      const last = chunked_arr[chunked_arr.length - 1];
      if (!last || last.length === size) {
        chunked_arr.push([array[i]]);
      } else {
        last.push(array[i]);
      }
    }
    return chunked_arr;
}

export function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

export function isArrayInArray(array, item){
    for (let i = 0; i < array.length; i++) {
        if (arraysEqual(array[i], item)) {
            return true
        }
    }
    return false
}

export function isSubArray(A, B)
{
    // Two pointers to traverse the arrays
    let n = A.length
    let m = B.length
    var i = 0, j = 0;
 
    // Traverse both arrays simultaneously
    while (i < n && j < m) {
 
        // If element matches
        // increment both pointers
        if (A[i] == B[j]) {
 
            i++;
            j++;
 
            // If array B is completely
            // traversed
            if (j == m)
                return true;
        }
        // If not,
        // increment i and reset j
        else {
            i = i - j + 1;
            j = 0;
        }
    }
 
    return false;
}