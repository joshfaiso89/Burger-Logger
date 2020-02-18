$(function() {
    $(".change-newBurger").on('click', function(event) {
        let id = $this.data('id');
        let addBurger = $(this).data('addBurger');

        let addedNewBurger = {
           added: addBurger
        };

        //Send the PUT request
        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: addedNewBurger
        }).then(function() {
            console.log('changed burger to', addBurger);
            //Reload the pager w/ updated elements
            location.reload();
        });
    });
});

$('#addBurger').on('click', function(event) {
    event.preventDefault();

    let newBurger = {
        burger_name: $('#burgerName').val().trim()
    };
//alert('testing')
    //Send POST request
    $.ajax('/api/burgers', {
        type: "POST",
        data: newBurger
    }).then(function() {
        console.log('created new burger');
        location.reload();
    })
})

$('#devouredBtn').on('click', function(event) {
    event.preventDefault();

    let newBurger = {
        devoured: true 
    }
let id = $(this).attr('data-id')
    $.ajax('/api/burgers/' + id, {
        type: "PUT",
        data: newBurger
    }).then(function(data){
        location.reload();
    })
})

$('.deleteBurger').on('click', function(event) {
    event.preventDefault();
    console.log('deleteHit')
    let newBurger = {
        devoured: 1
    }
    let id = $(this).attr('data-id')
    console.log(id);
    $.ajax('/api/burgers/' + id, {
        type: "DELETE",
        data: newBurger
    }).then((data) => {
        console.log(data);
        location.reload();
    })
})