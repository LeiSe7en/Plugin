(function($){
	$.fn.slideWufeng = function(){
		
		//banner-content是实际承载图片的容器的类名
		//j_banner是实际承载图片的ul的id。

		  var $this = $(this);
		  var $container = $this.children('.j_banner');
		  $container.children('li').eq(0).clone().appendTo($container);
		  var imgCount = $container.children('li').length;
		  var imgWidth = $container.children('li').width();
		  $('.banner').width(imgCount * imgWidth)
		  console.log('imgCount :::' + imgCount);

		 
		  //用于计数：点了几次。
		  var count = 0;
		  //clone第一张图片放到最后，实现无缝

		  $this.children('.btn-l').click(scrollLeft);

		  $this.children('.btn-r').click(scrollRight);



		  function scrollLeft (){
			  	if(count >= imgCount-1){
			  		count = 0;
					$container.css({left:"0px"});
				
			  		}
				$container.stop().animate({
		  		left: "-="+imgWidth},500);
		  		count++;
		  	
		  	
		  }
		 function scrollRight (){
			  	if(count <= 0){
			  		count = imgCount-1;
					$container.css({left:-(imgCount-1)*imgWidth});
			  	}
				$container.stop().animate({
		  		left: "+="+imgWidth},500);
		  		count--;
		  	
		  	
		  }

		  //增加小点点
		  var $this = $this.append('<ul class=\'j-index index-node\'></ul>') ;
		  var $ulIndex = $this.children('.j-index');
		  for(var i=0;i<imgCount-1;i++){
		  		$ulIndex.append('<li></li>');
		  }

		  

	}

})(jQuery)