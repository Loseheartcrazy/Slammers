function sign(){
    var signModal = document.getElementById('signModal');
    signModal.style.visibility =  (signModal.style.visibility == "visible"  ) ? "hidden" : "visible";
}
function term() {
    var checkbox = document.getElementById('TermsAgree');
    checkbox.removeAttribute('disabled');
    var termModal = document.getElementById('termModal');
    termModal.style.visibility =  (termModal.style.visibility == "visible"  ) ? "hidden" : "visible";
}
$(window).load(function(){
    $("#sticker").sticky({ topSpacing: 0 });
});
