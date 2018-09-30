			var scrolltop = new Array();  
	        var i = 0;  
	        var t = 0;
	        scrolltop[0] = 0;  
	        $(document).scroll(function(){  
	            i++;  
	            scrolltop[i] = $(document).scrollTop();  
	            if(scrolltop[i]>80){
	            if (scrolltop[i] > scrolltop[i-1]) {  
	            	  $('#header').slideUp ("normal");
	               // $("#header").css('position','');
	              
	            }else{  
	                $("#header").css('position','fixed');
	                $('#header').slideDown("normal");
	            }  
	            }
	            
	          /*  if(scrolltop[i]>800){
	            	$(".pic").addClass("fadeInDown animated");
	            }
	            if(scrolltop[i]>1400||scrolltop[i]<200){
	            	$(".pic").removeClass("fadeInDown animated");
	            }
	            
	            */
	           if(scrolltop[i]>300&&scrolltop[i]<400){
	           		$(".cell").addClass("swing animated");
	           }
	           if(scrolltop[i]<100||scrolltop[i]>600){
	           		$(".cell").removeClass("swing animated");
	           }
	           
	          
	           
	           if(scrolltop[i]>1500){
	           		$(".section4 .bottom").css("visibility","visible");
	           		$(".section4 .bottom .left").addClass("fadeInLeft animated");
	           		$(".section4 .bottom .right").addClass("fadeInRight animated");
	           }
	           
	           
	           if(scrolltop[i]>1200&&scrolltop[i]<1300){
	           		t++;
	           		if(t==1){
	           			$(function(){
	           			$("#coco").css("visibility","visible");
        					$("#typed").typed({
            				stringsElement: $('#typed-strings'),
            				typeSpeed: 30
       					 });
    					});
	           		}
	           		
    					
	           }
	           
	           
	         
	           
	         /*  if(scrolltop[i]>250&&scrolltop[i]<350){
	           		$(".news .pic").css("visibility","visible");
	           		$(".news .pic:nth-of-type(6n+4)").addClass("bounceInRight animated");
	           		$(".news .pic:nth-of-type(6n+5)").addClass("bounceInRight animated");
	           		$(".news .pic:nth-of-type(6n+6)").addClass("bounceInRight animated");
	           		$(".news .pic:nth-of-type(6n+1)").addClass("bounceInLeft animated");
	           		$(".news .pic:nth-of-type(6n+2)").addClass("bounceInLeft animated");
	           		$(".news .pic:nth-of-type(6n+3)").addClass("bounceInLeft animated");
	           }
	           
	          
	          /* if(scrolltop[i]<300||scrolltop[i]>800){
	           		$(".news-top .pic").removeClass("bounceInRight animated");
	           		$(".news-bottom .pic").removeClass("bounceInLeft animated");
	           }*/
	          
	           if(scrolltop[i]>250&&scrolltop[i]<400){
	           		$("#cell-1").css("visibility","visible");
	           		$("#cell-1").addClass("fadeIn animated");
	           		setTimeout(function(){
	           				$("#cell-2").css("visibility","visible");
    						$("#cell-2").addClass("fadeIn animated");
					}, 400);
					setTimeout(function(){
							$("#cell-3").css("visibility","visible");
    						$("#cell-3").addClass("fadeIn animated");
					}, 800);
					setTimeout(function(){
							$("#cell-4").css("visibility","visible");
    						$("#cell-4").addClass("fadeIn animated");
					}, 1200);
	           }
	           
	            
	          
	        })  