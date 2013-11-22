$(document).ready( function(){
	
  var numbers={
    total:0
  };


	var Burrito1 = new Plate("Burrito","A real Tex-mex dish Vegan",7.89,[bean,lemon,cilantro,guacamole,lettuce,lettuce]); 
  var Burrito2 = new Plate("Burrito","A real Tex-mex dish with chicken",7.89,[bean,chicken,cilantro,guacamole,lettuce,lettuce]); 
  var Burrito3 = new Plate("Burrito","A real Tex-mex dish with meat",7.89,[bean,meat,cilantro,guacamole,lettuce,lettuce]); 
	var Guacamole = new Plate("Guacamole","Made with fresh Avacado",2.5,[guacamole,lemon,lettuce,egg]); 
	var Margarita = new Plate("Margarita","Made with love for lovers",4.5,[tequila,lemon]);

	var createPlateArray= function(plate)
  {
	 	return plate.toString().split("\n");
  };
    
	Plate.prototype.create = function(appendPlate)
  {
		var added= $('<div class="food-item" data-price='+appendPlate.price+ ' data-vegan='+ appendPlate.isVegan() + ' data-citrus='+ appendPlate.isCitrusFree() + ' data-gluten='+ appendPlate.isGlutenFree()+ '><span class="food-name">{0}</span><br> {1}<br>  {2} <br> <span class="vegan-food">{3}</span><br>  {4}<br>  {5}<br> {6}</div>'.supplant(createPlateArray(appendPlate)));
		return $(".menu").append(added);
	};

    
   $(".menu").on("click",".food-item",function()
    {
      var itemPrice=$(this).data("price");
      numbers.total+=itemPrice;
      $(".total").empty();
      var orderPrice=$('<div class="total"> Total price : '+numbers.total+'</div>');
      var orderItem=$(this).find(".food-name").text();
      var orderItemAppend=$('<div class="order-item"> '+orderItem+" "+itemPrice+'</div>');
      $(".order").append(orderItemAppend);
      $(".order").append(orderPrice);
    });


   var getVeganValue=function(){
        $(".food-item").show();
        $(".food-item").each(function(){
        var value=$(this).data("vegan");
           //console.log("value:"+value);
        value ? true :$(this).hide();
           
        });
    };
    var getCitrusValue=function(){
          $(".food-item").show();

          $(".food-item").each(function(){
            var value=$(this).data("citrus");
            // console.log("value:"+value);
            value ? true :$(this).hide();
           
          });
    };
     var getGlutenValue=function(){
           $(".food-item").show();
           $(".food-item").each(function(){
           var value=$(this).data("gluten");
            console.log("value:"+value);
            value ? true :$(this).hide();
           
          });
     };
     


  $(".costumer-info").on("click",".button-vegan",getVeganValue);
  $(".costumer-info").on("click",".button-citrus",getCitrusValue);
  $(".costumer-info").on("click",".button-gluten",getGlutenValue);







Plate.prototype.create(Burrito1);
Plate.prototype.create(Guacamole);
Plate.prototype.create(Margarita);
Plate.prototype.create(Burrito2);
Plate.prototype.create(Margarita);
Plate.prototype.create(Burrito3);
Plate.prototype.create(Margarita);

});
