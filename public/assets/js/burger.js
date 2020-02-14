$(function() {
    $(".change-newBurger").on('click', function(event) {
        let id = $this.data('id');
        let addBurger = $(this).data('addBurger');

        let addedNewBurger = {
           added: addBurger
        };

        //Send the PUT request
        $.ajax('/api/burger/' + id, {
            type: 'PUT',
            data: addedNewBurger
        }).then(function() {
            console.log('changed burger to', addBurger);
            //Reload the pager w/ updated elements
            location.reload();
        });
    });
});

$('.create-form').on('submit', function(event) {
    event.preventDefault();

    let newBurger = {
        name: $('#burg').val().trim(),
        added: $('[name=added]:checked'.val().trim())
    };

    //Send POST request
    $.ajax('/api/burgers', {
        type: "POST",
        data: newBurger
    }).then(function() {
        console.log('created new burger');
        location.reload();
    })
})

