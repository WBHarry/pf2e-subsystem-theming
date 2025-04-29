const MODULE_ID = 'pf2e-subsystem-theming';
const SOCKET_ID = `module.${MODULE_ID}`;

const coreDark = {
  "--pf2e-subsystem-theming-application-image": "ignore",
  "--pf2e-subsystem-theming-application": "#12101fe6",
  "--pf2e-subsystem-theming-application-header": "transparent",
  "--pf2e-subsystem-theming-application-header-image": "ignore",
  "--pf2e-subsystem-theming-application-header-image-size": "cover",
  "--pf2e-subsystem-theming-application-header-image-repeat": "initial",
  "--pf2e-subsystem-theming-application-header-image-position": "left",
  "--pf2e-subsystem-theming-primary": "#5e0000",
  "--pf2e-subsystem-theming-primary-faded": "#5e000080",
  "--pf2e-subsystem-theming-secondary": "#4b4b8c",
  "--pf2e-subsystem-theming-tertiary": "#007149",
  "--pf2e-subsystem-theming-primary-accent": "#ad0303",
  "--pf2e-subsystem-theming-secondary-accent": "#5151e4",
  "--pf2e-subsystem-theming-tertiary-accent": "#76963f",
  "--pf2e-subsystem-theming-primary-color": "#FFFFFF",
  "--pf2e-subsystem-theming-text-shadow": "#000000",
  "--pf2e-subsystem-theming-main-hover": "#FFFFFF",
  "--pf2e-subsystem-theming-border": "#ababab",
  "--pf2e-subsystem-theming-secondary-border": "#ffd700",
  "--pf2e-subsystem-theming-application-border": "#f5deb3",
  "--pf2e-subsystem-theming-icon": "#f7f3e8",
  "--pf2e-subsystem-theming-secondary-icon": "#FFFFFF",
};

const coreLight = {
  "--pf2e-subsystem-theming-application-image": "../../../ui/parchment.jpg",
  "--pf2e-subsystem-theming-application-header": "#444444",
  "--pf2e-subsystem-theming-application-header-image": "ignore",
  "--pf2e-subsystem-theming-application-header-image-size": "cover",
  "--pf2e-subsystem-theming-application-header-image-repeat": "initial",
  "--pf2e-subsystem-theming-application-header-image-position": "left",
  "--pf2e-subsystem-theming-application-image-repeat": "repeat",
  "--pf2e-subsystem-theming-application-image-position": "left",
  "--pf2e-subsystem-theming-application": "initial",
  "--pf2e-subsystem-theming-primary": "#d4bdac",
  "--pf2e-subsystem-theming-primary-faded": "#d4bdac40",
  "--pf2e-subsystem-theming-secondary": "#62b356",
  "--pf2e-subsystem-theming-tertiary": "#62acce",
  "--pf2e-subsystem-theming-primary-accent": "#fff1db",
  "--pf2e-subsystem-theming-secondary-accent": "#53e03e",
  "--pf2e-subsystem-theming-tertiary-accent": "#9de0ff",
  "--pf2e-subsystem-theming-primary-color": "#000000",
  "--pf2e-subsystem-theming-text-shadow": "#FFFFFF",
  "--pf2e-subsystem-theming-main-hover": "#1c8efe",
  "--pf2e-subsystem-theming-border": "#000000",
  "--pf2e-subsystem-theming-secondary-border": "#82acff",
  "--pf2e-subsystem-theming-application-border": "initial",
  "--pf2e-subsystem-theming-icon": "#000000",
  "--pf2e-subsystem-theming-secondary-icon": "#000000",
};

