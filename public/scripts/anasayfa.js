$(document).ready( function(){
    fetch("/api/toDoList").then(response => response.json())
    .then(data => {
        yerlerEkle([{"isim":"yusra"},{"isim":"diyar"}])
    })    

    document.getElementById("inputDiv").addEventListener("keypress" , (e)=>{ 
        if(e.keyCode === 13){
            // alert("haha");
            yeniSehirEkle();
        }
    });
    
    $('.todoList').on('click','.fa',function(){
        var tiklanan = $(this).parent().parent();
        var silinenURL = '/api/toDoList/' + tiklanan.data('id');
        // console.log(tiklanan);
        // console.log(tiklanan.data('id'));
        $.ajax({
            method:'DELETE',
            url: silinenURL
        })
        .then((silinenData)=>{
            console.log(silinenData);
            tiklanan.remove();
        })
    });

    $('.todoList').on('click','li',function(){
        //alert("test");
        // console.log($(this).data('ziyaretDurumu'));
        ziyaretDurumuGuncelle($(this));
        
    });
});

function yerlerEkle(yerler){
    console.log(yerler);
    yerler.forEach(function(yer){
      yerEkle(yer);
    });
}

function yerEkle(yer){
    var yeniYer =  $('<li class="yerlerimiz">'+yer.isim+ ' <span> <i class="fa fa-trash-o" aria-hidden="true"></i> </span> </li>');
    
    //silinmesi icin gereken gizli bir id.
    yeniYer.data('id', yer._id);
    // console.log(yer._id);

    //ziyaret edilme durumunu kontrol etmek icin olusturdugumuz data
    yeniYer.data('ziyaretDurumu', yer.ziyaret);
   

    if(yer.ziyaret == true){
        $(yeniYer).addClass("ziyaretEdilmis");
    }
    $('.todoList').append(yeniYer);
}

function yeniSehirEkle(){
    var yeniSehir = $('#inputDiv').val();
    // console.log(yeniSehir);
    $.post('/api', {toDo : yeniSehir})
    .then((yeniEklenenSehir)=>{
        yerEkle(yeniEklenenSehir);
        $('#inputDiv').val('');
    })
}

function ziyaretDurumuGuncelle(yer){
    var guncellemeURL = '/api/toDoList/' + yer.data('id');
    var ziyaretDurumu = yer.data('ziyaretDurumu');
    // console.log(ziyaretDurumu);
    var guncelle = {ziyaret: !ziyaretDurumu}
    console.log(guncelle); 
    $.ajax({    
        method: 'PUT',
        url : guncellemeURL,
        data : guncelle
    })
    .then((guncellenmisYer)=>{
        console.log(guncellenmisYer)
        yer.toggleClass("ziyaretEdilmis");
    });
}


