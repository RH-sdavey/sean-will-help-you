module.exports = {
    blogPostDir: "sean-posts", // The name of directory that contains your posts.
    blogAuthorDir: "sean-authors", // The name of directory that contains your 'authors' folder.
    blogAuthorId: "Sean", // The default and fallback author ID used for blog posts without a defined author.
    siteTitle: "Sean Will Help You", // Site title.
    siteTitleAlt: "SWHY", // Alternative site title for SEO.
    siteLogo: "", // Logo used for SEO and manifest. e.g. "/logos/logo-1024.png",
    siteUrl: "https://sean-might-help-you.netlify.com/", // Domain of your website without pathPrefix.
    pathPrefix: "/gatsby-starter-casper", // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-casper/.
    siteDescription: "Welcome to SWHY, I want to help you learn IT. Choose a learning path from the menu, or scroll down for our latest tutorials", // Website description used for RSS feeds/meta description tag.
    siteCover: "https://picsum.photos/id/1002/4312/2868",
    //  "https://picsum.photos/id/1079/4496/3000"", // Optional, the cover image used in header for home page. e.g: "/images/blog-cover.jpg",
    siteNavigation: true, // If navigation is enabled the Menu button will be visible
    siteRss: "/rss.xml", // Path to the RSS file.
    siteRssAuthor: "Casper User", // The author name used in the RSS file
    // siteFBAppID: "1825356251115265", // optional, sets the FB Application ID for using app insights
    sitePaginationLimit: 8, // The max number of posts per page.
    googleAnalyticsID: "UA-111982167-1", // GA tracking ID.
    // disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // enables Disqus comments, visually deviates from original Casper theme.
    siteSocialUrls: [
        "https://github.com/RH-sdavey/sean-will-help-you",
        "https://app.slack.com/client/TLMMVFQ1X/CLVTNC1MM",
        "mailto:seanwillhelpyou@gmail.com"
    ],
    postDefaultCategoryID: "Tech", // Default category for posts.
    // Links to social profiles/projects you want to display in the navigation bar.
    userLinks: [{
            label: "GitHub",
            url: "https://github.com/RH-sdavey/sean-will-help-you",
            iconClassName: "fa fa-github" // Disabled, see Navigation.jsx
        },
        {
            label: "Slack",
            url: "https://app.slack.com/client/TLMMVFQ1X/CLVTNC1MM",
            iconClassName: "fa fa-smugmug" // Disabled, see Navigation.jsx
        },
        {
            label: "Email",
            url: "mailto:seanwillhelpyou@gmail.com",
            iconClassName: "fa fa-envelope" // Disabled, see Navigation.jsx
        }
    ],
    // Copyright string for the footer of the website and RSS feed.
    copyright: {
        label: "Sean Will Help You" // Label used before the year
            // year: "2018" // optional, set specific copyright year or range of years, defaults to current year
            // url: "https://www.gatsbyjs.org/" // optional, set link address of copyright, defaults to site root
    },
    themeColor: "#c62828", // Used for setting manifest and progress theme colors.
    backgroundColor: "#e0e0e0", // Used for setting manifest background color.
    promoteGatsby: true // Enables the GatsbyJS promotion information in footer.
};