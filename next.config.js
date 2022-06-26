module.exports = {
  images: {
    domains: ["auqta-bucket.s3.ap-southeast-1.amazonaws.com", "localhost"],
  },

  rules: [
    {
      test: /\.less$/,
      use: [
        {
          loader: "style-loader",
        },
        {
          loader: "less-loader",
          options: {
            lessOptions: {
              modifyVars: {
                "primary-color": "#000000",
                "border-radius-base": "3px",
              },
              javascriptEnabled: true,
            },
          },
        },
      ],
      // ...other rules
    },
  ],
  // ...other config
};
