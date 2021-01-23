// plugins
const rssPlugin = require('@11ty/eleventy-plugin-rss');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItTocDoneRight = require('markdown-it-toc-done-right');

// Filters
const dateFilter = require('./src/filters/date-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');

// Import transforms
const htmlMinTransform = require('./src/transforms/html-min-transform.js');

module.exports = (config) => {
  // Plugins
  config.addPlugin(rssPlugin);
config.addPlugin(syntaxHighlight);

// Copy `images/` to `_site/images`
config.addPassthroughCopy("src/images");
config.addPassthroughCopy("src/fonts");

  // Add filters
  config.addFilter('dateFilter', dateFilter);
  config.addFilter('w3DateFilter', w3DateFilter);

// Transforms
config.addTransform('htmlmin', htmlMinTransform);

// Set up  Markdown engine so it creates anchors
const mdOptions = {
  html: true
};
const anchorOptions = {
  permalink: true,
  permalinkSymbol: '&#128279;'
};
  config.setLibrary(
  'md',
  markdownIt(mdOptions).use(markdownItAnchor, anchorOptions).use(markdownItTocDoneRight)
);

  // Returns a collection of blog posts in reverse date order
  config.addCollection("blog", (collection) => {
    return [...collection.getFilteredByGlob("./src/posts/*.md")].reverse();
  });

  // Returns a collection of long-form articles
  config.addCollection("articles", (collection) => {
    return collection.getFilteredByGlob("./src/articles/*.md");
  });

  // Add shortcodes
  config.addShortcode('excerpt', article => extractExcerpt(article));

  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
config.setUseGitIgnore(false);

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};

function extractExcerpt(article) {
  if (!article.hasOwnProperty('templateContent')) {
    console.warn('Failed to extract excerpt: Document has no property "templateContent".');
    return null;
  }
 
  let excerpt = null;
  const content = article.templateContent;
 
  // The start and end separators to try and match to extract the excerpt
  const separatorsList = [
    { start: '<!-- Excerpt Start -->', end: '<!-- Excerpt End -->' },
    { start: '<p>', end: '</p>' }
  ];
 
  separatorsList.some(separators => {
    const startPosition = content.indexOf(separators.start);
    const endPosition = content.indexOf(separators.end);
 
    if (startPosition !== -1 && endPosition !== -1) {
      excerpt = content.substring(startPosition + separators.start.length, endPosition).trim();
      return true; // Exit out of array loop on first match
    }
  });
 
  return excerpt;
}
