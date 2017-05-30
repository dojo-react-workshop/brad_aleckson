'use strict';

$('document').ready(() => {
    // console.log('at top of main.js');
    $('input[type=text]').focus();

    $('.clear').click((e) => {
        $.get('/clear', () => {
            getNames();
        })
    });

    $('input[type=text]').keyup((e) => {
        if (e.keyCode === 13)
            addName();
    });

    $('button').click((e) => {
        // console.log(`$('name').val() : ${$('#name').val()}`)
        addName();
    });

    $('img').click((e) => {
        console.log('delete clicked');
        // console.log(e.currentTarget('data'));
    });

    function deleteName(e) {
        console.log(`yadda`)
        console.log(e.currentTarget.getAttribute('data'));
        $.post('/remove', { i: e.currentTarget.getAttribute('data')}, () => {
            getNames();
        })
    }

    function addName() {
        console.log(`name : ${$('#name').val()}`)
        $.post('/name', { name: $('#name').val() }, () => {
            $('#name').val("");
            getNames();
        })
    }

    function getNames() {
        // console.log(`$('name').val() : ${$('#name').val()}`)
        $.get('/names', (data) => {
            // console.log(`data: `)
            // console.log(data)
            var names = JSON.parse(data);            
            $('.list').html('');
            names.forEach((item, i) => {
                $('.list').append(`<div>${(i + 1 > 9 ? i + 1 : ("&nbsp;" + (i + 1)))}.) ${names[i]}<img src="./images/trash.png" data="${i}"></div>`);

                // $('#myUL').on('click','li', () => {
                //     console.log('you clicked me');
                // });
                $('.list div').on('click', 'img', (e) => {
                    console.log('I am here');
                    deleteName(e);
                });
            });            
        });
    }

    getNames();
});