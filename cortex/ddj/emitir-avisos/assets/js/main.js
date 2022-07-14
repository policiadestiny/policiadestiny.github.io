$(document).ready(function () {

    $("#formAviso").submit(function (e) {

        e.preventDefault();

        var textoAviso = new nicEditors.findEditor('textoAviso').getContent();
        var textoAvisoLength = textoAviso.length;
        if (textoAvisoLength > 200) {

            $(window).scrollTop(0);

            var setAssinaturaAviso = $("#assinaturaAviso").val();
            $("#setAssinaturaAviso").text(setAssinaturaAviso);
            $("#setAssinaturaAviso2").text(setAssinaturaAviso);

            var setCargoAviso = $("#cargoAviso").val();
            $("#setCargoAviso").text(setCargoAviso);
            $("#setCargoAviso2").text(setCargoAviso);

            var setLogoAviso = $("#logoAviso").val();
            $('.headerAviso').attr('id', setLogoAviso);

            var setTituloAviso = $("#tituloAviso").val().toUpperCase();
            $(".headerAvisoTitle").text(setTituloAviso);

            var setTextoAviso = new nicEditors.findEditor('textoAviso').getContent();
            $(".conteudoAviso").html(setTextoAviso);

            var dateJS = new Date();
            var hora = dateJS.getHours().toString().padStart(2, '0') + ':' + dateJS.getMinutes().toString().padStart(2, '0');
            var meses = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11 ", "12"];
            var data = ((dateJS.getDate() + "/" + meses[(dateJS.getMonth())] + "/" + dateJS.getFullYear()));

            $("#setData").text(data);
            $("#setHora").text(hora);

            html2canvas(document.querySelector("#avisoGerado"), {
                taintTest: true,
                useCORS: true,
                scrollY: 0,
                scrollX: 0,
                onclone: function (doc) {
                    doc.querySelector("#avisoGerado").style.display = 'block';
                },
                onrendered: function (canvas) {
                    $("#imageAvisoGerado").attr('src', canvas.toDataURL());
                    $("#downloadAviso").attr('href', canvas.toDataURL());
                    $("#formAviso").hide();
                    $(".download-edite").show();
                    $("#imageAvisoGerado").show();
                }
            });

        } else {
            alert("Seu aviso deve ter mais que 200 caracteres. no momento está com " + textoAvisoLength + " caracteres.");
        }

    });

    $("#editarAviso").click(function () {
        $(window).scrollTop(0);
        $("#formAviso").show();
        $(".download-edite").hide();
        $("#imageAvisoGerado").hide();
    });

    bkLib.onDomLoaded(function () { nicEditors.allTextAreas() });

    function loading() {
        $(window).scrollTop(0);
        $(".loading").fadeOut("slow");
    }
    setTimeout(loading, 6000);

});