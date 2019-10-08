var translation = {
    "fr" : {
        "title"                   : "Prince Youlou : Un web developpeur et designer.",
        "home"                    : "Accueil",
        "hey"                     : "Salut, je m'appelle Prince Youlou",
        "me"                      : "Je suis un développeur Web et un chef de projet.<br> Je viens d'un pays appelé Afrique 🌍 et d'une province appelée Congo 🇨🇬.<br> Je veux être une légende et être rappelé comme une icône et une inspiration pour les générations futures du monde entier.<br>",
        "download"                : "Télécharger mon CV",
    },
    "en" : {
      "title"                   : "Prince Youlou : Web developer and designer.",
      "home"                    : "Home",
      "hey"                     : "Hi, I'm Prince Youlou",
      "me"                      : "I'm a web developer and project manager who has been involved in business and youth empowerment for the last five years.<br> I come from a country called Africa 🌍 and a province called Congo 🇨🇬. <br> I want to be a legend and be remembered as an icon and an inspiration for future generations around the world.",
      "download"                : "Download my CV",
    }
}

let cvFr="doc/CV_Prince_Youlou_Mars_2019_Fr.pdf"
let cvEn="doc/CV_Prince_Youlou_Mars_2019_En.pdf"

function translate(lang) {
    if (lang == "en") {
        $.each( translation.en, function(key, value) {
            $("#" + key).html(value);
        });
    };
    if (lang == "fr") {
        $.each( translation.fr, function(key, value) {
            $("#" + key).html(value);
        });
    };
  return true;
}


$( "#lang-en" ).click(function() {
translate('en');
})

$( "#lang-fr" ).click(function() {
translate('fr');
});

// detect local language used by navigator
// english by default
var user_lang = (navigator.language || navigator.userLanguage).split('-')[0];
if( user_lang == "fr" ) {
    translate('fr');
    $(".cvDownLoad").attr("href",cvFr);
} else {
    translate('en');

    $(".cvDownLoad").attr("href",cvEn);
}
