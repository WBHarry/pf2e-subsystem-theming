import { MODULE_ID } from "../data/constants";
import { extendedThemes } from "../styles/themes/themes";
import { parseOldVariableNaming, versionCompare } from "./helpers";
import { currentVersion, setupTheme } from "./setup";

export const handleDataMigration = async () => {
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
            }, newSubsystemCustomThemes))
          
    
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
}

