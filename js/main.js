$(function(){

	$('.gold').on('focusout', function(){

		$(".gold").not($(this)).val('');

		var mainvalue = $(this).val().replace(",", ".");
		console.log('valor adicionado ' + mainvalue);

		var itemSilk = $(this).parents('.mb-2').find('.silk').val();
		console.log('valor silk ' + itemSilk);
		var mPorSilk = mainvalue / itemSilk;

		$('b').html(mPorSilk.toFixed(2));

		fillGoldSpots(mPorSilk);		
	});

	function fillGoldSpots(mPorSilk) {

		$( ".gold" ).each(function( i ) {
			if( !$(this).val() ) {			
				var itemSilkLinha = $(this).parents('.mb-2').find('.silk').val();
				total = mPorSilk * itemSilkLinha;
				$(this).val(total.toFixed(2));
			}
		});
	}
});
