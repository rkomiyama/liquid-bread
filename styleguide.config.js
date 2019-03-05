const path = require("path");

module.exports = {
  sections: [
    {
      name: "Components",
      components: "src/components/*.vue"
    },
    {
      name: "SearchToolbar",
      components: "src/components/SearchToolbar/*.vue"
    },
    {
      name: "BeerCard",
      components: "src/components/BeerCard/*.vue"
    }
  ],
  template: {
    head: {
      links: [
        {
          href:
            "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons",
          rel: "stylesheet"
        }
      ]
    }
  },
  require: [
    path.join(__dirname, "config/global.requires.js"),
    path.join(__dirname, "config/global.styles.scss")
  ],
  renderRootJsx: path.join(__dirname, "config/styleguide.root.js"),
  usageMode: "expand",
  exampleMode: "expand"
};
