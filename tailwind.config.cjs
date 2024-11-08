function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    // Remove the following screen breakpoint or add other breakpoints
    // if one breakpoint is not enough for you
    screens: {
      sm: "640px",
    },

    // Uncomment the following extend
    // if existing Tailwind color palette will be used
    extend: {
        /*typography: (theme) => ({
            DEFAULT: {
                css: {
                    fontSize: {
                        fontSize: "24px",
                    },
                },
            },
            sm: {
                css: {
                    fontSize: {
                        fontSize: "24px",
                    }
                }
            }
        }),*/
        textColor: {
        skin: {
            base: withOpacity("--color-text-base"),
            accent: withOpacity("--color-accent"),
            internal: withOpacity("--color-internal"),
            inverted: withOpacity("--color-fill"),
        },
        },
        backgroundColor: {
        skin: {
            fill: withOpacity("--color-fill"),
            accent: withOpacity("--color-accent"),
            inverted: withOpacity("--color-text-base"),
            card: withOpacity("--color-card"),
            "card-muted": withOpacity("--color-card-muted"),
            internal: withOpacity("--color-internal"),
            link: withOpacity("--color-link"),
        },
        },
        outlineColor: {
        skin: {
            fill: withOpacity("--color-accent"),
            base: withOpacity("--color-base"),
        },
        },
        borderColor: {
        skin: {
            line: withOpacity("--color-border"),
            base: withOpacity("--color-fill"),
            fill: withOpacity("--color-text-base"),
            accent: withOpacity("--color-accent"),
            internal: withOpacity("--color-internal"),
            "card-muted": withOpacity("--color-card-muted"),
            link: withOpacity("--color-link"),
            visited: withOpacity("--color-link-visited"),
        },
        },
        fill: {
        skin: {
            base: withOpacity("--color-text-base"),
            accent: withOpacity("--color-accent"),
            internal: withOpacity("--color-internal"),
        },
        transparent: "transparent",
        },
        fontFamily: {
        mono: ["Roboto Mono", "monospace"],
        sans: ["ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"],
        },
    },
  },
};
