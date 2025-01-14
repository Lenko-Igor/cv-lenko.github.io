import { techSkills, selfPresentation, experience, languages, educations, commonInfo } from "./data.js";
import { BLOCK_TITLES, LANGUAGE } from './constants/index.js'

const { createApp, ref } = Vue;

let language = 'en';

const app = createApp({
  data() {
    return {
      lgBtnTitle: language === LANGUAGE.EN ? 'RU' : 'EN',
      titles: ref(BLOCK_TITLES[language]),
      user: ref(commonInfo(language)),
      techSkills: ref(techSkills(language)),
      selfPresentation: ref(selfPresentation(language)),
      experience: ref(experience(language)),
      languages: ref(languages(language)),
      educations: ref(educations(language)),
    };
  },

  methods: {
    selectLanguage() {
        language = language === LANGUAGE.RU ? LANGUAGE.EN : LANGUAGE.RU;

        this.lgBtnTitle = language === LANGUAGE.EN ? 'RU' : 'EN';
        this.user = commonInfo(language);
        this.titles = BLOCK_TITLES[language];
        this.techSkills = techSkills(language);
        this.languages = languages(language);
        this.selfPresentation = selfPresentation(language);
        this.experience = experience(language);
        this.educations = educations(language);
    }
  },
  mounted() {
    document.getElementById("btn").addEventListener("click", this.selectLanguage)
  }
});

app.mount("#app");

