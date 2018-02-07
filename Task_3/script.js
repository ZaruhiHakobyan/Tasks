$(document).ready(function(){
	function imageIsLoaded(e) {
		let $img = $('<img id="myImg" src=""/>');
		$img.attr('src', e.target.result);
		$('.for_img').html('');
		$($img).hide().appendTo('.for_img').fadeIn(500);
		$($img).resizable({
			handles: 'n, e, s, w, ne, se, sw, nw',
			ghost: true
		});
		$($img).css({
			'height' : '100%',
			'width' : '100%'
		})
	};

	$('.upload_div').click(function(e){
		$('.upload_inp').click();
	});
	$('.upload_inp').on('change', function (e) {
		let files = e.target.files;
		console.log(files);
		if (files && files[0]) {
			var reader = new FileReader();
			reader.onload = imageIsLoaded;
			reader.readAsDataURL(files[0]);
		}
	});

})
