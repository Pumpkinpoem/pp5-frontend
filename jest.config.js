module.exports = {
    transformIgnorePatterns: [
      "/node_modules/(?!axios/)" // This tells Jest to transform axios
    ],
    transform: {
      "^.+\\.jsx?$": "babel-jest", // Transforms JS and JSX files using Babel
    },
    moduleFileExtensions: ["js", "jsx", "json", "node"],
  };
  