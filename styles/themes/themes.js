import { MODULE_ID } from "../../data/constants";
import coreDark from "./coreDark";
import coreLight from "./coreLight";
import nebula from "./nebula";
import viscera from "./viscera";
import water from "./water";

export const bestiaryThemes = {
  coreLight: {
    name: "SubsystemTheming.Themes.CoreLight",
    props: coreLight,
  },
  coreDark: {
    name: "SubsystemTheming.Themes.CoreDark",
    props: coreDark,
  },
  nebula: {
    name: "SubsystemTheming.Themes.Nebula",
    props: nebula,
  },
  viscera: {
    name: "SubsystemTheming.Themes.Viscera",
    props: viscera,
  },
  water: {
    name: "SubsystemTheming.Themes.Water",
    props: water,
  },
};

export const extendedThemes = () => {
  const customThemes = game.settings.get(
    MODULE_ID,
    "custom-themes",
  );
  return { ...bestiaryThemes, ...customThemes };
};

export const themeChoices = {
  coreLight: "SubsystemTheming.Themes.CoreLight",
  coreDark: "SubsystemTheming.Themes.CoreDark",
  nebula: "SubsystemTheming.Themes.Nebula",
  viscera: "SubsystemTheming.Themes.Viscera",
  water: "SubsystemTheming.Themes.Water",
};

export const defaultThemeChoices = () => {
  const customThemes = game.settings.get(
    MODULE_ID,
    "custom-themes",
  );
  return {
    ...themeChoices,
    ...Object.keys(customThemes).reduce((acc, x) => {
      acc[x] = customThemes[x].name;
      return acc;
    }, {}),
  };
};

export const extendedThemeChoices = () => {
  const customThemes = game.settings.get(
    MODULE_ID,
    "custom-themes",
  );
  return {
    default: "SubsystemTheming.Themes.Default",
    ...themeChoices,
    ...Object.keys(customThemes).reduce((acc, x) => {
      acc[x] = customThemes[x].name;
      return acc;
    }, {}),
  };
};
