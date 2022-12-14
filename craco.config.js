const { overrideWebpackConfig } = require('craco-alias');
const CracoAlias = require('craco-alias');

module.exports = {
	webpack: {
		configure: (webpackConfig) => {
			const scopePluginIndex = webpackConfig.resolve.plugins.findIndex(({ constructor }) => constructor && constructor.name === 'ModuleScopePlugin');

			webpackConfig.resolve.plugins.splice(scopePluginIndex, 1);
			return webpackConfig;
		},
	},
	plugins: [
		{
			plugin: CracoAlias,
			options: {
				source: 'tsconfig',
				tsConfigPath: 'tsconfig.paths.json',
			},
		},
	],
};
