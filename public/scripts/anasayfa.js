document.addEventListener("DOMContentLoaded", function () {

    var yerler = 'http://127.0.0.1:3000/api/yerler';

    fetch(yerler)
        .then(yerlerEkle);

    document.getElementById("bizimInput").addEventListener("keypress", (e) => {
        if (e.keyCode === 13) {

            yeniSehirEkle();
        }
    });

    $('.yerler').on('click', '.fa', function () {
        var tiklanan = this.parentNode.parentNode;
        var silinenURL = '/api/yerler/' + tiklanan.data('id');
        // console.log(tiklanan);
        // console.log(tiklanan.data('id'));
        $.ajax({
                method: 'DELETE',
                url: silinenURL
            })
            .then((silinenData) => {
                console.log(silinenData);
                tiklanan.remove();
            })
    });

    $('.yerler').on('click', 'li', function () {

        ziyaretDurumuGuncelle($(this));

    });
});

function yerlerEkle(yerler) {
    yerler.forEach(function (yer) {
        yerEkle(yer);
    });
}

function yerEkle(yer) {
    var yeniYer = $('<li class="yerlerimiz">' + yer.isim + ' <span> <i class="fa fa-trash-o" aria-hidden="true"></i> </span> </li>');

    //silinmesi icin gereken gizli bir id.
    yeniYer.data('id', yer._id);
    // console.log(yer._id);

    //ziyaret edilme durumunu kontrol etmek icin olusturdugumuz data
    yeniYer.data('ziyaretDurumu', yer.ziyaret);


    if (yer.ziyaret == true) {
        $(yeniYer).addClass("ziyaretEdilmis");
    }
    $('.yerler').append(yeniYer);
}

function yeniSehirEkle() {
    var yeniSehir = $('#bizimInput').val();
    // console.log(yeniSehir);
    $.post('/api/yerler', {
            isim: yeniSehir
        })
        .then((yeniEklenenSehir) => {
            yerEkle(yeniEklenenSehir);
            $('#bizimInput').val('');
        })
}

function ziyaretDurumuGuncelle(yer) {
    var guncellemeURL = '/api/yerler/' + yer.data('id');
    var ziyaretDurumu = yer.data('ziyaretDurumu');
    // console.log(ziyaretDurumu);
    var guncelle = {
        ziyaret: !ziyaretDurumu
    }
    console.log(guncelle);
    $.ajax({
            method: 'PUT',
            url: guncellemeURL,
            data: guncelle
        })
        .then((guncellenmisYer) => {
            console.log(guncellenmisYer)
            yer.toggleClass("ziyaretEdilmis");
        });
}