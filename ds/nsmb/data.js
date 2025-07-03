EJS_gameName = "nsmb";
EJS_core = "nds";
//EJS_DEBUG_XX = true;
EJS_defaultOptions = {
    melonds_screen_layout: "Hybrid Top",
    melonds_audio_interpolation: "Cosine",
    melonds_audio_bitrate: "16-bit",
    retroarch_core: "desmume",
    shader: "Bicubic",
    lockMouse: false,
    melonds_touch_mode: "Touch",
    melonds_boot_directly: "enabled",
    //"menu-bar-button": "hidden"
}


EJS_pathtodata = "/data/";
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
EJS_biosUrl = ["/ds/bios7.bin","/ds/bios9.bin","/ds/firmware.bin"];
EJS_gameUrl = window.gameBlob;

window.addEventListener("mousemove", (ev) => {
    let menubar = document.getElementsByClassName("ejs_menu_bar").item(0);
    if (menubar != null && !menubar.classList.contains("ejs_menu_bar_hidden")){
        if (window.disableEmulatorMenu == true) {
            menubar.classList.add("ejs_menu_bar_hidden");
        }
    }
})