/*
	Use the Binary Search algorithm to find the index of a value. If value is not in arrya, return -1;
	Binary Search operates best on a sorted array. 
	 Best Case: O(1)
	Worst Case: O(logn)
*/
function binarysearch(arr, key, lo, hi) {

	return search(arr, key, 0, arr.length - 1);

}

function search(arr, key, lo, hi) {

	if(lo > hi) return -1;

	var mid = Math.floor((lo+hi) / 2);

	if(arr[mid] === key) return mid;

	if(arr[mid] > key) {
		return search(arr, key, lo, mid - 1);
	} else {
		return search(arr, key, mid + 1, hi);
	}


}