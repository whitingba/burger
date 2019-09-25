//TODO:
//create a function that when you click on the devoured button the burger will move to the devoured column
$(function () {
    //create a function that when you click on the devoured button the burger will move to the devoured column



    // function to add a new burger to the burger column
    $('#newBurger').on('submit', function (event) {
        event.preventDefault();

        var newYumBurger = {
            name: $('#newBurger [name=burger_name]').val().trim()
        };


        $.ajax('/api/burgers', {
            type: 'POST',
            data: newYumBurger
        }).then(
            function () {
                console.log('new burger created');
                location.reload();
            }
        );
    });


});