(function ($) {

  const defaultBookmark = {
    currentLang: 'SWE',
    page: 'HOME'
  }

  onPageLoad();

  function onPageLoad() {
    let bookmark = getStorageItem();

    if (!bookmark) {
      setStorageItem(defaultBookmark);
      navigate(defaultBookmark.page);
    } else {
      navigate(bookmark.page)
    }

  }

  
  function getStorageItem() {
    // get item from storage and parse it if it exist else return null
    return localStorage.getItem('bookmark') ? JSON.parse(localStorage.getItem('bookmark')) : null;
  }
  function setStorageItem(bookmark) {
    //set the storage item with propeperties
    localStorage.setItem('bookmark', JSON.stringify(bookmark));
  }


  //Content presenting
  function navigate(page) {
    //Save new navigation
    let bookmark = getStorageItem();
    bookmark.page = page;
    setStorageItem(bookmark);
    switch (page) {
      case 'HOME':
        $.get("about.html", function (html) {
          $('#contentSection').html(html);
          toggleLanguage(bookmark.currentLang)
        }, 'html');
        break;
      case 'PORTFOLIO':
        $.get("portfolio.html", function (html) {
          $('#contentSection').html(html);
          toggleLanguage(bookmark.currentLang)
        }, 'html');
        break;
      case 'CONTACT':
        $.get("contact.html", function (html) {
          $('#contentSection').html(html);
          toggleLanguage(bookmark.currentLang)
        }, 'html');
        break;
      default:
        break;
    }
  }
  function toggleLanguage(lang) {
    let bookmark = getStorageItem();
    bookmark.currentLang = lang;
    setStorageItem(bookmark);
    console.log(lang)
    if (lang === 'SWE') {
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
    }
    else if (lang === 'ENG') {
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
    }
  }


  //removing content section and replacing content.
  $(".homeLink").click(function () {
    navigate('HOME');
  })
  $(".portfolioLink").click(function () {
    navigate('PORTFOLIO');
  })
  $(".contactLink").click(function () {
    navigate('CONTACT');
  })
  $("#en").click(function () {
    toggleLanguage('ENG')
  })
  $("#sv").click(function () {
    toggleLanguage('SWE')
  })
})(jQuery);
