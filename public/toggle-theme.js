const primaryColorScheme = ""; // "light" | "dark"

// Get theme data from local storage
const currentTheme = localStorage.getItem("theme");

function getPreferTheme() {
  // return theme value in local storage if it is set
  if (currentTheme) return currentTheme;

  // return primary color scheme if it is set
  if (primaryColorScheme) return primaryColorScheme;

  // return user device's prefer color scheme
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

let themeValue = getPreferTheme();

function setPreference() {
  localStorage.setItem("theme", themeValue);
  reflectPreference();
}

function reflectPreference() {
  document.firstElementChild.setAttribute("data-theme", themeValue);

  document.querySelector("#theme-btn")?.setAttribute("aria-label", themeValue);

  // Get a reference to the body element
  const body = document.body;

  // Check if the body element exists before using getComputedStyle
  if (body) {
    // Get the computed styles for the body element
    const computedStyles = window.getComputedStyle(body);

    // Get the background color property
    const bgColor = computedStyles.backgroundColor;

    // Set the background color in <meta theme-color ... />
    document
      .querySelector("meta[name='theme-color']")
      ?.setAttribute("content", bgColor);
  }
}

// set early so no page flashes / CSS is made aware
reflectPreference();




/* ======= FONT ========= */

const primaryFont = ""; // "sans" | "mono"

// Get font data from local storage
const currentFont = localStorage.getItem("font");

function getPreferFont() {
// return font value in local storage if it is set
if (currentFont) return currentFont;

// return primary font if it is set
if (primaryFont) return primaryFont;

// return user device's prefer font
return window.matchMedia("(prefers-font: mono)").matches
    ? "mono"
    : "sans";
}

let fontValue = getPreferFont();

function setFontPreference() {
    localStorage.setItem("font", fontValue);
    reflectFontPreference();
}

function reflectFontPreference() {
    document.firstElementChild.setAttribute("data-font", fontValue);

    document.querySelector("#font-btn")?.setAttribute("aria-label", fontValue);

    // Get a reference to the body element
    const body = document.body;

    // Check if the body element exists before using getComputedStyle
    if (body) {
        // Get the computed styles for the body element
        const computedStyles = window.getComputedStyle(body);

        // Get the font family property
        const font = computedStyles.fontFamily;

        // Set the background color in <meta font ... />
        document
        .querySelector("meta[name='font']")
        ?.setAttribute("content", font);
    }
}

// set early so no page flashes / CSS is made aware
reflectFontPreference();

window.onload = () => {
    function setFontFeature() {
        // set on load so screen readers can get the latest value on the button
        reflectFontPreference();

        // now this script can find and listen for clicks on the control
        document.querySelector("#font-btn")?.addEventListener("click", () => {
        fontValue = fontValue === "sans" ? "mono" : "sans";
        setFontPreference();
        });
    }

    setFontFeature();

    // Runs on view transitions navigation
    document.addEventListener("astro:after-swap", setFontFeature);

    function setThemeFeature() {
        // set on load so screen readers can get the latest value on the button
        reflectPreference();
    
        // now this script can find and listen for clicks on the control
        document.querySelector("#theme-btn")?.addEventListener("click", () => {
          themeValue = themeValue === "light" ? "dark" : "light";
          setPreference();
        });
      }
    
      setThemeFeature();
    
      // Runs on view transitions navigation
      document.addEventListener("astro:after-swap", setThemeFeature);
};

// sync with system changes
window
.matchMedia("(prefers-font: mono)")
.addEventListener("change", ({ matches: isMono }) => {
    fontValue = isMono ? "mono" : "sans";
    setFontPreference();
});

// sync with system changes
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", ({ matches: isDark }) => {
    themeValue = isDark ? "dark" : "light";
    setPreference();
  });