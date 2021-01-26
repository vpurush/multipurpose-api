const path = require("path");

const dev = false;

module.exports = {
  entry: {
    getCharacterMap: path.join(__dirname, "/src/mahabharat/getCharacterMap.ts"),
  },
  module: {
    rules: [
      // JavaScript
      {
        test: /\.[j|t]s$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "/lib"),
    libraryTarget: "commonjs",
  },
  resolve: {
    extensions: [".js", ".ts"],
    fallback: {
      util: require.resolve("util/"),
    },
  },
  mode: dev ? "development" : "production",
};
