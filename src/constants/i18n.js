import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import locale2 from "locale2";

i18n
  //  .use(XHR)
  // and check https://github.com/i18next/i18next-browser-languageDetector for client side !!!
  // and this https://github.com/i18next/i18next-browser-languageDetector/issues/150
  .use(initReactI18next) // if not using I18nextProvider
  .init({
    // lng: locale2.substr(0,2),
    lng: "en",
    fallbackLng: "en",
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    react: {
      wait: true,
      bindI18n: "languageChanged loaded",
      bindStore: "added removed",
      nsMode: "default",
    },

    resources: {
      en: {
        translation: {
          ChVerseDelimiter: ":",
          Chapter: "Chapter",
          newPassage: "New Passage",
          BeginCh: "Begin Chapter",
          BeginV: "Begin Verse",
          EndCh: "End Chapter",
          EndV: "End Verse",
          Verse: "Verse",
          John: "John",
          JohnLongTitle: "The Gospel of John",
          "John.ImgId": "https://static.wixstatic.com/media/080448_6a046f09d77f4a878bca1171518a7205~mv2.jpg/v1/fill/w_980,h_731,al_c,q_90/080448_6a046f09d77f4a878bca1171518a7205~mv2.webp",
        },
      },
      de: {
        translation: {
          ChVerseDelimiter: ":",
          Chapter: "Kapitel",
          newPassage: "New Passage",
          BeginCh: "Begin Chapter",
          BeginV: "Begin Verse",
          EndCh: "End Chapter",
          EndV: "End Verse",
          Verse: "Vers",
          John: "Johannes",
          JohnLongTitle: "Das Johannesevangelium",
        },
      },
    },
  });

export default i18n;
