function takeData (barcode,expire){
    let Barcode = $("#divData").data().barcode
    let Expire = $("#divData").data().expire
    console.log(`${Barcode}will expire on ${Expire}`);
}

takeData("barcode","expire")