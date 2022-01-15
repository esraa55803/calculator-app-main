function del(){
    var valu = document.getElementById("screen").value;
    document.getElementById("screen").value = valu.substr(0, valu.length-1);
}
var two=document.getElementById('two');
two.addEventListener('click',function(){
    var body=document.querySelector('body');
    var toggle=document.getElementById('cir');
    body.classList.add('active1');
    body.classList.remove('active2');
    toggle.style.left='36%';
})

var one=document.getElementById('one');
one.addEventListener('click',function(){
    var body=document.querySelector('body');
    var toggle=document.getElementById('cir');
    body.classList.remove('active1');
    body.classList.remove('active2');
    toggle.style.left='5px';
})
var three=document.getElementById('thr');
three.addEventListener('click',function(){
    var body=document.querySelector('body');
    var toggle=document.getElementById('cir');
    body.classList.add('active2');
    body.classList.remove('active1');
    toggle.style.left='65%';
})