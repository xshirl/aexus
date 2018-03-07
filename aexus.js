var slides = document.querySelectorAll("#slides .slide");
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 2000);

function nextSlide() {
	slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

//shopping cart js

// var shoppingCart = [];

// function addToCart(title, price) {
// 	var product = {};
// 	product.title = title;
// 	product.price = price;
// 	shoppingCart.push(product);
// 	displayShoppingCart();
// }

//create array that will hold all ordered products
    var shoppingCart = [];

    //this function manipulates DOM and displays content of our shopping cart
    function displayShoppingCart(){
        var orderedProductsTblBody=document.getElementById("orderedProductsTblBody");
        //ensure we delete all previously added rows from ordered products table
        while(orderedProductsTblBody.rows.length>0) {
            orderedProductsTblBody.deleteRow(0);
        }

        //variable to hold total price of shopping cart
        var cart_total_price=0;
        //iterate over array of objects
        for(var product in shoppingCart){
            //add new row      
            var row=orderedProductsTblBody.insertRow();
            //create three cells for product properties 
            var cellName = row.insertCell(0);
            var cellAmount = row.insertCell(1);
            var cellPrice = row.insertCell(2);
            cellPrice.align="right";
            //fill cells with values from current product object of our array
            cellName.innerHTML = shoppingCart[product].Name;
            cellAmount.innerHTML = shoppingCart[product].Amount;
            cellPrice.innerHTML = shoppingCart[product].Price;
            cart_total_price+=shoppingCart[product].Price;
        }
        //fill total cost of our shopping cart 
        document.getElementById("cart_total").innerHTML=cart_total_price;
    }


    function AddtoCart(name,amount,price){
       //Below we create JavaScript Object that will hold three properties you have mentioned:    Name,Description and Price
       var singleProduct = {};
       //Fill the product object with data
       singleProduct.Name=name;
       singleProduct.Amount=amount;
       singleProduct.Price=price;
       //Add newly created product to our shopping cart 
       shoppingCart.push(singleProduct);
       //call display function to show on screen
       displayShoppingCart();

    }  

// function displayShoppingCart() {
// 	var totalPrice = 0;
// 	var displayTitle = document.getElementById("displayTitle");
// 	var displayPrice = document.getElementById("displayPrice");
// 	var displayTotal = document.getElementById("displayTotal");
// 	// var displayImage = document.getElementById("displayImage");
// 	for (var product in shoppingCart) {
// 		displayTitle.innerHTML = shoppingCart[product].title;
// 		displayPrice.innerHTML = shoppingCart[product].price;
// 		displayTotal.innerHTML = shoppingCart[product].price;
// 		// displayImage.innerHTML = shoppingCart[product].image;
// 	// title.createElement('div');
// 	// div.className = "itemTitle";
// 	// itemTitle = document.querySelectorAll(".itemTitle");
// 	// itemTitle.innerHTML = shoppingCart[product].title;

// 	} 
// }

// $(document).ready(function() {
// 	$("#book1").click(function() {
// 		$("#displayTitle").text("Cracking the Coding Interview");
// 		$("#displayPrice").text()
// 	})
// })
// var book1 = document.getElementById("book1");
// book1.addEventListener("click", addToCart("Cracking the Coding Interview","$29.99"));
// addToCart("Cracking the Coding Interview","$29.99");



// smooth scrolling code from https://css-tricks.com/snippets/jquery/smooth-scrolling/
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


// scroll to top code taken from 
// https://paulund.co.uk/how-to-create-an-animated-scroll-to-top-with-jquery

$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});
