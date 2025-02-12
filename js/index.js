// toggle menu

$(document).ready(function () {
    $("#nav_menu").click(function () {
        $(this).toggleClass("menu-open");

        if ($(this).hasClass("menu-open")) {
            $("#menu_icon").removeClass("bi-list").addClass("bi-x");
            $("#menu_text").hide();
        } else {
            $("#menu_icon").removeClass("bi-x").addClass("bi-list");
            $("#menu_text").show();
        }

        $("#menu_outside").toggleClass("shrink_wrapper");
        $(".wrapper").toggleClass("active_wrapper")

    });
});



const customNavTabs = document.querySelector('.custom_nav_tabs');

document.querySelectorAll('.nav-link').forEach(tab => {
    tab.addEventListener('click', function () {

        customNavTabs.style.backgroundImage = '';


        if (this.id === 'tab-1') {
            customNavTabs.style.backgroundImage = 'url("../images/10232.jpg")';
        } else if (this.id === 'tab-2') {
            customNavTabs.style.backgroundImage = 'url("../images/xerox-bg-tall.jpg")';
        } else if (this.id === 'tab-3') {
            customNavTabs.style.backgroundImage = 'url("../images/Web-design-case-study-Doforms.jpg")';
        } else if (this.id === 'tab-4') {
            customNavTabs.style.backgroundImage = 'url("../images/fieldedge-main.jpg")';
        } else if (this.id === 'tab-5') {
            customNavTabs.style.backgroundImage = 'url("../images/Web-design-case-study-mcds.jpg")';
        }
    });
});


$(document).ready(function () {
    $('.testimonial_left_slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: false,
        arrows: false,
        vertical: true,
        infinite: true
    });

    $('.testimonial_right_slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: false,
        arrows: false,
        vertical: true,
        infinite: true
    });


    $('#prev').on('click', function () {
        $('.testimonial_left_slide').slick('slickPrev');
    });

    $('#next').on('click', function () {
        $('.testimonial_left_slide').slick('slickNext');
    });

    $('#prev').on('click', function () {
        $('.testimonial_right_slide').slick('slickPrev');
    });

    $('#next').on('click', function () {
        $('.testimonial_right_slide').slick('slickNext');
    });
});


$(document).ready(function () {
    $('.project_slider').slick({
        dots: true,
        customPaging: function (slider, i) {
            // Define the path to your custom icons
            var customIconPath = `images/dots/dot-${i + 1}.png`; // Assuming your images are named dot-1.png, dot-2.png, etc.
            return `<img src="${customIconPath}" class="custom-dot" alt="Dot ${i + 1}">`;
        },
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
});

const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}



gsap.registerPlugin(ScrollTrigger);

const processingCards = gsap.utils.toArray(".process_steps .working_step");


gsap.to(processingCards, {
    xPercent: -100 * (processingCards.length - 1),
    scrollTrigger: {
        trigger: ".process_steps",
        pin: true,
        start: "top 0",
        end: "+=2000",
        scrub: 1,
    }
});


gsap.to(".progress_bar", {
    width: "180vw",
    scrollTrigger: {
        pin: true,
        trigger: ".process_steps",
        start: "top 0",
        end: "+=2000",
        scrub: 1,
    }
});


function activateCardsOnScroll() {

    gsap.utils.toArray('.process_steps .working_step').forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'start start ',
                end: 'start start ',
                scrub: true,
                onEnter: () => {
                    card.classList.add('active');
                },
                onLeaveBack: () => {
                    card.classList.remove('active');
                },
            },
        });
    });
}


activateCardsOnScroll();



