$(document).ready(function() {
    $('#list').click(function(event){event.preventDefault();$('#doctors .item').addClass('list-group-item');});
    $('#grid').click(function(event){event.preventDefault();$('#doctors .item').removeClass('list-group-item');$('#doctors .item').addClass('grid-group-item');});
});