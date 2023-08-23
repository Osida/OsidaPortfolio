import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'ycptx5',
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
