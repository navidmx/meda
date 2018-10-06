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
        Cookies.set("name", "Gabriel Rasskin", {
            path: '/'
        });
        Cookies.set("role", "DOCTOR", {
            path: '/'
        });
        window.location.replace(window.location + "/../pages/doctor.html");
    } else if (user == "emma@upmc.com") {
        Cookies.set("name", "Emma Wenger", {
            path: '/'
        });
        Cookies.set("role", "SURGEON", {
            path: '/'
        });
        window.location.replace(window.location + "/../pages/doctor.html");
    } else if (user == "jacob@upmc.com") {
        Cookies.set("name", "Jacob Dill", {
            path: '/'
        });
        Cookies.set("role", "NURSE", {
            path: '/'
        });
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
    generateQr($("#qrcode")[0], window.location + "../pages/patient.html?mrn=" + ims, 320);
}

function showGraph(type, color) {
    console.log(window.personData);
    var vitalData = window.personData.vitals[type];
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "Height",
                borderColor: color,
                data: vitalData,
                fill: false
        }]
        }
    });

}

function fillFields(snap) {

    $('.field-full-name').text(snap.personalInfo.name);
    console.log(snap.personalInfo.DOB);
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date(snap.personalInfo.DOB);
    var date = monthNames[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
    console.log(date);

    //console.log(date)

    $('.profile-picture').attr('src', snap.personalInfo.img);
    $('.field-sex').text(snap.personalInfo.sex);
    $('.field-dob').text(date);
    $('.field-phone').text(snap.personalInfo.phone);
    $('.field-email').text(snap.personalInfo.email);
    $('.field-address').text(snap.personalInfo.address);

    $('.field-plan-name').text(snap.insurance.insuranceName);
    $('.field-member-number').text(snap.insurance.MemberNumber);
    $('.field-group-number').text(snap.insurance.number);
    $('.field-responsible-party').text(snap.personalInfo.address);

    $('.field-ht').text(snap.vitals.HT[snap.vitals.HT.length - 1]);
    $('.field-wt').text(snap.vitals.WT[snap.vitals.WT.length - 1]);
    $('.field-bp').text(snap.vitals.BP[snap.vitals.BP.length - 1]);
    $('.field-hr').text(snap.vitals.HR[snap.vitals.HR.length - 1]);
    $('.field-rr').text(snap.vitals.RR[snap.vitals.RR.length - 1]);
    $('.field-bt').text(snap.vitals.BT[snap.vitals.BT.length - 1]);

    $('.field-dose').text(snap.medical['Dose Wt']);
    $('.field-loc').text(snap.medical.LOC);
    $('.field-los').text(snap.medical.LOS);
    $('.field-problem').text(snap.medical.problem);
    $('.field-diagnosis').text(snap.medical.diagnosis);
    $('.field-medication').text(snap.medical.medication);
    $('.field-allergies').text(snap.medical.allergies);
    $('.field-labs').text(snap.medical.labs48hr);
    $('.field-rad').text(snap.medical.rad48hr);
}
