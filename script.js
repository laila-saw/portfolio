$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>20){
            $('.navbar').addClass('sticky')
        }else{
            $('.navbar').removeClass('sticky')
        }
        if(this.scrollY>500){
            $('.scroll-up-btn').addClass('show')
        }else{
            $('.scroll-up-btn').removeClass('show')
        }
    })
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0})
    });
    // toggle menu/navbar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active")

    });

    // typing animation script
var typed=new Typed(".typing",{
    strings:["Designer","Devolopper","Freelancer","Blogger"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})
var typed=new Typed(".typing2",{
    strings:["Designer","Devolopper","Freelancer","Blogger"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})
    // owl carousel script
    $('.carousel').owlCarousel({
        margin:20,
        loop: true,
        autoplayTimeOut : 200,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items:1,
                nav:false

            },
            600:{
                items:2,
                nav:false

            },
            1000:{
                items:3,
                nav:false

            }

        }

    })
});
const contactForm=document.querySelector(".contactForm"),
nameU=contactForm.querySelector("#name"),
email=contactForm.querySelector("#email"),
subject=contactForm.querySelector(".subject"),
msg=contactForm.querySelector(".msg"),
sucessMsg=contactForm.querySelector(".sucessMsg");
contactForm.onsubmit=(e)=>{
    console.log(nameU.value);
    console.log(email.value);
    console.log(subject.value);
    console.log(msg.value);
    e.preventDefault();
    var tempParams={
        from_name:nameU.value,
        email:email.value,
        subject:subject.value,
        message:msg.value

    }
    emailjs.send("service_w61oyow","template_s82h01k",tempParams)
    .then(function(res){
        sucessMsg.style.display="block";
        nameU.value="";
        email.value="";
        subject.value="";
        msg.value="";
    })
}
