var translation = {
    "fr" : {
        "title"                   : "Prince Youlou : Un web developpeur et designer.",
        "home"                    : "Accueil",
        "hey"                     : "Salut, je m'appelle Prince Youlou",
        "me"                      : "Un web developpeur, designer et bébé né avec intensité.<br> Je viens d'un pays appelé Afrique 🌍 et d'une province appelée Congo 🇨🇬.<br> Je m'efforce chaque jour d'être une légende et d'être rappelé comme une icône. Je fais tout avec intensité.<br>",
        "download"                : "Télécharger mon CV",
    },
    "en" : {
      "title"                   : "Prince Youlou : Web developer and designer.",
      "home"                    : "Home",
      "hey"                     : "Hi, I'm Prince Youlou",
      "me"                      : "A web developer, designer and baby born with intensity. <br> I come from a country called Africa  and a province called Congo 🇨🇬. <br> I strive every day to be a legend and to to be remembered as an icon. I do everything with intensity. <br>",
      "download"                : "Download my CV",
    }
}

let cvFr="doc/CV_Prince_Youlou_Mars_2019Fr.pdf"
let cvEn="doc/CV_Prince_Youlou_Mars_2019En.pdf"

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
