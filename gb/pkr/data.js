EJS_gameName = "pkr";
EJS_core = "gb";
//EJS_DEBUG_XX = true;
EJS_defaultOptions = {

    //"menu-bar-button": "hidden"
}


EJS_pathtodata = "/app-ejs/data/";
EJS_player = "#game";
EJS_color = "#242424";
EJS_backgroundColor = "#000";
EJS_alignStartButton = "center";
EJS_startOnLoaded = true;
EJS_Buttons = {
    playPause: {
        visible: false,
    },
    cheat: {
        visible: false,
    },
    screenshot: {
        visible: false,
    },
    loadState: {
        visible: false,
    },
    saveState: {
        visible: false,
    },
    quickSave: {
        visible: false,
    },
    quickLoad: {
        visible: false,
    },
    screenRecord: {
        visible: false,
    },
    cacheManager: false,
    exitEmulation: false,
    settings: false,
    fullscreen: false,
    contextMenu: false,
};
EJS_biosUrl = ["/app-ejs/gb/gb_bios.bin", "/app-ejs/gb/gbc_bios.bin"];
EJS_gameUrl = "/app-ejs/gb/pkr/pkr.data";

window.addEventListener("mousemove", (ev) => {
    let menubar = document.getElementsByClassName("ejs_menu_bar").item(0);
    if (menubar != null && !menubar.classList.contains("ejs_menu_bar_hidden")) {
        if (window.disableEmulatorMenu == true) {
            menubar.classList.add("ejs_menu_bar_hidden");
        }
    }
})