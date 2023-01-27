
//Exemplo de js no console
/*This example finds all <p> elements:*/
const el1 = document.getElementsByTagName("p");
/*The easiest way to find an HTML element in the DOM, is by using the element id.*/
const el2 = document.getElementById("intro");

// Pimeiro exemplo de js integrado
function fun() {

alert("Javascript é muuuito legal! xP");
}
// Segundo exemplo de js integrado
function fun2() {
    document.getElementById("demo").innerHTML = "";
    // Pimeiro exemplo
    let txt = "";
    if (confirm("Press a button!")) {
        txt = "You pressed OK!";
    } else {
        txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
    
    // Segundo exemplo
    // These are the values of each element in the form:
    const x = document.forms["frm2"];
    let text = "<br>";
    for (let i = 0; i < x.length ;i++) {
    text += x.elements[i].name + ": "+x.elements[i].value + "<br>";
    }
    document.getElementById("demo").innerHTML = txt+text;
}
// Terceiro exemplo de JS
jQuery(document).ready(function() {

    var offset = 250;
    
    var duration = 300;
    
    jQuery(window).scroll(function() {
    
        if (jQuery(this).scrollTop() > offset) {
        
        jQuery('input.back-to-top').fadeIn(duration);
        
        } else {
        
        jQuery('input.back-to-top').fadeOut(duration);
        
        }

    });



    jQuery('input.back-to-top').click(function(event) {
    
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        
        return false;
        
    })

});