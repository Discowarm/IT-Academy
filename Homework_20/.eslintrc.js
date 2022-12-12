module.exports = {
    'env': {
        'commonjs': true,
        'es2021': true,
        'node': true,
        'webextensions': true,
        'mocha': true,
        'webdriverio/wdio': true,
        'jest': true
    },
    'extends': 'eslint:recommended',
    'overrides': [
    ],
    'parserOptions': {
        'ecmaVersion': 'latest'
    },
    'rules': {
        'no-undefined': 2,
        'no-unused-vars': 0,
        'no-redeclare': 0,
    },
    plugins: ['webdriverio'],
};
       


