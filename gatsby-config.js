/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */


module.exports = {
  /* Your site config here t */
  siteMetadata: {
    title: `Mohammed Alkharraz`,
    author: `Mohammed Alkharraz`,
    firstName: `Mohammed`,
    lastName: `Alkharraz`,
    description: `Mohammed Alkharraz's Online Portfolio`,
    occupation: `Mechanical Engineer`,
    keywords: [`Mohammed`, `Alkharraz`, `Personal`, `Blog`, `Resume`, `Projects`, `Work`],
    siteUrl:
      process.env.URL || process.env.DEPLOY_URL || `http://localhost:8000`,
    unemployed: false,
    designations: [
      `Mechanical Engineer`,
      `Martial Artist`,
      `Bookworm`,
      `Epistemophile`,
    ],
    readingList: [
      {
        title: `Flatland: A Romance of Many Dimensions`,
        author: `Edwin A. Abbott`, 
        link: `https://www.goodreads.com/book/show/433567.Flatland`,
      },
      {
        title: `The First Three Minutes: A Modern View of the Origin of the Universe`,
        author: `Steven Weinberg`,
        link: `https://www.goodreads.com/book/show/150131.The_First_Three_Minutes`,
      },
      {
        title: `Dance of the Photons: From Einstein to Quantum Teleportation`,
        author: `Anton Zeilinger`, 
        link: `https://www.goodreads.com/book/show/8714969-dance-of-the-photons`,
      },
    ],
    showsList: [
      {
        title: `Avatar: The Last Airbender`,
        author: `Micheal DiMartino, Bryan Konietzko`,
        link: `https://www.imdb.com/title/tt0417299/`,
      },
      {
        title: `Love, Death & Robots`,
        author: `Tim Miller`,
        link: `https://www.imdb.com/title/tt9561862/`,
      },
      {
        title: `Star Wars: The Clone Wars`,
        author: `George Lucas, Dave Filoni`,
        link: `https://www.imdb.com/title/tt0458290/`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-preload-link-crossorigin`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mohammed Alkharraz's Personal Site`,
        short_name: `Mohd AlKharraz`,
        description: `This is my personal site.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `${__dirname}/static/blackhole.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Raleway:300,400"],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        showSpinner: true,
      },
    },
  ],
}
