module.exports = {
  siteMetadata: {
    title: 'Eunmi',
    description: '안녕하세요. 이태희입니다. 공부하며 배우는 것들을 작성 중입니다.',
    url: 'https://Eunmi.com',
    favicon: '/images/favicon.ico',
    image: '/images/deadpool.jpg',
    repository: 'https://github.com/eunmi-baek/my-gatsby',
    profile: {
      email: 'mailto:eunmi.dev@gmail.com',
      github: 'https://github.com/eunmi-baek',
    },
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Eunmi`,
        short_name: `Eunmi`,
        start_url: `/`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
        include_favicon: true, // Include favicon
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-code-titles`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `post`,
        path: `${__dirname}/src/pages/`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `projects`,
    //     path: `${__dirname}/src/projects/`
    //   }
    // },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-68652268-2',
        head: true,
      },
    },
  ],
};
