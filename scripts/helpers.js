export const slugify = (name) => {
    return name.toLowerCase().replaceAll(" ", "-").replaceAll(".", "");
};

export const versionCompare = (current, target) => {
    const currentSplit = current.split(".").map((x) => Number.parseInt(x));
    const targetSplit = target.split(".").map((x) => Number.parseInt(x));
    for (var i = 0; i < currentSplit.length; i++) {
        if (currentSplit[i] < targetSplit[i]) return true;
        if (currentSplit[i] > targetSplit[i]) return false;
    }

    return false;
};

export const saveDataToFile = (data, type, filename) => {
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

export const readTextFromFile = (file) => {
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

export const parseOldVariableNaming = (data) => {
    return Object.keys(data).reduce((acc, key) => {
        const correctedKey = key.replace('--pf2e-bestiary-tracking', '--pf2e-subsystem-theming');
        acc[correctedKey] = data[key];

        return acc;
    }, {});
};