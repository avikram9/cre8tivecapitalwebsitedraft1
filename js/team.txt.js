$(document).ready(function () {

    $("#linkAll").on("click", function () {

        $("#all").show();
        $("#foundingPartners").hide();
    });

    $("#linkFoundingPartner").on("click", function () {

        $("#foundingPartners").show();
        $("#all").hide();
    });
});