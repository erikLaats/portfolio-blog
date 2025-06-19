
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/_includes/css/style.css");
  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addWatchTarget("./src/_includes/css/style.css");
  eleventyConfig.addPassthroughCopy("./src/_includes/js/main.js");
  eleventyConfig.addWatchTarget("./src/_includes/js/main.js");
  eleventyConfig.addPassthroughCopy("./src/_includes/favicon.ico");
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
