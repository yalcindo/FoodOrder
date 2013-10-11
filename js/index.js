
//name=string
//Calories =Number
//glutenFree,citrusFree Boolean
var FoodItem = function(name,calories,vegan,glutenFree,citrusFree){
	this.name=name;
	this.calories=calories;
	this.vegan=vegan;
	this.glutenFree=glutenFree;
	this.citrusFree=citrusFree;
 
};
    // Instantiating each food item
	var chicken = new FoodItem("Chicken",100,false,false,false);
	var bean = new FoodItem("Bean",940,true,false,true);
	var egg = new FoodItem("Egg",160,true,true,false);
	var cilantro= new FoodItem("Cilantro",5,true,true,true);
	var guacamole= new FoodItem("Guacamole",5,true,true,true);
	var lettuce= new FoodItem("Lettuce",5,true,true,true);
	var tequila= new FoodItem("Tequila",65,true,true,true);
	var lemon= new FoodItem("LeMon",5,true,true,true);

FoodItem.prototype.toString = function(){return this.name.toString()};
//creates Drink constructor
// name=string,description=string,Items=AnArray that takes FoodItem Object
var Drink = function(name,description,items,price){
	this.name=name;
	this.description=description;
	this.items=items;
	this.price=price;
};
   //creating toString method for Drink object
// Drink.prototype.toString = function(){return "\n" +"name: "+ this.name+"\n" 
// 	+ "Description: "+this.description+"\n"+"Items: "+this.items+"\n"+Plate.prototype.isVegan.call(this)+"\n"};

//creates Plate constructor
//name=string,description=string,price=mnumber,items=FoodItem objects
var Plate = function(name,description,price,items){
	this.name=name;
	this.description=description;
	this.price=price;
	this.items=items;
};

// it checks each FoodItem if is vegan or not
Plate.prototype.isVegan = function() { 
	for(i=0;i<this.items.length;i++){
		if(this.items[i].vegan===false) 
		{
			return false;
		}

	}
return true;
};

// it checks each FoodItem if is GlutenFree or not
Plate.prototype.isGlutenFree = function() { 
	for(i=0;i<this.items.length;i++){
		if(this.items[i].glutenFree===false) 
		{
			return false;
		}

	}
return true;
};

Plate.prototype.isCitrusFree = function() { 
	for(i=0;i<this.items.length;i++)
	{
		if(this.items[i].citrusFree===false) 
		{
			return false;
		}

	}
return true;

};

Plate.prototype.toString = function(){return  this.name +"\n"+"Ingredents:"+this.items.join(" ,")+"\n"+ "Description: "+
	this.description+"\n"+"Vegan:"+this.isVegan()+"\n"+"CitrusFree:"+this.isCitrusFree()+"\n"+
	"isGlutenFree:"+this.isGlutenFree()+"\n"+"Price :"+this.price};

Drink.prototype.toString = function(){return this.name+"\n" 
	+ "Description: "+this.description+"\n" +"Ingredients: "+this.items+"\n"+"Vegan:"+Plate.prototype.isVegan.call(this)+"\n"+"CitrusFree:"+
	Plate.prototype.isCitrusFree.call(this)+"\n"+"GlutenFree:"+Plate.prototype.isGlutenFree.call(this)+"\n"+"Price:"+this.price+"\n"};


//creates Order constructor
var Order =function(plates)
{
	this.plates=plates;
};

Order.prototype.toString = function(){return "plates: "+ this.plates};

//creates Menu
var Menu =function(plates)
{
	this.plates=plates;
};

 Menu.prototype.toString = function(){return "\n"+ this.plates.join("\n"+"-----------------"+"\n")+ "\n"};

//creates Restaurant 
//name=string,description=string,menu=gets menu object
var Restaurant =function(name,description,menu)
{	
	this.name=name;
	this.description=description;
	this.menu=menu;
};

Restaurant.prototype.toString = function(){return "\n"+"Name of Restaurant: "+this.name+"\n"+"Menu:"+ this.menu + "\n"};

//Costumers dietaryPreferences
var Customer = function(dietaryPreference){
	this.dietaryPreference=dietaryPreference;
};

Customer.prototype.toString = function(){return " dietaryPreference: "+ this.dietaryPreference};

//Instantiate a burrito plate
var Burrito = new Plate("Burrito","A real Tex-mex dish",7.89,[bean,bean,cilantro,guacamole,chicken,lettuce]); 

//Instantiate a Guacamole plate
var Guacamole = new Plate("Guacamole","Made with fresh Avacado",2.5,[lemon,lettuce,egg]); 
//Instantiate a Margarita Dring
var Margarita = new Drink("Margarita","Made with love for lovers","Tequila,and other sweet stuff");
var menu1 = new Menu([Burrito,Guacamole,Margarita]);
 var menuprint=menu1.toString();
console.log(menuprint);


