
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/_includes/css/style.css");
  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addWatchTarget("./src/_includes/css/style.css");
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "public",
    },
    browserSyncConfig: {
      files: './public/css/style.css'
    },
    markdownTemplateEngine: "njk",
  };
};
