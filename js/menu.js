'use strict';

(function(){

    var show = document.getElementById('show');
    var hide = document.getElementById('hide');
    var main = document.getElementById('main');

    show.addEventListener('click', function(){
        document.body.className = 'menu-open';
    });

    hide.addEventListener('click',function(){
        document.body.className = '';
    })
})();