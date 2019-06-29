// Make sure we wait to attach our handlers until the DOM is fully loaded.

$(document).ready(function () {
    $(function () {
        $(".waiting-bugers").on("click", ".devour-burger", function (event) {

            console.log($(".devour-burger").attr("data-id"));
            var id = $(".devour-burger").attr("data-id")

            // Send the PUT request.
            $.ajax("/api/devourburger/" + id, {
                type: "PUT",

            }).then(
                function () {
                    console.log("changed sleep to devoured");
                    // Reload the page to get the updated list
                    location.reload();
                }
            );
        });

        $(".create-form").on("submit", function (event) {
            // Make sure to preventDefault on a submit event.
            event.preventDefault();
            console.log("this was clicked")
            console.log($("#newburger").val().trim());

            if ($("#newburger").val().trim() == "") {
                alert("You must enter a burger name");
                location.reload();
            } else {
                var newBurger = {
                    burger_name: $("#newburger").val().trim()
                };
                console.log(newBurger);
                // Send the POST request.
                $.ajax("/api/addburger", {
                    type: "POST",
                    data: newBurger
                }).then(
                    function () {
                        console.log("created new addburger");
                        // Reload the page to get the updated list
                        location.reload();
                    }
                );
            }

        });
    });

});
