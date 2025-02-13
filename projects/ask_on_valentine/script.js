
var counter = 0;
function init_template() {

    console.log('hello');

    $(window).resize(function() {
        imply_background();
    });

    $("#img_wrapper").on('click', 'img', function() {
        if ($(this).closest('#img_wrapper').hasClass('rotate_move_left')) {
            $(this).closest('#img_wrapper').removeClass('rotate_move_left').addClass('rotate_move_right');
        }
        else {
            $(this).closest('#img_wrapper').addClass('rotate_move_left').removeClass('rotate_move_right');
        }
    });

    $("#open_box").on('click', function() {
        $("#fireworks_container").removeClass('hidden');
        $("#fireworks_container img:nth-child(1)").addClass('animate_delay_0');
        $("#fireworks_container img:nth-child(2)").addClass('animate_delay_3');
        $("#valentine_img").addClass('hidden');
        $('.img_abs').addClass('start_animation');
        $("#valentine_text").removeClass('hidden').html("Your Chosen Valentine is Prem Basantani who is standing beside you.");
    });

    $("#inner_box").on('click', 'button.no_btn', function(event) {
        counter++;
        $("#how_dare_text").addClass('alert').html('how dare you even click it debaaaaaaaaaaaaa?');

        if (counter == 2) {
            $("#how_dare_text").html('Are you serious?');
        }
        else if (counter == 3) {
            $("#how_dare_text").html('nooooooooooo?');
            counter = 0;
        }

        // $(this).removeClass(['move_60', 'move_30']);

        if ($(this).hasClass('move_30')) {
            $(this).removeClass(['move_60', 'move_30']).addClass('move_60');
        }
        else if ($(this).hasClass('move_60')) {
            $(this).removeClass(['move_60', 'move_30']);
        }
        else {
            $(this).removeClass(['move_60', 'move_30']).addClass('move_30');
        }
        event.preventDefault();
    });

    $("#inner_box").on('click', 'button.yes_btn', function() {
        $("#how_dare_text").removeClass(['alert']).html('Good Choice debaaaaaaaaaa. I love you');
    });

    imply_background();

}

function imply_background() {
    $("#body_wrapper").css('height', visualViewport.height + 'px');
}