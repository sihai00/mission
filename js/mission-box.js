$(function(){
	function showTool(ele,mun){
		ele.on('click', function(event) {
			$(".title-top:first-child").hide(0,function(){
				if (mun==2) {
					$(".box-table").addClass('square-check');
				}else{
					$(".box-table").addClass('dot-check');
				}
			});
			$(".title-top:nth-child("+mun+")").show();
		});
	}
	
	function showChoose(ele,mun){
		ele.on('click', function(event) {
			$(this).parents(".title-top").hide();
			$(".title-top:first-child").show(0,function(){
				if (mun==2) {
					$(".box-table").removeClass('square-check');
				}else{
					$(".box-table").removeClass('dot-check');
				}
			});
		});
	}
	
	showTool($(".title-tool li:nth-child(3)"),2);
	showTool($(".title-tool li:nth-child(4)"),3);
	showChoose($(".title-top:nth-child(2) .title-btn button"),2);
	showChoose($(".title-top:nth-child(3) .title-btn button"),3);
	
	$(".myIcon-refresh").on('click',function(event){
		$(".left-category").fadeOut(0).delay(2000).fadeIn(200);
		$(".spinner").fadeIn(0).delay(2000).fadeOut(0);
	});
	
	function showCollectionBox(){
		if ($(".box-left").hasClass('hidden-xs')) {
			$(".box-left").css({"left":"-65%"});
			$(".box-left").animate({"left":"0%"});
			$(".box-left").removeClass('hidden-xs');
			$(".title-tool li:nth-child(3)").off("click");
			$(".title-tool li:nth-child(4)").off("click");
			$(".box-right").off('click');
		}else{
			$(".box-left").animate({"left":"-65%"},function(){
				$(".collection-box").off('click');
				$(".box-left").addClass('hidden-xs');
				$(".box-left").css({"left":"0%"});
				collectionBox();
			});
		}
	}
	function collectionBox(){
		$(".collection-box").one('click', function(event) {		
			showCollectionBox();
			if (!$(".box-left").hasClass('hidden-xs')) {
				$(".box-right").one('click', function(event) {
					showCollectionBox();
					showTool($(".title-tool li:nth-child(3)"),2);
					showTool($(".title-tool li:nth-child(4)"),3);
				});
			};
			return false;
		});
	}
	collectionBox();
})