// ====================Type Animation=================

var typed= new Typed(".typing",{
    strings:["","Web Developer", "Competitive Programmer","Learner DSA"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

function clicked()
{
    var x = document.getElementById('manu');
    if(x.style.left=='-270px'){
     x.style.left='0';
    }else{
        x.style.left='-270px'
    }
}
