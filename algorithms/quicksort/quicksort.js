/*
 Best Case: O(n*logn)
Worst Case: O(n^2)
*/

function quicksort(arr, lo, hi) {

    var index;

    if (arr.length > 1) {

        lo = !lo ? 0 : lo;
        hi = !hi ? arr.length - 1 : hi;

        index = partition(arr, lo, hi);

        if (lo < index - 1) {
            quicksort(arr, lo, index - 1);
        }

        if (index < hi) {
            quicksort(arr, index, hi);
        }

    }

    return arr;

}

function partition(arr, lo, hi) {

    var pivot   = arr[Math.floor((lo + hi) / 2)],
        leftPointer  = lo,
        rightPointer = hi;


    while (leftPointer <= rightPointer) {

        while (arr[leftPointer] < pivot) {
            leftPointer++;
        }

        while (arr[rightPointer] > pivot) {
            rightPointer--;
        }

        if (leftPointer <= rightPointer) {
            swap(arr, leftPointer, rightPointer);
            leftPointer++;
            rightPointer--;
        }
        
    }

    return leftPointer;

}

function swap(arr, lo, hi){

    var temp = arr[lo];
    arr[lo]  = arr[hi];
    arr[hi]  = temp;

}