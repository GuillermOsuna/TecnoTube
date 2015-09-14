$(document).ready(main)

var contador=1;

function main(){
	$('.menu_bar').click(function(){
		//$('nav').toggle();
		if(contador == 1){
			$('nav').animate({
				left:'0'
			});
			contador=0;
		} else {
			contador=1;
			$('nav').animate({
				left:'-100%'
			});
		}
	});
	};

		/*function parallax(){
		var prlx_lyr_1.style.top= -document.getElementsByTagName('gallery');
		prlx_lyr_1.style.top= -(window.pageYOffset/4)+ 'px';

	};
	window.addEventListener("scroll", parallax, false;);	
*/














































