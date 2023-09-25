import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import EN from "../assests/locales/en/en.json";
import JA from "../assests/locales/jp/jp.json";


const resources = {
  en: {
    translation: EN
  },
  ja: {
    translation: JA
  }
};
let selectedLanguage = navigator.language === "ja_JP" || navigator.language === "ja" ? "ja" : "en";

export const checkLanguage = (): string => {
  const lang = localStorage.getItem("lang");
  if (!lang) {
    localStorage.setItem("lang", selectedLanguage);
  } else {
    const checkLang = Object.keys(resources).find((item) => {
      if (item === lang) {
        return item;
      }
    });
    if (checkLang) selectedLanguage = lang;
    else localStorage.setItem("lang", selectedLanguage);
  }
  return selectedLanguage;
};

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    resources,
    debug: false,
    lng:"ja",
    detection: {
      order: ["queryString", "cookie"],
      caches: ["cookie"]
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;