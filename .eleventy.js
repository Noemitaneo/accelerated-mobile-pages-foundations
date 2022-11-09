const ampPlugin = require('@ampproject/eleventy-plugin-amp');
module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(ampPlugin);
  eleventyConfig.addPassthroughCopy("./src/_inc/");
  return {
    dir: {
      input: "src",
    },
    htmlTemplateEngine: "njk",
  };
};