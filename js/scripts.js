$(function() {
    $("#accountButton").click(function(){
        window.location = "account.html";
    });


    $("#submitCredential").click(function(e){
        if($("#loginEmail").val() == "email@gmail.com" && ($("#loginPassword").val() == "1234")){
            window.location = "home.html";
        }
        else {
            alert("The email and password you entered don't match.");
        }
    });

    $("#signinButton").click(function(){
        $("#signinModal").modal('show');
    });

   
});