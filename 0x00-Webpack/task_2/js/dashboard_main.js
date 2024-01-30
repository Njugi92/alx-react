import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';

const updateCounter = _.debounce(function () {
    let count = parseInt($('#count').text()) || 0;
    count++;
    $('#count').text(`${count} clicks on the button`);
}, 1000);

$(document).ready(function () {
    $('body').append('<div id="logo"></div>');
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button id="startBtn">Click here to get started</button>');
    $('body').append('<p id="count"></p>');
    $('body').append('<p>Copyright - Holberton School</p>');

    $('#startBtn').on('click', updateCounter);
});

