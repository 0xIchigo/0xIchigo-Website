/** @type {import('next').NextConfig} */

module.exports = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback = {
                ...config.resolve.fallback,
                fs: false,
                module: false,
            };
        }
        return config;
    },
};
