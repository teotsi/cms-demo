path = require("path");

module.exports = {
  future: {
    webpack5: true,
  },
  webpack(config) {

    config.resolve.alias["@app"] = path.resolve(__dirname, "./src"),
    config.resolve.alias["@components"] = path.resolve(__dirname, "./src/components"),
    config.resolve.alias["@icons"] = path.resolve(__dirname, "./src/assets/icons"),
    config.resolve.alias["@utils"] = path.resolve(__dirname, "./src/utils"),
    config.resolve.alias["@zustand"] = path.resolve(__dirname, "./src/zustand"),
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};