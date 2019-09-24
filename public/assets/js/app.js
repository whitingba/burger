//TODO:
//create a function that when you click on the devoured button the burger will move to the devoured column



// function to add a new burger to the burger column
$('.add-burger').on('click', function (event) {
    event.preventDefault();

    var newYumBurger = {
        name: $('#newBurger').val().trim()
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