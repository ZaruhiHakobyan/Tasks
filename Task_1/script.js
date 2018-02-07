$(document).ready(function(){
	$(".slider")
	.slider({
		range: 'max',
	    min: 0,
	    max: 100,
		value: 50,
	    step: 1
	})
	.slider("pips", {
	    step: 5
	})
	.slider("float");

	$('#set_minmax').on('click', function(){
		let minimum = parseInt($('#min_inp').val());
		let maximum = parseInt($('#max_inp').val());
		if(maximum <= minimum || isNaN(minimum) || isNaN(maximum)){
			alert('Set integer values. Maximum value must be greater than the minimum value!')
			$('#min_inp').val('');
			$('#max_inp').val('')
		}else{
			let value = parseInt(minimum + (maximum - minimum)/2);
			$('.slider').slider({range: 'max', min: minimum, max: maximum, value: value });
			$('.slider .ui-slider-pip-first .ui-slider-label').data('value', minimum);
			$('.slider .ui-slider-pip-first .ui-slider-label').text(minimum);
			$('.slider .ui-slider-pip-last .ui-slider-label').data('value', maximum);
			$('.slider .ui-slider-pip-last .ui-slider-label').text(maximum);
		}
	})
})
