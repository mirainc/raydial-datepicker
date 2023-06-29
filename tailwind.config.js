/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {},
  variants: {},
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".calendar": {
          padding: `${theme("spacing.5")} !important`,
          ".calendar-wrapper": {
            minWidth: "100%",
            width: "100%",
            padding: `${theme("spacing.0")} !important`,
            ".calendar-header": {
              padding: `${theme("spacing.0")} !important`,
              ".calendar-wrapper": {
                ".calendar-header-previous, .calendar-header-next": {
                  color: theme("colors.gray.500")
                }
              }
            },
            color: theme("colors.black"),
            ".calendar-days": {
              ".calendar-day-wrapper": {
                borderRadius: theme("borderRadius.xl"),
                "button.calendar-day": {
                  aspectRatio: "1/1",
                  width: `100% !important`,
                  height: `100% !important`,
                  "&.calendar-day-selected": {
                    backgroundColor: theme("colors.primary.light")
                  }
                },
                "&.calendar-day-active": {
                  backgroundColor: theme("colors.primary.light"),
                  "button.calendar-day": {
                    backgroundColor: theme("colors.primary.DEFAULT")
                  },
                  "&.calendar-end-day": {
                    borderTopLeftRadius: "unset",
                    borderBottomLeftRadius: "unset",
                    overflow: "hidden"
                  },
                  "&.calendar-start-day": {
                    borderTopRightRadius: "unset",
                    borderBottomRightRadius: "unset",
                    overflow: "hidden"
                  }
                }
              }
            },
            ".calendar-day-previous , .calendar-day-next": {
              color: theme("colors.stone.300")
            }
          }
        },
        "@media (min-width: 768px)": {
          ".calendar": {
            ".calendar-wrapper": {
              minWidth: 297,
              width: "100%"
            }
          }
        }
      });
    }),
    require("@tailwindcss/forms")
  ],
  presets: [require("raydiant-tailwind")]
};
