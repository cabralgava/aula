function adicionartHttp() {
    return "http://"
}

var site = [
    "cliqueimude.com",
    "rdstation.com", 
    "google.com"
];

function processar(){
    for( var i = 0; i < site.length; i++) {
        console.log(adicionartHttp() + site[i])
    }
}
processar();