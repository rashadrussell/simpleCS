var LinkedList = function(val, next) {
	
	this.value = val;
	this.next = !next ? null : next;
}

LinkedList.prototype.length = function(){
	if(this.next === null) return 1;
	return this.next.length() + 1;
}

LinkedList.prototype.add = function( value ) {
	if(this.next === null) {
		this.next = new LinkedList(value);
		return;
	}
	this.next.add(value);
}

LinkedList.prototype.exist = function ( value ) {
	if(this.value === value) return true;
	if(this.next === null && this.value !== value) return false;
	return this.next.exist(value);
}

LinkedList.prototype.sum = function (count) {
	if(this.next === null) return this.value;
	count = this.value + this.next.sum();
	return count;
}

LinkedList.prototype.findLast = function () {
	if(this.next === null) return this.value;
	return this.next.findLast();
}


