/** @type {import('next').NextConfig} */

const nextConfig = {
    webpack: (config) => {
      config.resolve.alias["@public"] = "./public";
      config.resolve.alias["@components"] = "./src/components";
      config.resolve.alias["@interfaces"] = "./src/interfaces";
      config.resolve.alias["@pages"] = "./src/pages";
  
      return config;
    },
  };
  
  export default nextConfig;
