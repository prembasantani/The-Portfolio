
var counter = 0;
function init_template() {

    console.log('hello');

    $(window).resize(function() {
        imply_background();
    });

    $("#inner_box").on('click', 'button.no_btn', function(event) {
        counter++;
        $("#how_dare_text").html('how dare you even click it debaaaaaaaaaaaaa?');

        console.log(counter);
        if (counter == 2) {
            $("#how_dare_text").html('how dare you even click it debaaaaaaaaaaaaa? Are you serious?');
        }
        else if (counter > 2) {
            $("#how_dare_text").html('how dare you even click it debaaaaaaaaaaaaa? nooooooooooo?');
        }

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
        // window.alert("How dare you?");
    });

    $("#inner_box").on('click', 'button.yes_btn', function() {
        $("#how_dare_text").removeClass().html('Good Choice debaaaaaaaaaa. I love you. Letsss goooo');
    });

    imply_background();

}

function imply_background() {
    $("#body_wrapper").css('height', visualViewport.height + 'px');
}