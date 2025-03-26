import { MODULE_ID } from "../data/constants";
import ThemesMenu from "../module/themesMenu.js";
import { defaultThemeChoices, extendedThemeChoices } from "../styles/themes/themes.js";

export const registerGameSettings = () => {
    game.settings.registerMenu(MODULE_ID, "subsystem-themes", {
        name: game.i18n.localize("SubsystemTheming.Menus.Themes.Menu.Name"),
        label: game.i18n.localize("SubsystemTheming.Menus.Themes.Menu.Label"),
        hint: game.i18n.localize("SubsystemTheming.Menus.Themes.Menu.Hint"),
        icon: "fa-solid fa-brush",
        type: ThemesMenu,
        restricted: true,
      });
    
    game.settings.register(MODULE_ID, "custom-themes", {
        name: '',
        hint: '',
        scope: "world",
        config: false,
        type: Object,
        default: {},
    });

    game.settings.register(MODULE_ID, "default-theme", {
      name: game.i18n.localize("SubsystemTheming.Settings.DefaultTheme.Name"),
      hint: game.i18n.localize("SubsystemTheming.Settings.DefaultTheme.Hint"),
      scope: "world",
      config: true,
      type: new foundry.data.fields.StringField({
        choices: defaultThemeChoices,
        required: true,
      }),
      requiresReload: true,
      default: "coreLight",
    });
  
    game.settings.register(MODULE_ID, "theme", {
      name: game.i18n.localize("SubsystemTheming.Settings.Theme.Name"),
      hint: game.i18n.localize("SubsystemTheming.Settings.Theme.Hint"),
      scope: "client",
      config: true,
      type: new foundry.data.fields.StringField({
        choices: extendedThemeChoices,
        required: true,
      }),
      requiresReload: true,
      onChange: async (value) => {
        if (!value) return;
  
        game.user.setFlag(MODULE_ID, "theme", value);
      },
      default: "default",
    });
};

export const setupTheme = (theme) => {
  const root = document.querySelector(":root");
  for (var property of Object.keys(theme)) {
    if (
      [
        "--pf2e-subsystem-theming-application-image",
        "--pf2e-subsystem-theming-application-header-image",
      ].includes(property) &&
      theme[property] !== "ignore"
    ) {
      root.style.setProperty(property, `url("${theme[property]}")`);
    } else {
      root.style.setProperty(property, theme[property]);
    }
  }
};