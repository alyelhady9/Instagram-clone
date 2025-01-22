/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['dummyjson.com'],
    },
    webpack: (config) => {
      // Add a rule for .mp4 files
      config.module.rules.push({
        test: /\.(mp4|webm|ogg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/_next/static/videos/', // Output path for videos
              outputPath: 'static/videos/', // Directory in the build folder
              name: '[name].[hash].[ext]', // File naming convention
            },
          },
        ],
      });
  
      return config;
    },
  };
  
  export default nextConfig;
  