function send() {
    var nama = document.getElementById('nama').value;
    var pesan = document.getElementById('pesan').value;
    var salam = "hi%20,%20*PT.%20MARWAH%20BAHRUN*%0A%0ASaya%20" + nama.toUpperCase() + "%20,%20mengkontak%20anda%20untuk%20:%20%0A%0A"
    var enc = encodeURI(pesan);
    window.open("https://api.whatsapp.com/send?phone=6282194981758" + "&text=" + salam + enc)
}