$(document).ready(function() {
    
    
    //document.querySelector('header button');
    console.log($('header button'))

    /*
    document.querySelector('header button').addEventListener('click', function (){
        alert('Expandir formulário!')
    })
    */

    $('header button').click(function () {
        $('form').css('display') == 'none' ? $('form').slideDown() : $('form').slideUp()
    })

    $('#botao-cancelar').click(function () {
        $('form').slideUp()
    })
    
    $('form').on('submit', function (e) {
        e.preventDefault();
        const urlImagem = $('#url-imagem').val();
        const novoitem = $('<li style="display: none"></li>')
        $(`<img src="${urlImagem}"/>`).appendTo(novoitem);
        $(`
            <div class="overlay-imagem-link">
                <a href="./images/foto3.jpg" title="Ver imagem original" target="_blank">
                Ver imagem original
            </a>
            </div>
        `).appendTo(novoitem);
        novoitem.appendTo($('ul'));
        $(novoitem).fadeIn(1500);
        $('#url-imagem').val('');
    })
})