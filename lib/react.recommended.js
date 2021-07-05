module.exports = {
    "extends": [
        "./typescript.recommended.js"
    ],
    plugins: ['react', 'react-hooks'],
    rules: {
        // General rules
        // ------------------------------------------------------------------------------------------------------------------------------ //
        'arrow-body-style': ["error", "as-needed"],

        // ------------------------------------------------------------------------------------------------------------------------------ //
        // React rules

        'react/destructuring-assignment': 0,
        'react/forbid-prop-types': 0,
        'react/jsx-curly-brace-presence': 0,
        'react/jsx-curly-newline': 'warn',
        'react/jsx-curly-spacing': ['error', 'never'],
        'react/jsx-filename-extension': ['error', {extensions: ['.jsx', '.tsx']}],
        'react/jsx-fragments': 'warn',
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-max-props-per-line': ['error', {maximum: 5}],
        'react/jsx-one-expression-per-line': 0,
        'react/jsx-tag-spacing': ['warn', {
            closingSlash: 'never',
            beforeSelfClosing: 'never',
            afterOpening: 'never'
        }],
        'react/jsx-props-no-spreading': 0,
        'react/no-children-prop': 0,
        'react/no-typos': 1,
        'react/no-unescaped-entities': 0,
        // make react component method sorting less strict
        'react/sort-comp': ['error', {
            order: [
                'static-methods',
                'lifecycle',
                '/^on.+$/',
                'everything-else',
                'render'
            ],
            groups: {
                lifecycle: [
                    // Add "connected" after "defaultProps"
                    'displayName', 'propTypes', 'contextTypes', 'childContextTypes', 'mixins', 'statics', 'defaultProps', 'connected',
                    'constructor', 'getDefaultProps', 'state', 'getInitialState', 'getChildContext', 'getDerivedStateFromProps',
                    'componentWillMount', 'UNSAFE_componentWillMount', 'componentDidMount', 'componentWillReceiveProps',
                    'UNSAFE_componentWillReceiveProps', 'shouldComponentUpdate', 'componentWillUpdate', 'UNSAFE_componentWillUpdate',
                    'getSnapshotBeforeUpdate', 'componentDidUpdate', 'componentDidCatch', 'componentWillUnmount'
                ]
            }
        }],
        'react/state-in-constructor': 0,
        'react/static-property-placement': ['warn', 'static public field'],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': ['warn', {
            additionalHooks: "(useNonConcurrentEffect)"
        }],
    },
    overrides: [
        {
            files: [
                "*.ts",
                "*.tsx"
            ],
            rules: {
                "@typescript-eslint/no-use-before-define": 'off'
            }
        }
    ]
};
