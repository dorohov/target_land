function openModalLand(modalID) {
    $(modalID).modal({
        fadeDuration: 100,
        showClose: false,
    })
}

(function($) {
    "use strict"
    $(function() {

        $.modal.fadeDuration = 100
        $.modal.showClose = false

        $('a.modal-open').on('click', function(e) {
            e.preventDefault()
            var thisModalId = $(this).attr('href')
            openModalLand(thisModalId)
            return false;
        })

        $('.yd-modal').on('click', function(e) {
            e.preventDefault()
            openModalLand('#modal_form')
        })

    })
})(jQuery);