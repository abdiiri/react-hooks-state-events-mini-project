module.exports = {
<<<<<<< HEAD
  presets: ["@babel/preset-env", "@babel/preset-react"],
=======
  presets: [
    "@babel/preset-env",
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
>>>>>>> 4f889b3043796e2c07ef2763de1ab64e6b0ae22f
};
