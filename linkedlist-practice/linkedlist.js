
/* -- Working with LinkedLists -- */ 

var Link = function(data){
	this.data = data; 
	this.next = null; 
}

var List = function(){
	this.head = null; 
	this.tail = null; 
}

List.prototype.add = function(node){
	//check if this is an empty list: 

	if(this.head == null){
		this.head = node; 
	}else{
		this.tail.next = node; 
	}

	this.tail = node; //set the end to be the new node

}

//this is a funciton that takes in a list
//and returns the reverse of that list

var reverseList = function(list){
	var node = list; 
	var reverse = null; 

	while(list){
		//hold onto the rest of the list!!
		var temp = node.next; 

		node.next = reverse; 
		reverse = node; 
		node = temp; //get the rest of the list
	}

	return reverse; 
}
