import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.slate.700"),
            "--tw-prose-headings": theme("colors.slate.900"),
            "--tw-prose-links": theme("colors.primary.DEFAULT"),
            "--tw-prose-bold": theme("colors.slate.900"),
            "--tw-prose-quotes": theme("colors.slate.900"),

            maxWidth: "72ch",

            p: {
              lineHeight: "1.8",
              marginTop: "1.25em",
              marginBottom: "1.25em",
            },

            h2: {
              marginTop: "2.5em",
              marginBottom: "0.75em",
              fontWeight: "700",
            },

            h3: {
              marginTop: "2em",
              marginBottom: "0.5em",
              fontWeight: "600",
            },

            ul: {
              paddingLeft: "1.25em",
            },

            li: {
              marginTop: "0.5em",
              marginBottom: "0.5em",
            },

            blockquote: {
              fontStyle: "normal",
              fontWeight: "500",
              borderLeftWidth: "4px",
              borderLeftColor: theme("colors.primary.DEFAULT"),
              backgroundColor: theme("colors.slate.50"),
              paddingLeft: "1.5em",
              paddingTop: "1em",
              paddingBottom: "1em",
            },

            code: {
              backgroundColor: theme("colors.slate.100"),
              padding: "0.2em 0.4em",
              borderRadius: "0.25rem",
              fontWeight: "500",
            },

            img: {
              borderRadius: "1rem",
            },
          },
        },

        invert: {
          css: {
            "--tw-prose-body": theme("colors.slate.300"),
            "--tw-prose-headings": theme("colors.white"),
            "--tw-prose-links": theme("colors.primary.DEFAULT"),
            "--tw-prose-bold": theme("colors.white"),
            "--tw-prose-quotes": theme("colors.white"),

            blockquote: {
              backgroundColor: "rgba(255,255,255,0.05)",
            },

            code: {
              backgroundColor: "rgba(255,255,255,0.1)",
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};

export default config;
