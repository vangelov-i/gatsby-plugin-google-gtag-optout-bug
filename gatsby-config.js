module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["G-ID1", "G-ID2"],
        gtagConfig: {
          anonymize_ip: true,
        },
      },
    },
  ],
};
