//hided by Default
$("#portfolioContainer").hide()
$('#contactContainer').hide()



//Link navigation hide/showing different pages
$(".portfolioLink").click(function(){
    $("#homeContainer").hide()
    $("#contactContainer").hide()
    $("#portfolioContainer").show()
  });

  $(".contactLink").click(function(){
    $("#homeContainer").hide()
    $("#portfolioContainer").hide()
    $("#contactContainer").show()
  });

$(".homeLink").click(function(){
  $("#contactContainer").hide()
  $("#portfolioContainer").hide()
  $("#homeContainer").show()
});

//Switch to EN if selected
$(".selectedEN").click(function(){
  $(".selectLang").html("Select Language")
  $(".selectedSE").html("Swedish")
  $(".selectedEN").html("English")
  $("#aboutHEN").html("About")
  $("#aboutPEN").html("Hi, my name is Lucas Inestal and I am studying web development full stack open-source at Nackademin in Solna. I've always had a keen interest in technology and design and that's what made me take the step to study for full stack developers.");
  $("#skillsEN").html("Skills")
  $(".homeLink").html('<i class="fas fa-home"></i>' + " Home")
  $(".contactLink").html('<i class="fas fa-suitcase"></i>' + " Contact")
  $(".portfolioLink").html('<i class="fas fa-phone-square-alt"></i>' + " Portfolio")
  $("#contactEN").html("Get in touch")
  $("#phoneLI").html("Phone: " + '<span>073-318 62 05</span>')
})
//Switch to SE if selected
$(".selectedSE").click(function(){
  $(".selectLang").html("Välj Språk")
  $(".selectedSE").html("Svenska")
  $(".selectedEN").html("Engelska")
  $("#aboutHEN").html("Om mig")
  $("#aboutPEN").html("Hej, mitt namn är Lucas Inestal och jag studerar webbutveckling fullstack open-source på Nackademin i Solna. Jag har alltid haft ett stort intresse för teknik och design och det var det som fick mig att ta steget till att studera till fullstack utvecklare.");
  $("#skillsEN").html("Kompetenser")
  $(".homeLink").html('<i class="fas fa-home"></i>' + " Hem")
  $(".contactLink").html('<i class="fas fa-suitcase"></i>' + " Kontakt")
  $(".portfolioLink").html('<i class="fas fa-phone-square-alt"></i>' + " Portfolio")
  $("#contactEN").html("Kontakta mig")
  $("#phoneLI").html("Telefon: " + '<span>073-318 62 05</span>')
})

