boxCount = 0;

$(document).ready(function() {
    $("#addBox").on('click', function() {
        boxCount++;

        var box = $('<div />', {class:'box'});
        var header = $('<div class="header">Box #' + boxCount + '</div>');
        var buttons = $('<span class="buttons"></span>');
        var deleteButton = $('<i class="far fa-trash-alt"></i>');
        var body = $('<div />', {class: 'body'});
        var doSomethingButton = $('<button>Do Something!</button>');

        buttons.append(deleteButton);
        header.append(buttons);
        body.append(doSomethingButton);
        box.append(header);
        box.append(body);

        $('#container').append(box);

        buttons.on('click', '.fa-trash-alt', deleteBox);
        doSomethingButton.on('click', doSomething);
    });
});

function deleteBox() {
    $(this).closest(".box").remove();
}

function doSomething() {
    alert('Do something button was clicked!');
}