const nebula = {
  "--pf2e-subsystem-theming-application-image":
    "../../../modules/pf2e-subsystem-theming/assets/Space.webp",
  "--pf2e-subsystem-theming-application-header": "transparent",
  "--pf2e-subsystem-theming-application-header-image": "ignore",
  "--pf2e-subsystem-theming-application-header-image-size": "cover",
  "--pf2e-subsystem-theming-application-header-image-repeat": "initial",
  "--pf2e-subsystem-theming-application-header-image-position": "left",
  "--pf2e-subsystem-theming-application-image-size": "contain",
  "--pf2e-subsystem-theming-application-image-repeat": "round",
  "--pf2e-subsystem-theming-application-image-position": "left",
  "--pf2e-subsystem-theming-application-secondary-image":
    "linear-gradient(#8a549c, #9198e5)",
  "--pf2e-subsystem-theming-application": "",
  "--pf2e-subsystem-theming-primary-outline": "drop-shadow(0 0 3px #808080)",
  "--pf2e-subsystem-theming-primary": "#73a9bc",
  "--pf2e-subsystem-theming-primary-faded": "#73a9bc80",
  "--pf2e-subsystem-theming-secondary": "#cd7e23",
  "--pf2e-subsystem-theming-tertiary": "#7476a6",
  "--pf2e-subsystem-theming-primary-accent": "#0888b5",
  "--pf2e-subsystem-theming-secondary-accent": "#b181d1",
  "--pf2e-subsystem-theming-tertiary-accent": "#888bc0",
  "--pf2e-subsystem-theming-primary-color": "#f7f3e8",
  "--pf2e-subsystem-theming-text-shadow": "#000000",
  "--pf2e-subsystem-theming-main-hover": "",
  "--pf2e-subsystem-theming-border": "#e4e41e",
  "--pf2e-subsystem-theming-secondary-border": "#ffd700",
  "--pf2e-subsystem-theming-application-border": "#e4e41e",
  "--pf2e-subsystem-theming-icon": "#FFFFFF",
  "--pf2e-subsystem-theming-secondary-icon": "#f7f3e8",
};

const viscera = {
  "--pf2e-subsystem-theming-application-image":
    "../../../modules/pf2e-subsystem-theming/assets/Viscera.webp",
  "--pf2e-subsystem-theming-application-header": "transparent",
  "--pf2e-subsystem-theming-application-header-image": "ignore",
  "--pf2e-subsystem-theming-application-header-image-size": "cover",
  "--pf2e-subsystem-theming-application-header-image-repeat": "initial",
  "--pf2e-subsystem-theming-application-header-image-position": "left",
  "--pf2e-subsystem-theming-application-image-size": "cover",
  "--pf2e-subsystem-theming-application-image-repeat": "initial",
  "--pf2e-subsystem-theming-application-image-position": "left",
  "--pf2e-subsystem-theming-application-secondary-image": "",
  "--pf2e-subsystem-theming-application": "",
  "--pf2e-subsystem-theming-primary-outline": "drop-shadow(0 0 3px #808080)",
  "--pf2e-subsystem-theming-primary": "#813f3f",
  "--pf2e-subsystem-theming-primary-faded": "#813f3f80",
  "--pf2e-subsystem-theming-secondary": "#483c70",
  "--pf2e-subsystem-theming-tertiary": "#ed143d",
  "--pf2e-subsystem-theming-primary-accent": "#9f2828",
  "--pf2e-subsystem-theming-secondary-accent": "#593db6",
  "--pf2e-subsystem-theming-tertiary-accent": "#c12c2c",
  "--pf2e-subsystem-theming-primary-color": "#FFFFFF",
  "--pf2e-subsystem-theming-text-shadow": "#000000",
  "--pf2e-subsystem-theming-main-hover": "#ff0000",
  "--pf2e-subsystem-theming-border": "#ffa500",
  "--pf2e-subsystem-theming-secondary-border": "#ffd700",
  "--pf2e-subsystem-theming-application-border": "#ffa500",
  "--pf2e-subsystem-theming-icon": "#FFFFFF",
  "--pf2e-subsystem-theming-secondary-icon": "#FFFFFF",
};

const water = {
  "--pf2e-subsystem-theming-application-image":
    "../../../modules/pf2e-subsystem-theming/assets/Water.webp",
  "--pf2e-subsystem-theming-application-image-size": "cover",
  "--pf2e-subsystem-theming-application-image-repeat": "initial",
  "--pf2e-subsystem-theming-application-image-position": "left",
  "--pf2e-subsystem-theming-application-header": "transparent",
  "--pf2e-subsystem-theming-application-header-image": "ignore",
  "--pf2e-subsystem-theming-application-header-image-size": "cover",
  "--pf2e-subsystem-theming-application-header-image-repeat": "initial",
  "--pf2e-subsystem-theming-application-header-image-position": "left",
  "--pf2e-subsystem-theming-application-secondary-image": "",
  "--pf2e-subsystem-theming-application": "",
  "--pf2e-subsystem-theming-primary-outline": "drop-shadow(0 0 3px #808080)",
  "--pf2e-subsystem-theming-primary": "#1ca671",
  "--pf2e-subsystem-theming-primary-faded": "#1ca67180",
  "--pf2e-subsystem-theming-secondary": "#8b0d8b",
  "--pf2e-subsystem-theming-tertiary": "#602fa1",
  "--pf2e-subsystem-theming-primary-accent": "#0f7e2fbf",
  "--pf2e-subsystem-theming-secondary-accent": "#c214c2",
  "--pf2e-subsystem-theming-tertiary-accent": "#681ad1",
  "--pf2e-subsystem-theming-primary-color": "#f7f3e8",
  "--pf2e-subsystem-theming-text-shadow": "#000000",
  "--pf2e-subsystem-theming-main-hover": "#FFFFFF",
  "--pf2e-subsystem-theming-border": "#c7ffed",
  "--pf2e-subsystem-theming-secondary-border": "#ffd700",
  "--pf2e-subsystem-theming-application-border": "#c7ffed",
  "--pf2e-subsystem-theming-icon": "#FFFFFF",
  "--pf2e-subsystem-theming-secondary-icon": "#f7f3e8",
};

