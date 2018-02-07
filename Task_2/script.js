function getRandomColor(){
	var randomCode = Math.random().toString(16);
	var colorCode = randomCode.slice(2,8); // or var colorCode = randomCode.substr(2,6);
	return "#" + colorCode;
}

let $list = $('#sortable_list');
$list.sortable();
$list.disableSelection();

function check(){
    if($('.list_item').length < 7 && !($list.hasClass('ui-sortable-disabled'))){
		$list.sortable("disable");
    }else if($('.list_item').length >= 7 && $list.hasClass('ui-sortable-disabled')){
		$list.sortable("enable");
    }
}
check();

$(document).ready(function(){

    function addHooman(){
        let input = $('#add_hooman').val();
        let name = input.trim().charAt(0).toUpperCase() + input.trim().slice(1);
        let bool = false;
        $('.new_hooman').each(function(){
            if($(this).text().toLowerCase() == name.toLowerCase()){
                bool = true;
            }
        })
        if(bool){
            alert("That name already exists!");
            return false;
        }
        if(name.length !== 0){
            let id = $('.list_item').length + 1;
            let new_id = id++;
            let $list_item = $('<li class="list_item ui-state-default" data-id="' + new_id + '"><div class="new_hooman" >' + name + '</div><span data-id="' + new_id + '" class="ui-icon ui-icon-close del_btn"></span><div class="clean"></div></li>');
            let bgColor = getRandomColor;
            $list_item.css('background', bgColor);
            $($list_item).hide().appendTo($list).fadeIn(800);
        }else {
            alert('The name field is empty! Enter a valid name.')
        }
		check();
    }

    $('#add_btn').click(function(){
        addHooman();
    })
    $(document).keypress(function(e) {
        if(e.which == 13) {
            addHooman();
        }
    });
    $(document).on('click', '.del_btn', function(){
        let this_id = $(this).data('id');
        $('.list_item').filter(function(index, item){
            return $(this).data('id') === this_id;
        }).fadeOut(300, function() {
                $(this).remove();
				check();
            });
    });

});
