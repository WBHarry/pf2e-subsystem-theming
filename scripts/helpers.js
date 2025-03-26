export const slugify = (name) => {
    return name.toLowerCase().replaceAll(" ", "-").replaceAll(".", "");
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