const bestiaryThemes = {
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

const extendedThemes = () => {
  const customThemes = game.settings.get(
    MODULE_ID,
    "custom-themes",
  );
  return { ...bestiaryThemes, ...customThemes };
};

const themeChoices = {
  coreLight: "SubsystemTheming.Themes.CoreLight",
  coreDark: "SubsystemTheming.Themes.CoreDark",
  nebula: "SubsystemTheming.Themes.Nebula",
  viscera: "SubsystemTheming.Themes.Viscera",
  water: "SubsystemTheming.Themes.Water",
};

const defaultThemeChoices = () => {
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

const extendedThemeChoices = () => {
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

const slugify = (name) => {
    return name.toLowerCase().replaceAll(" ", "-").replaceAll(".", "");
};

const saveDataToFile = (data, type, filename) => {
    const blob = new Blob([data], { type: type });

    // Create an element to trigger the download
    let a = document.createElement("a");
    a.href = window.URL.createObjectURL(blob);
    a.download = filename;

    // Dispatch a click event to the element
    a.dispatchEvent(
        new MouseEvent("click", { bubbles: true, cancelable: true, view: window }),
    );
    setTimeout(() => window.URL.revokeObjectURL(a.href), 100);
};

const readTextFromFile = (file) => {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
        reader.onload = (ev) => {
            resolve(reader.result);
        };
        reader.onerror = (ev) => {
            reader.abort();
            reject();
        };
        reader.readAsText(file);
    });
};

const parseOldVariableNaming = (data) => {
    return Object.keys(data).reduce((acc, key) => {
        const correctedKey = key.replace('--pf2e-bestiary-tracking', '--pf2e-subsystem-theming');
        acc[correctedKey] = data[key];

        return acc;
    }, {});
};

function handleSocketEvent({ action = null, data = {} } = {}) {
    switch (action) {
      case socketEvent.ResetTheme:
        Hooks.callAll(socketEvent.ResetTheme, {});
    }
  }
  
  const socketEvent = {
    ResetTheme: "ResetTheme",
  };

const { HandlebarsApplicationMixin: HandlebarsApplicationMixin$1, ApplicationV2: ApplicationV2$1 } = foundry.applications.api;

class ImportDialog extends HandlebarsApplicationMixin$1(
  ApplicationV2$1,
) {
  constructor(title, validation, resolve, reject) {
    super({});

    this.titleName = title;
    this.validation = validation;
    this.resolve = resolve;
    this.reject = reject;
  }

  get title() {
    return game.i18n.localize(this.titleName);
  }

  static DEFAULT_OPTIONS = {
    tag: "form",
    id: "pf2e-subsystem-theming-import-dialog",
    classes: ["theme-import-dialog"],
    position: { width: 400, height: "auto" },
    actions: {
      importFile: this.importFile,
    },
    form: { handler: this.updateData, submitOnChange: false },
  };

  static PARTS = {
    application: {
      id: "theme-import-dialog",
      template: "modules/pf2e-subsystem-theming/templates/importDialog.hbs",
    },
  };

  async _prepareContext(_options) {
    const context = await super._prepareContext(_options);
    context.fileData = this.fileData;
    context.importName = this.importName;

    return context;
  }

  _attachPartListeners(partId, htmlElement, options) {
    super._attachPartListeners(partId, htmlElement, options);
    $(htmlElement)
      .find(".file-path")
      .on("change", async (event) => {
        const nameElement = $(this.element).find(".name-field")[0];
        const importButton = $(this.element).find(
          'button[data-action="importFile"]',
        )[0];
        if (!event.currentTarget.value) {
          $(importButton).prop("disabled", true);
          $(nameElement).prop("disabled", true);
          nameElement.value = "";
        } else {
          const text = await readTextFromFile(event.currentTarget.files[0]);
          let jsonObject = null;
          try {
            jsonObject = JSON.parse(text);
          } catch {}

          const validationError = this.validation(jsonObject);
          if (validationError) {
            ui.notifications.error(validationError);
            event.currentTarget.value = "";
            return;
          }

          $(importButton).prop("disabled", false);
          $(nameElement).prop("disabled", false);
          nameElement.value = jsonObject.system?.name?.value ?? jsonObject.name;
        }
      });
  }

  close(options) {
    this.reject();
    super.close(options);
  }

  static async importFile() {
    const files = $(this.element).find(".file-path")[0].files;
    const name = $(this.element).find(".name-field")[0].value;

    if (!name) {
      ui.notifications.error(
        game.i18n.localize("PF2EBestiary.ImportDialog.MissingName"),
      );
      return;
    }

    await readTextFromFile(files[0]).then((json) => {
      const data = JSON.parse(json);
      data.name = name;
      if (data.system?.name?.value) {
        data.system.name.value = name;
      }

      this.resolve(data);
    });
    this.close();
  }

  //   static async updateData(event, element, formData) {
  //     const updateData = foundry.utils.expandObject(formData.object);
  //     this.fileData = updateData.fileData;
  //     this.importName = updateData.importName;

  //     this.render();
  //   }
}

const { HandlebarsApplicationMixin, ApplicationV2 } = foundry.applications.api;

class ThemesMenu extends HandlebarsApplicationMixin(
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

const currentVersion = '0.9.1';

const registerGameSettings = () => {
    game.settings.register(MODULE_ID, "version", {
      name: "",
      hint: "",
      scope: "world",
      config: false,
      type: String,
      default: "",
    });

    game.settings.register(MODULE_ID, "old-migration-done", {
      name: "",
      hint: "",
      scope: "world",
      config: false,
      type: Boolean,
      default: "",
    });

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

const setupTheme = (theme) => {
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

const handleDataMigration = async () => {
    if (!game.user.isGM) return;
  
    var version = game.settings.get(MODULE_ID, "version");
    if (!version) {
      version = currentVersion;
      await game.settings.set(MODULE_ID, "version", version);
    }

    const oldMigrationDone = game.settings.get(MODULE_ID, "old-migration-done");
    if (!oldMigrationDone) {
        if(game.modules.get('pf2e-bestiary-tracking')?.active){
            const oldBestiaryCustomThemes = game.settings.get('pf2e-bestiary-tracking', 'custom-themes');
            const newSubsystemCustomThemes = game.settings.get(MODULE_ID, 'custom-themes');
            await game.settings.set(MODULE_ID, 'custom-themes', Object.keys(oldBestiaryCustomThemes).reduce((acc, key) => {
              acc[key] = { ...oldBestiaryCustomThemes[key], props: parseOldVariableNaming(oldBestiaryCustomThemes[key].props) };
        
              return acc;
            }, newSubsystemCustomThemes));
          
    
            const oldBestiaryTheme = game.settings.get('pf2e-bestiary-tracking', 'bestiary-theme');
            const newSubsystemTheme = game.settings.get(MODULE_ID, 'theme');
            await game.settings.set(MODULE_ID, 'theme', oldBestiaryTheme ? oldBestiaryTheme : newSubsystemTheme);
        
            const oldBestiaryDefaultTheme = game.settings.get('pf2e-bestiary-tracking', 'bestiary-default-theme');
            const newSubsystemDefaultTheme = game.settings.get(MODULE_ID, 'default-theme');
            await game.settings.set(MODULE_ID, 'default-theme', oldBestiaryDefaultTheme ? oldBestiaryDefaultTheme : newSubsystemDefaultTheme);

            const currentTheme = game.settings.get(MODULE_ID, 'theme');
            const defaultTheme = game.settings.get(MODULE_ID, 'default-theme');
            const updateTheme = currentTheme === 'default' ? defaultTheme : currentTheme;
            setupTheme(extendedThemes()[updateTheme].props);

            await game.settings.set(MODULE_ID, "old-migration-done", true);
        }
    }
};

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
//# sourceMappingURL=SubsystemTheming.js.map
