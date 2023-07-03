/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [ 
    "../src/pages/**/*.stories.mdx",
    "../src/stories/**/*.stories.tsx",
    '../src/**/*.mdx',
  ],
   addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-docs",
    "@storybook/addon-a11y"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
