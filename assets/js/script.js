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

function login() {
    if ($("#inputEmail").val() == "navid@upmc.com" && $("#inputPassword").val() == "test123") {
        console.log("Success");
    } else {
        $("#inputEmail").val("");
        $("#inputPassword").val("");
        $("#incorrectPassword").html("Incorrect email or password. Please try again!");
        console.log("Failure");
    }
}