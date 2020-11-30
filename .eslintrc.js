module.exports = {
	env: {
		browser: true,
		es6: true
	},
	extends: [
		'react-app',
		'prettier',
		'plugin:react/recommended',
		'prettier/standard',
		'prettier/react'
	],
	plugins: ['react', 'prettier'],
	parserOptions: {
		ecmaVersion: 2018
	},
	rules: {
		'prettier/prettier': [
			'error',
			{
				printWidth: 80,
				trailingComma: 'none',
				semi: false,
				jsxSingleQuote: true,
				singleQuote: true,
				useTabs: true,
				endOfLine: 'auto',
				indent: ['error', 2]
			}
		]
	}
}
