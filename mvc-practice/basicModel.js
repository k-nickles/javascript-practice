/* Practice making Models for MVC Architecture*/

/*This is a base class for a car */
var Car = function(){ 

	this.wheels = 0; 
	this.model = 'null'; 
	this.year = 0; 

	this.init = function(w,m,y){
		this.wheels = w; 
		this.model = m;
		this.year = y;
	}

	this.reset = function(){
		this.wheels = 0;
		this.model = null; 
		this.year = 0;
	}

	this.toString = function(){
		console.log('This vehicle has ' + this.wheels + ' wheels');
		console.log('Is a ' + this.model + ' model');
		console.log('made in ' + this.year);  
	}
}


/* This is a child class for the Car model */
var Sedan = function(){
	this.doors = 4; 

	this.toString = function(){
		console.log('This car has ' + this.doors + ' doors and was made in' + this.year); 
	}
}

Sedan.prototype = new Car(); 
