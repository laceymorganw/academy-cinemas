
//Initialize Popovers
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


//Initialize Toasts
var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl) {
    return new bootstrap.Toast(toastEl)
})

// Function to display toast with selected options
function displaySelectedOptions() {
    var movie = document.getElementById('movieSelect').options[document.getElementById('movieSelect').selectedIndex].text;
    var time = document.getElementById('timeSelect').options[document.getElementById('timeSelect').selectedIndex].text;
    var quantity = document.getElementById('quantity').value;

    var message = "Purchase confirmed for: " + movie + "\nTime: " + time + "\nTickets: " + quantity ;

    // Display toast
    var toastBody = document.getElementById('toastBody');
    toastBody.textContent = message;
    var toast = new bootstrap.Toast(document.getElementById('myToast'));
    toast.show();
}

// Event listener for buy tickets button
function buyTickets() {
    displaySelectedOptions();
}

//JQUERY CODE


//Shrinks header size when the document is scrolled down by 50 pixels
$(document).on("scroll", function () {
    if ($(document).scrollTop() > 50) {
        $("nav").addClass("nav-shrink");
        $("div.navbar-collapse").css("margin-top", "-6px");
    } else {
        $("nav").removeClass("nav-shrink");
        $("div.navbar-collapse").css("margin-top", "14px");
    }
});

// Close mobile menu when a navigation item is clicked
$(document).ready(function () {
    //On click when and element contains just the nav-link class and not the dropdown-toggle and then 
    //also close when an element with the class .dropdown-item (each movie link) has been clicked
    $(".navbar-nav").on('click', '.nav-link:not(".dropdown-toggle"), .dropdown-item', function() {
        // Collapse the navbar when a link or dropdown item is clicked
        $(".navbar-collapse").collapse('hide');
    });
});


