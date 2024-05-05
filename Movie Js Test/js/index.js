let rowData = document.getElementById("row");

$(document).ready(() => {
        $(".loading .loader").fadeOut(1000,function(){
                $(".loading").addClass("d-none");
        }) 
        $("body").css("overflow", "visible");
        

})


// Nav
function openSideNav() {
    $(".side-nav-menu").animate({
        left: 0
    }, 500)

    $(".open-close-icon").removeClass("fa-align-justify");
    $(".open-close-icon").addClass("fa-x");

    for (let i = 0; i < 6; i++) {
        $(".links li").eq(i).animate({
            top: 0
        }, (i + 6) * 100)
    }
}

function closeSideNav() {
    let boxWidth = $(".side-nav-menu .nav-tab").outerWidth()
    $(".side-nav-menu").animate({
        left: -boxWidth
    }, 500)

    $(".open-close-icon").addClass("fa-align-justify");
    $(".open-close-icon").removeClass("fa-x");
    $(".links li").animate({
        top: 300
    }, 500)
}

closeSideNav()

$(".side-nav-menu i.open-close-icon").click(() => {

    if ($(".side-nav-menu").css("left") == "0px") {
        closeSideNav()
    } else {
        openSideNav()
    }
})
///////////////////////
// Home
function convertToStars(average) {
        const totalStars = 5; 
        const roundedAverage = Math.round(average) / 2; 
        const fullStars = Math.floor(roundedAverage);
        const halfStar = roundedAverage - fullStars === 0.5;
    
        let starRating = '';
        for (let i = 0; i < fullStars; i++) {
            starRating += '<i class="fa-solid fa-star text-warning fs-6"></i>'; 
        }
        if (halfStar) {
            starRating += '<i class="fa-solid fa-star-half text-warning fs-6"></i>'; 
        }
        
        return starRating;
    }
    
    
   
