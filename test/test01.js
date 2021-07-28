function geekshubs(index) {
    var finalText = "";
    for (var i = 1; i <= index; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            if (i % 3 == 0) {
                finalText += "Geeks"
            }
            if (i % 5 == 0) {
                finalText += "Hubs"
            }
        } else {
            finalText += i;
        }
        finalText += "\n";

    }


    return finalText;
}
module.exports = geekshubs;