const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//$.getJSON("https://randomuser.me/api/", function (json) {
//    var data = json.results[0];
//    console.log(data);
//    var d = new Date(data.dob.date);
//    var date = monthNames[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
//    $(".profile-picture").attr("src", data.picture.large);
//    $(".field-full-name").html(capitalize(data.name.first) + " " + capitalize(data.name.last));
//    $("#field-sex").html(capitalize(data.gender));
//    $("#field-dob").html(date + " (" + data.dob.age + " years old)");
//    $(".field-phone").html(data.cell);
//    $("#field-email").html(data.email);
//    $("#field-address").html(data.location.street);
//});

$(".content-bottom").on('click', function () {
    $(this).parent().find((".content-hidden")).slideToggle('medium', function () {
        if ($(this).is(':visible'))
            $(this).css('display', 'flex');
    });
    $(this).parent().find((".content-box-arrow")).find("i").toggleClass("fa-chevron-up fa-chevron-down");
})

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.substring(1, str.length);
}

function updateRole() {
    $("#current-role").html(`Signed in as ` + Cookies.get('name') + ` <span id="role-tag">` + Cookies.get('role') + `</span>`);
}

function login() {
    var user = $("#inputEmail").val();
    if (user == "gabriel@upmc.com") {
        Cookies.set("name", "Gabriel Rasskin", { path: '/' });
        Cookies.set("role", "DOCTOR", { path: '/' });
        window.location.replace(window.location + "/../pages/doctor.html");
    } else if (user == "emma@upmc.com") {
        Cookies.set("name", "Emma Wenger", { path: '/' });
        Cookies.set("role", "SURGEON", { path: '/' });
        window.location.replace(window.location + "/../pages/doctor.html");
    } else if (user == "jacob@upmc.com") {
        Cookies.set("name", "Jacob Dill", { path: '/' });
        Cookies.set("role", "NURSE", { path: '/' });
        window.location.replace(window.location + "/../pages/doctor.html");
    } else {
        $("#inputEmail").val("");
        $("#inputPassword").val("");
        $("#incorrectPassword").html("Incorrect email or password. Please try again!");
    }
}

function generateQr(divElement, outputURL, size = 512) {
    // divElement: div we are filling with a qr
    // outputURL: what we are writing to the qr
    // size: size in pixels of qr (size*size square)
    divElement.innerHTML = "";
    var qrcode = new QRCode(divElement, {
        text: outputURL,
        width: size,
        height: size,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
    divElement.childNodes[1].setAttribute("style", "margin: auto")
    return qrcode;
}

// example usage: generateQr($("#qrcode")[0], "hi");

function handoff(ims) {
    generateQr($("#qrcode")[0], ims, 320);
}
