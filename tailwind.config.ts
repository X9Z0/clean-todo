// import type { Config } from "tailwindcss";
//
// const config: Config = {
//   darkMode: ["class"], // Enables dark mode based on class
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         // Generic colors already defined
//         background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",
//         card: {
//           DEFAULT: "hsl(var(--card))",
//           foreground: "hsl(var(--card-foreground))",
//         },
//         popover: {
//           DEFAULT: "hsl(var(--popover))",
//           foreground: "hsl(var(--popover-foreground))",
//         },
//         primary: {
//           DEFAULT: "hsl(var(--primary))",
//           foreground: "hsl(var(--primary-foreground))",
//         },
//         secondary: {
//           DEFAULT: "hsl(var(--secondary))",
//           foreground: "hsl(var(--secondary-foreground))",
//         },
//         muted: {
//           DEFAULT: "hsl(var(--muted))",
//           foreground: "hsl(var(--muted-foreground))",
//         },
//         accent: {
//           DEFAULT: "hsl(var(--accent))",
//           foreground: "hsl(var(--accent-foreground))",
//         },
//         destructive: {
//           DEFAULT: "hsl(var(--destructive))",
//           foreground: "hsl(var(--destructive-foreground))",
//         },
//         border: "hsl(var(--border))",
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",
//         chart: {
//           "1": "hsl(var(--chart-1))",
//           "2": "hsl(var(--chart-2))",
//           "3": "hsl(var(--chart-3))",
//           "4": "hsl(var(--chart-4))",
//           "5": "hsl(var(--chart-5))",
//         },
//         // Adding Sakura, Red, Black themes
//         sakura: {
//           bg: "#f7ebe0",
//           cardBg: "#f0d9d1",
//           text: "#a66466",
//           buttonBg: "#a66466",
//           buttonHover: "#8e5151",
//           actionButtonBg: "#f0d9d1",
//           actionButtonHover: "#e2c1b8",
//         },
//         red: {
//           bg: "#fdecea",
//           cardBg: "#f9d0ce",
//           text: "#b33939",
//           buttonBg: "#b33939",
//           buttonHover: "#992626",
//           actionButtonBg: "#f9d0ce",
//           actionButtonHover: "#e6b4b2",
//         },
//         black: {
//           bg: "#eaeaea",
//           cardBg: "#d5d5d5",
//           text: "#4d4d4d",
//           buttonBg: "#4d4d4d",
//           buttonHover: "#333333",
//           actionButtonBg: "#d5d5d5",
//           actionButtonHover: "#bfbfbf",
//         },
//       },
//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },
//       keyframes: {
//         strikeIn: {
//           "0%": { width: "0%" },
//           "100%": { width: "100%" },
//         },
//         strikeOut: {
//           "0%": { width: "100%" },
//           "100%": { width: "0%" },
//         },
//       },
//       animation: {
//         strikeIn: "strikeIn 0.4s forwards",
//         strikeOut: "strikeOut 0.4s forwards",
//       },
//     },
//   },
//   plugins: [require("tailwindcss-animate")],
// };
//
// export default config;
//

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        strikeIn: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        strikeOut: {
          "0%": { width: "100%" },
          "100%": { width: "0%" },
        },
      },
      animation: {
        strikeIn: "strikeIn 0.4s forwards",
        strikeOut: "strikeOut 0.4s forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
