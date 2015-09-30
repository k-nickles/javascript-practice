


/*Implementing Queue*/

function Node(value){
	this.val = value;
	this.next = null; 
}


function Queue(){
	this.first = null;
	this.size = 0; 

	this.enqueue = function(value){
		var node = new Node(value, this.next);

		if(this.first == null){
			this.first = node; 
		}else{

			n = this.first;
			while(n.next){
				n = n.next; 
			}
			n.next = node; 
		}
		this.size++;  
	}

	this.dequeue = function(){
		var tmp = this.first; 
		this.first = this.first.next; 
		this.size--; 
		return popVal;
	}
}
