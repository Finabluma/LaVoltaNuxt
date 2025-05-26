export const useIntroStore = defineStore("IntroStore", {
  state: () => ({
    hasSeenIntro: false,
  }),
  actions: {
    check() {
      this.hasSeenIntro = sessionStorage.getItem("hasSeenIntro") === "true";
    },
    setSeen() {
      this.hasSeenIntro = true;
      sessionStorage.setItem("hasSeenIntro", "true");
    },
    reset() {
      this.hasSeenIntro = false;
      sessionStorage.removeItem("hasSeenIntro");
    },
  },
});
