$(function () {

    $('#management_button').on('click', switchToManagementTab);
    $("#directors_button").on('click', switchToDirectorsTab);
    $("#arrow_right").on('click', scrollRight);
    $("#arrow_left").on('click', scrollLeft);

    function switchToManagementTab() {

        $('#management_button').addClass("active-button")
        $('#management_section').css('display', 'flex');
        $('#directors_button').removeClass("active-button")
        $('#directors_section').hide();
        $('#arrow_left').show();
        $('#arrow_right').show();
    }

    function switchToDirectorsTab() {

        $('#directors_button').addClass("active-button");
        $('#directors_section').css('display', 'flex');
        $('#management_button').removeClass("active-button");
        $('#management_section').hide();
        $('#arrow_left').hide();
        $('#arrow_right').hide();
    }

    function scrollRight() {
        $('#management_section').animate({
            scrollLeft: ($('#management_section').scrollLeft() + 200)
        });
    }

    function scrollLeft() {
        $('#management_section').animate({
            scrollLeft: ($('#management_section').scrollLeft() - 200)
        });
    }

});