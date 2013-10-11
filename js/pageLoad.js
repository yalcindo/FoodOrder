$(document).ready( function(){
	
   var numbers={
   	total:0
   };


	var Burrito = new Plate("Burrito","A real Tex-mex dish",7.89,[bean,bean,cilantro,guacamole,lettuce,lettuce]); 
	var Guacamole = new Plate("Guacamole","Made with fresh Avacado",2.5,[guacamole,lemon,lettuce,egg]); 
	var Margarita = new Drink("Margarita","Made with love for lovers",[tequila,lemon],4.5);

	 var createPlateArray= function(plate){
	 	return plate.toString().split("\n");
 };
    
	Plate.prototype.create = function(appendPlate){
		
		var added= $('<div class="food-item" data-price='+appendPlate.price+' data-vegan='+appendPlate.isVegan()+'><span class="food-name">{0}</span><br> {1}<br>  {2} <br> <span class="vegan-food">{3}</span><br>  {4}<br>  {5}<br> {6}</div>'.supplant(createPlateArray(appendPlate)));
		 
		return $(".menu").append(added);
	};

    
   $(".menu").on("click",".food-item",function(){
     var itemPrice=$(this).data("price");
      numbers.total+=itemPrice;
      $(".total").empty();
       var orderPrice=$('<div class="total"> Total price : '+numbers.total+'</div>');
       var orderItem=$(this).find(".food-name").text();
       var orderItemAppend=$('<div class="order-item"> '+orderItem+" "+itemPrice+'</div>');
       $(".order").append(orderItemAppend);
       $(".order").append(orderPrice);
   });


   var getButtonValue=function(){
        var value=$(".food-item").data("vegan");
        console.log("value"+value)
        

   };

  $(".costumer-info").on("click","button",getButtonValue);








Plate.prototype.create(Burrito);
Plate.prototype.create(Guacamole);
// Plate.prototype.create(Margarita);
// Plate.prototype.create(Burrito);
// Plate.prototype.create(Margarita);
// Plate.prototype.create(Burrito);
// Plate.prototype.create(Margarita);

});