function displayMovies(bakr) {
        let cartoona = "";
        for (let i = 0; i < bakr.length; i++) {
            const starRatingHTML = convertToStars(bakr[i].vote_average); 
            cartoona += `
            <div class="col-lg-4">
                <div class="item overflow-hidden position-relative">
                    <div class="cardImg overflow-hidden border border-0 rounded-2">
                        <img class="w-100 img-fluid" src="https://image.tmdb.org/t/p/w500${bakr[i].poster_path}" alt="">
                    </div>
                    <div class="layer w-100 h-100 pt-5 p-3 position-absolute">
                        <h2 class="animate__animated title animate__slideOutLeft position-relative mb-4">${bakr[i].original_title}</h2>
                        <p class="flipInX animate__animated animate__slideOutLeft desc">${bakr[i].overview}</p>
                        <div class="up">
                            <p class="date animate__animated animate__slideOutLeft">Release Date: ${bakr[i].release_date}</p>
                            <h3>${starRatingHTML}</h3>
                            <div class="rate animate__animated animate__slideOutLeft circle rounded-circle d-flex align-items-center justify-content-center">
                                <h3 class="fs-5">${Math.round(bakr[i].vote_average * 10) / 10}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }
        rowData.innerHTML = cartoona;
    }
    
    async function getMovies() {
        $(".row").html="";    
        let response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
        let mainResponse = await response.json();
        displayMovies(mainResponse.results);
    }

        getMovies();
    
// Now Playing
$("#nowPlaying").click(function(){
        closeSideNav()
        getMovies();
        $(window).scrollTop(0);
})

// Trending
    async function getTrending() {
        
        $(".row").html="";    
        let trendingResponse = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
        let trending = await trendingResponse.json();
        displayMovies(trending.results);
    }

    $("#trending").click(function(){
        closeSideNav();
        getTrending();
        $(window).scrollTop(0);
})
    
// Popular
    async function getPopular() {
        
        $(".row").html="";    
        let popularResponse = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
        let popular = await popularResponse.json();
        displayMovies(popular.results);
    }

    $("#Popular").click(function(){
        closeSideNav();
        getPopular();
        $(window).scrollTop(0);
})
    
// topRated
    async function getTopRated() {
        
        $(".row").html="";    
        let topRatedResponse = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
        let topRated = await topRatedResponse.json();
        displayMovies(topRated.results);
    }

    $("#topRated").click(function(){
        closeSideNav();
        getTopRated();
        $(window).scrollTop(0);
})
// upcoming
    async function getupcoming() {
        
        $(".row").html="";    
        let upcomingResponse = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
        let upcoming = await upcomingResponse.json();
        displayMovies(upcoming.results);
    }

    $("#upcoming").click(function(){
        closeSideNav();
        getupcoming();
        $(window).scrollTop(0);
})
    
let contactTop = $(".contactHead").offset().top;
$("#contactUs").click(function(){
    closeSideNav();
    $(window).scrollTop(contactTop+3500);
})

$(window).scroll(function(){
    let windowOffset = $(window).scrollTop();
    if(windowOffset > 400){
        $("#back-to-top").removeClass("d-none");
        $("#back-to-top").addClass("d-flex");
    }else{
        $("#back-to-top").removeClass("d-flex");
        $("#back-to-top").addClass("d-none");
    }
})

$("#back-to-top").click(function(){
    $(window).scrollTop(0);
})



// Regex
$(document).ready(() => {
    $('#nameInput, #emailInput, #phoneInput, #ageInput, #passwordInput, #repasswordInput').keyup(function () {
        // Name validation
        var nameInput = $('#nameInput').val().trim();
        if (nameInput === '') {
            $('#nameAlert').text('Please enter your name.').removeClass('d-none');
        } else if (!/^[A-Za-z\s]+$/.test(nameInput)) {
            $('#nameAlert').text('Invalid name, only characters are allowed.').removeClass('d-none');
        } else {
            $('#nameAlert').addClass('d-none');
        }

        // Email validation
        var emailInput = $('#emailInput').val().trim();
        if (emailInput === '') {
            $('#emailAlert').text('Please enter your email.').removeClass('d-none');
        } else if (!/\S+@\S+\.\S+/.test(emailInput)) {
            $('#emailAlert').text('Invalid email, please enter a valid email address.').removeClass('d-none');
        } else {
            $('#emailAlert').addClass('d-none');
        }

        // Phone number validation
        var phoneInput = $('#phoneInput').val().trim();
        if (phoneInput === '') {
            $('#phoneAlert').text('Please enter your phone number.').removeClass('d-none');
        } else if (!/^\d{11}$/.test(phoneInput)) {
            $('#phoneAlert').text('Invalid phone number, please enter an 11-digit number.').removeClass('d-none');
        } else {
            $('#phoneAlert').addClass('d-none');
        }

        // Age validation
        var ageInput = $('#ageInput').val().trim();
        if (ageInput === '') {
            $('#ageAlert').text('Please enter your age.').removeClass('d-none');
        } else if (parseInt(ageInput) < 16) {
            $('#ageAlert').text('Your age must be over 16.').removeClass('d-none');
        } else {
            $('#ageAlert').addClass('d-none');
        }

        // Password validation
        var passwordInput = $('#passwordInput').val().trim();
        if (passwordInput === '') {
            $('#passwordAlert').text('Please enter your password.').removeClass('d-none');
        } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(passwordInput)) {
            $('#passwordAlert').text('Password must contain at least 8 characters, including letters and numbers.').removeClass('d-none');
        } else {
            $('#passwordAlert').addClass('d-none');
        }

        // Re-entered password validation
        var repasswordInput = $('#repasswordInput').val().trim();
        if (repasswordInput === '') {
            $('#repasswordAlert').text('Please re-enter your password.').removeClass('d-none');
        } else if (repasswordInput !== passwordInput) {
            $('#repasswordAlert').text('Passwords do not match.').removeClass('d-none');
        } else {
            $('#repasswordAlert').addClass('d-none');
        }
    });

    // Form submission
$('#submit').click(function(e){
    e.preventDefault();
})
})