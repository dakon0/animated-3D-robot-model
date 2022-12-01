const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    clean: true,
    filename: "./main.js",
    path: `${__dirname}/docs`,
  },
  plugins: [
    new CopyPlugin({ patterns: [{ from: "./src", filter: (name) => !name.endsWith(".js")  }] })
  ]
};