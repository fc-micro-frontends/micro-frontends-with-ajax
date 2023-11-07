module.exports = {
  mode: "development",
  entry: "./src/fragments/recommendation/main.ts",
  output: {
    filename: "index.js",
    path: __dirname + "/dist/fragments/recommendation",
  },
  resolve: {
    extensions: [".ts"],
  },
  module: {
    rules: [
      {
        test: /\.ts/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-typescript"],
          },
        },
      },
    ],
  },
};
