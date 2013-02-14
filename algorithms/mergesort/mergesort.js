/*
 Best Case: O(n*logn)
Worst Case: O(n*logn)
Reference: http://www.nczonline.net/blog/2012/10/02/computer-science-and-javascript-merge-sort/
*/
function mergesort(arr) {

	var size = arr.length;
	if(size < 2) {
		return arr;
	}

	var mid   = Math.floor(size / 2);
	var left  = arr.slice(0, mid);
	var right = arr.slice(mid, size);

	return merge(mergesort(left), mergesort(right));

}

function merge(left, right) {

	var result = [];

	while(left.length && right.length) {
		if(left[0] <= right[0]) {
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}

	while(left.length) {
		result.push(left.shift());
	}

	while(right.length) {
		result.push(right.shift());
	} 

	return result;

}
