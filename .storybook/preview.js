import '../src/assets/css/index.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "fullscreen",
  viewport: {
    viewports: {
      xs: {
        name: "Xs (0-549px)",
        styles: {
          width: "375px",
          height: "100%",
        },
      },
      sm: {
        name: "Sm (550-959px)",
        styles: {
          width: "768px",
          height: "100%",
        },
      },
      md: {
        name: "Md (960-1135px)",
        styles: {
          width: "1024px",
          height: "100%",
        },
      },
      mdp: {
        name: "Md+ (1136-1439px)",
        styles: {
          width: "1280px",
          height: "100%",
        },
      },
      lg: {
        name: "Lg (1440-1599px)",
        styles: {
          width: "1440px",
          height: "100%",
        },
      },
      xl: {
        name: "Xl (+1600px)",
        styles: {
          width: "1920px",
          height: "100%",
        },
      },
    },
  },
  options: {
    storySort: {
      order: ['General', 'Hygiene', 'PLP', 'PDP', 'Checkout', 'Account', '🚧 WIP Below ⬇️', '*'],
    },
  },
};
