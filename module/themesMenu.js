import { MODULE_ID, SOCKET_ID } from "../data/constants";
import { parseOldVariableNaming, saveDataToFile, slugify } from "../scripts/helpers";
import { setupTheme } from "../scripts/setup";
import { socketEvent } from "../scripts/socket";
import {
  bestiaryThemes,
  defaultThemeChoices,
  extendedThemes
} from "../styles/themes/themes";
import ImportDialog from "./importDialog";

const { HandlebarsApplicationMixin, ApplicationV2 } = foundry.applications.api;

export default class ThemesMenu extends HandlebarsApplicationMixin(
  ApplicationV2,
) {
  constructor() {
    super({});

    const customThemesSetting = game.settings.get(
      MODULE_ID,
      "custom-themes",
    );
    this.customThemes = Object.keys(customThemesSetting).reduce((acc, key) => {
      const theme = customThemesSetting[key];
      const backgroundImage =
        theme.props["--pf2e-subsystem-theming-application-image"];
      const headerBackgroundImage =
        theme.props["--pf2e-subsystem-theming-application-header-image"];
      acc[key] = {
        ...theme,
        props: {
          ...theme.props,
          ["--pf2e-subsystem-theming-application-image"]:
            backgroundImage === "ignore"
              ? "ignore"
              : backgroundImage.split("../../../")[1],
          ["--pf2e-subsystem-theming-application-header-image"]:
            headerBackgroundImage === "ignore"
              ? "ignore"
              : headerBackgroundImage.split("../../../")[1],
        },
      };
      return acc;
    }, {});

    this.selectedTheme = "";
  }

  get title() {
    return game.i18n.localize("SubsystemTheming.Menus.Themes.Name");
  }

  static DEFAULT_OPTIONS = {
    tag: "form",
    id: "pf2e-subsystem-theming-themes-menu",
    classes: ["theme-settings-menu"],
    position: { width: 680, height: "auto" },
    actions: {
      addTheme: this.addTheme,
      deleteTheme: this.deleteTheme,
      exportTheme: this.exportTheme,
      importTheme: this.importTheme,
      selectTheme: this.selectTheme,
      filePicker: this.filePicker,
      clearBackgroundImage: this.clearBackgroundImage,
      save: this.save,
    },
    form: { handler: this.updateData, submitOnChange: true },
  };

  static PARTS = {
    application: {
      id: "subsystem-themes-menu",
      template:
        "modules/pf2e-subsystem-theming/templates/themesMenu.hbs",
    },
  };

  _attachPartListeners(partId, htmlElement, options) {
    super._attachPartListeners(partId, htmlElement, options);
    $(htmlElement)
      .find(".menu-title-button select")
      .on("change", async (event) => {
        this.customThemes[this.selectedTheme] = {
          name: this.customThemes[this.selectedTheme].name,
          props: this.getTemplateProps(
            extendedThemes()[event.currentTarget.value].props,
          ),
        };
        this.render();
      });
    $(htmlElement)
      .find(".background-size-select")
      .on("change", async (event) => {
        this.customThemes[this.selectedTheme] = {
          name: this.customThemes[this.selectedTheme].name,
          props: {
            ...this.customThemes[this.selectedTheme].props,
            [event.currentTarget.dataset.theme]: event.currentTarget.value,
          },
        };
        this.render();
      });
    $(htmlElement)
      .find(".background-repeat-select")
      .on("change", async (event) => {
        this.customThemes[this.selectedTheme] = {
          name: this.customThemes[this.selectedTheme].name,
          props: {
            ...this.customThemes[this.selectedTheme].props,
            [event.currentTarget.dataset.theme]: event.currentTarget.value,
          },
        };
        this.render();
      });
    $(htmlElement)
      .find(".background-position-select")
      .on("change", async (event) => {
        this.customThemes[this.selectedTheme] = {
          name: this.customThemes[this.selectedTheme].name,
          props: {
            ...this.customThemes[this.selectedTheme].props,
            [event.currentTarget.dataset.theme]: event.currentTarget.value,
          },
        };
        this.render();
      });
  }

  async _prepareContext(_options) {
    const context = await super._prepareContext(_options);

    context.baseThemes = Object.keys(bestiaryThemes).map((x) => ({
      name: x,
      value: x,
    }));
    context.customThemes = this.customThemes;
    context.selectedTheme = this.selectedTheme;

    const extendedThemes = defaultThemeChoices();
    context.extendedThemes = Object.keys(extendedThemes).map((key) => ({
      value: key,
      name: extendedThemes[key],
    }));
    context.backgroundSizeOptions = [
      { value: "initial", name: "initial" },
      { value: "cover", name: "cover" },
    ];
    context.backgroundRepeatOptions = [
      { value: "no-repeat", name: "no-repeat" },
      { value: "repeat", name: "repeat" },
      { value: "round", name: "round" },
      { value: "initial", name: "initial" },
    ];
    context.backgroundPositionOptions = [
      { value: "left", name: "left" },
      { value: "center", name: "center" },
      { value: "right", name: "right" },
      { value: "top", name: "top" },
      { value: "bottom", name: "bottom" },
    ];

    return context;
  }

  static async updateData(event, element, formData) {
    const { customThemes } = foundry.utils.expandObject(formData.object);
    this.customThemes = foundry.utils.mergeObject(
      this.customThemes,
      customThemes,
    );

    if(this.selectedTheme){
      ThemesMenu.updateTheme(
        this.customThemes[this.selectedTheme].props,
      );
    }

    this.render();
  }

  getTemplateProps(props) {
    const copyProps = foundry.utils.deepClone(props);
    copyProps["--pf2e-subsystem-theming-application-image"] =
      copyProps["--pf2e-subsystem-theming-application-image"] === "ignore"
        ? ""
        : copyProps["--pf2e-subsystem-theming-application-image"].split(
            "../../../",
          )[1];
    copyProps["--pf2e-subsystem-theming-application-header-image"] =
      copyProps["--pf2e-subsystem-theming-application-header-image"] ===
      "ignore"
        ? ""
        : copyProps["--pf2e-subsystem-theming-application-header-image"].split(
            "../../../",
          )[1];
    return copyProps;
  }

  static getNextName = (customThemes) => {
    const unnamedNr = Object.values(customThemes).reduce((acc, x) => {
      const match = x.name.match(/^(?:NewTheme)(.*)$/);
      if (match?.length > 1 && !Number.isNaN(match[1])) {
        const nr = Number.parseInt(match[1]);
        acc = acc ? Math.max(acc, nr) : nr;
      }

      return acc;
    }, null);

    return !unnamedNr ? "NewTheme1" : `NewTheme${unnamedNr + 1}`;
  };

  static addTheme() {
    const newTheme = ThemesMenu.getNextName(this.customThemes);
    const id = foundry.utils.randomID();
    this.customThemes[id] = {
      name: newTheme,
      props: {
        "--pf2e-subsystem-theming-application": "#FFFFFF",
        "--pf2e-subsystem-theming-application-image": "ignore",
        "--pf2e-subsystem-theming-application-image-size": "cover",
        "--pf2e-subsystem-theming-application-image-repeat": "round",
        "--pf2e-subsystem-theming-application-image-position": "top",
        "--pf2e-subsystem-theming-application-header": "transparent",
        "--pf2e-subsystem-theming-application-header-image": "ignore",
        "--pf2e-subsystem-theming-application-header-image-size": "cover",
        "--pf2e-subsystem-theming-application-header-image-repeat": "round",
        "--pf2e-subsystem-theming-application-header-image-position": "top",
        "--pf2e-subsystem-theming-primary": "#FFFFFF",
        "--pf2e-subsystem-theming-primary-faded": "#FFFFFF",
        "--pf2e-subsystem-theming-secondary": "#FFFFFF",
        "--pf2e-subsystem-theming-tertiary": "#FFFFFF",
        "--pf2e-subsystem-theming-primary-accent": "#FFFFFF",
        "--pf2e-subsystem-theming-tertiary-accent": "#FFFFFF",
        "--pf2e-subsystem-theming-primary-color": "#FFFFFF",
        "--pf2e-subsystem-theming-text-shadow": "#000000",
        "--pf2e-subsystem-theming-main-hover": "#FFFFFF",
        "--pf2e-subsystem-theming-border": "#FFFFFF",
        "--pf2e-subsystem-theming-secondary-border": "#FFFFFF",
        "--pf2e-subsystem-theming-application-border": "#FFFFFF",
        "--pf2e-subsystem-theming-icon": "#FFFFFF",
        "--pf2e-subsystem-theming-secondary-icon": "#FFFFFF",
      },
    };
    this.selectedTheme = id;

    ThemesMenu.updateTheme(
      this.customThemes[this.selectedTheme].props,
    );

    this.render();
  }

  static deleteTheme(_, button) {
    this.customThemes = Object.keys(this.customThemes).reduce((acc, key) => {
      if (key !== button.dataset.theme) acc[key] = this.customThemes[key];
      return acc;
    }, {});
    if (button.dataset.theme === this.selectedTheme) this.selectedTheme = null;

    if (
      game.settings.get(MODULE_ID, "theme") ===
      button.dataset.theme
    )
      game.settings.set(
        MODULE_ID,
        "theme",
        "coreLight",
      );

    this.render();
  }

  static exportTheme(_, button) {
    const theme = this.customThemes[button.dataset.theme];
    saveDataToFile(
      JSON.stringify(theme, null, 2),
      "text/json",
      `SubsystemTheme_${slugify(theme.name)}.json`,
    );
  }

  static importTheme() {
    new Promise((resolve, reject) => {
      new ImportDialog(
        "SubsystemTheming.Menus.Themes.Import.Title",
        (jsonObject) => {
          if (!jsonObject || !jsonObject.props) {
            return game.i18n.localize(
              "SubsystemTheming.Menus.Themes.Import.FaultyImport",
            );
          }

          return null;
        },
        resolve,
        reject,
      ).render(true);
    }).then((data) => {
      const match = data.name.match(/^(?:NewTheme)(.*)$/);
      if (match && match.length > 1) {
        data.name = ThemesMenu.getNextName(this.customThemes);
      }

      const id = foundry.utils.randomID();
      this.customThemes[id] = { ...data, props: parseOldVariableNaming(data.props) };
      this.render();
    });
  }

  static selectTheme(_, button) {
    this.selectedTheme = button.dataset.theme;
    ThemesMenu.updateTheme(
      this.customThemes[this.selectedTheme].props,
    );
    
    this.render();
  }

  static async filePicker(_, button) {
    new FilePicker({
      type: "image",
      title: "Image Select",
      callback: async (path) => {
        foundry.utils.setProperty(this.customThemes, button.dataset.path, path);
        ThemesMenu.updateTheme(
          this.customThemes[this.selectedTheme].props,
        );
        this.render();
      },
    }).render(true);
  }

  static updateTheme(theme) {
    const updateTheme = foundry.utils.deepClone(theme);

    updateTheme["--pf2e-subsystem-theming-application-image"] = updateTheme[
      "--pf2e-subsystem-theming-application-image"
    ]
      ? `../../../${updateTheme["--pf2e-subsystem-theming-application-image"]}`
      : "ignore";

    updateTheme["--pf2e-subsystem-theming-application-header-image"] =
      updateTheme["--pf2e-subsystem-theming-application-header-image"]
        ? `../../../${updateTheme["--pf2e-subsystem-theming-application-header-image"]}`
        : "ignore";

    setupTheme(updateTheme);
  }

  static clearBackgroundImage(_, button) {
    this.customThemes[this.selectedTheme].props[button.dataset.theme] =
      "ignore";
    ThemesMenu.updateTheme(this.customThemes[this.selectedTheme].props);
    this.render();
  }

  static async save(options) {
    const caculatedThemes = Object.keys(this.customThemes).reduce(
      (acc, key) => {
        const backgroundImage =
          this.customThemes[key].props[
            "--pf2e-subsystem-theming-application-image"
          ];
        const headerBackgroundImage =
          this.customThemes[key].props[
            "--pf2e-subsystem-theming-application-header-image"
          ];
        acc[key] = {
          ...this.customThemes[key],
          props: {
            ...this.customThemes[key].props,
            ["--pf2e-subsystem-theming-application-image"]: backgroundImage
              ? `../../../${backgroundImage}`
              : "ignore",
            ["--pf2e-subsystem-theming-application-header-image"]:
              headerBackgroundImage
                ? `../../../${headerBackgroundImage}`
                : "ignore",
          },
        };
        return acc;
      },
      {},
    );
    await game.settings.set(
      MODULE_ID,
      "custom-themes",
      caculatedThemes,
    );

    const reload = await foundry.applications.api.DialogV2.confirm({
      id: "reload-world-confirm",
      modal: true,
      rejectClose: false,
      window: { title: "SETTINGS.ReloadPromptTitle" },
      position: { width: 400 },
      content: `<p>${game.i18n.localize("SETTINGS.ReloadPromptBody")}</p>`,
    });
    if (reload) {
      await game.socket.emit("reload");
      foundry.utils.debouncedReload();
    }

    this.close();
  }

  close = async (options) => {
    await game.socket.emit(SOCKET_ID, {
      action: socketEvent.ResetTheme,
      data: {},
    });

    Hooks.callAll(socketEvent.ResetTheme, {});

    return super.close(options);
  };
}
