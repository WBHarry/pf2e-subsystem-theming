import { MODULE_ID, SOCKET_ID } from "./data/constants";
import { handleDataMigration } from "./scripts/migrationHandler";
import { registerGameSettings, setupTheme } from "./scripts/setup";
import { handleSocketEvent, socketEvent } from "./scripts/socket";
import { extendedThemes } from "./styles/themes/themes";

Hooks.once('init', () => {
    registerGameSettings();
    game.socket.on(SOCKET_ID, handleSocketEvent);
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

Hooks.once("ready", async () => {
  handleDataMigration();
});


Hooks.on(socketEvent.ResetTheme, () => {
  const selectedTheme = game.settings.get(
    MODULE_ID,
    "theme",
  );
  const theme =
    selectedTheme === "default"
      ? game.settings.get(MODULE_ID, "default-theme")
      : selectedTheme;
  const resetTheme = extendedThemes()[theme];
  setupTheme(
    resetTheme ? resetTheme.props : extendedThemes()["coreLight"].props,
  );
});