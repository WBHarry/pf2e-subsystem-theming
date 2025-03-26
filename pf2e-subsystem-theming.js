import { MODULE_ID } from "./data/constants";
import { registerGameSettings, setupTheme } from "./scripts/setup";
import { extendedThemes } from "./styles/themes/themes";

Hooks.once('init', () => {
    registerGameSettings();
});

Hooks.once("setup", () => {
    const userTheme = game.user.getFlag(
      MODULE_ID,
      "theme",
    );
    if (userTheme) {
      game.settings.set(MODULE_ID, "theme", userTheme);
    }
  
    const selectedTheme = game.settings.get(
      MODULE_ID,
      "theme",
    );
    const theme =
      selectedTheme === "default"
        ? game.settings.get(MODULE_ID, "default-theme")
        : selectedTheme;

    setupTheme(extendedThemes()[theme].props);
});