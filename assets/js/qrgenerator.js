function generateQr(divElement, outputURL, size = 512) {
	// divElement: div we are filling with a qr
	// outputURL: what we are writing to the qr
	// size: size in pixels of qr (size*size square)
	var qrcode = new QRCode(divElement, {
	    text: outputURL,
	    width: size,
	    height: size,
	    colorDark : "#000000",
	    colorLight : "#ffffff",
	    correctLevel : QRCode.CorrectLevel.H
	});

	return qrcode;
}

// example usage: generateQr($("#qrcode")[0], "hi");