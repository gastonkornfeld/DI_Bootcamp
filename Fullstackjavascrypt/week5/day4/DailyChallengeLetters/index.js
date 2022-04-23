function onlyNumberKey(evt) {
          
    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    console.log(ASCIICode);
    if (ASCIICode > 96 && ASCIICode < 123)
        return true;
    else if (ASCIICode > 64 && ASCIICode < 91) {
        return true;
    }
    return false;
}