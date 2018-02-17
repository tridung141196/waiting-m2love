module.exports = {
  exportPathMap: function() {
    return {
      "/": { page: "/" }
    };
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "https://tridung141196.github.io/waiting-m2love" : ""
};
