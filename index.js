const { getBabelLoader } = require('customize-cra')

function pushRule(config, rule) {
    config.module.rules.push(rule)
}

module.exports = function rewireSourceMapLoader(config, env) {
    getBabelLoader(config, true).options.sourceMaps = true
    getBabelLoader(config, false).options.sourceMaps = true
    pushRule(config, {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        use: ['source-map-loader'],
        enforce: 'pre'
    })
    return config
}
