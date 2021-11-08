module.exports = {
    "extends": [
        "plugin:rxjs/recommended",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    plugins: [
        '@typescript-eslint',
        'jsdoc'
    ],
    rules: {
        "@typescript-eslint/adjacent-overload-signatures": "warn",
        "@typescript-eslint/await-thenable": "warn",
        "@typescript-eslint/ban-types": [
            "warn",
            {
                "types": {
                    "Object": {
                        "message": "Avoid using the `Object` type. Did you mean `object`?"
                    },
                    "Function": {
                        "message": "Avoid using the `Function` type. Prefer a specific function type, like `() => void`."
                    },
                    "Boolean": {
                        "message": "Avoid using the `Boolean` type. Did you mean `boolean`?"
                    },
                    "Number": {
                        "message": "Avoid using the `Number` type. Did you mean `number`?"
                    },
                    "String": {
                        "message": "Avoid using the `String` type. Did you mean `string`?"
                    },
                    "Symbol": {
                        "message": "Avoid using the `Symbol` type. Did you mean `symbol`?"
                    }
                }
            }
        ],
        "@typescript-eslint/consistent-type-assertions": "warn",
        "@typescript-eslint/dot-notation": "warn",
        "@typescript-eslint/explicit-member-accessibility": [
            "off",
            {
                "accessibility": "explicit"
            }
        ],
        "@typescript-eslint/member-ordering": [
            "warn",
            {
                "default": [
                    "public-static-field",
                    "protected-static-field",
                    "private-static-field",
                    "public-instance-field",
                    "protected-instance-field",
                    "private-instance-field",
                    "public-constructor",
                    "protected-constructor",
                    "private-constructor",
                    "public-static-method",
                    "protected-static-method",
                    "private-static-method",
                    "public-instance-method",
                    "protected-instance-method",
                    "private-instance-method"
                ]
            }
        ],
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-empty-interface": "warn",
        "@typescript-eslint/no-inferrable-types": [
            "warn",
            {
                "ignoreParameters": true
            }
        ],
        "@typescript-eslint/no-misused-new": "warn",
        "@typescript-eslint/no-namespace": "warn",
        "@typescript-eslint/no-non-null-assertion": "warn",
        "@typescript-eslint/no-unused-expressions": "warn",
        "@typescript-eslint/no-use-before-define": "warn",
        "@typescript-eslint/prefer-for-of": "warn",
        "@typescript-eslint/prefer-function-type": "warn",
        "@typescript-eslint/prefer-namespace-keyword": "warn",
        "@typescript-eslint/triple-slash-reference": [
            "warn",
            {
                "path": "always",
                "types": "prefer-import",
                "lib": "always"
            }
        ],
        "@typescript-eslint/unified-signatures": "warn",
        "@typescript-eslint/naming-convention": [
            "warn",
            {
                "selector": "variable",
                "format": ["camelCase", "UPPER_CASE", "snake_case"]
            }
        ],
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-shadow": [
            "warn", {
                "hoist": "all"
            }
        ],
        "@typescript-eslint/no-unsafe-argument": "warn",
        "@typescript-eslint/no-unsafe-assignment": "warn",
        "@typescript-eslint/no-unsafe-call": "warn",
        "@typescript-eslint/no-unsafe-member-access": "warn",
        "@typescript-eslint/no-unsafe-return": "warn",
        "rxjs/no-async-subscribe": "off",
        "rxjs/no-nested-subscribe": "warn",
        "rxjs/no-unsafe-takeuntil": "warn",
        "arrow-parens": [
            "off",
            "always"
        ],
        "comma-dangle": [
            "warn",
            "always-multiline"
        ],
        "constructor-super": "warn",
        "eqeqeq": [
            "warn",
            "smart"
        ],
        "guard-for-in": "warn",
        "id-blacklist": [
            "warn",
            "any",
            "Number",
            "number",
            "String",
            "string",
            "Boolean",
            "boolean",
            "Undefined",
            "undefined"
        ],
        "id-match": "warn",
        "import/order": "off",
        "jsdoc/check-alignment": "warn",
        "jsdoc/newline-after-description": "warn",
        "jsdoc/no-types": "warn",
        "max-len": [
            "warn",
            {
                "code": 140
            }
        ],
        "new-parens": "warn",
        "no-bitwise": "warn",
        "no-caller": "warn",
        "no-cond-assign": "warn",
        "no-debugger": "warn",
        "no-eval": "warn",
        "no-fallthrough": "warn",
        "no-new-wrappers": "warn",
        "no-shadow": "off",
        "no-throw-literal": "warn",
        "no-trailing-spaces": "warn",
        "no-undef-init": "warn",
        "no-underscore-dangle": "off",
        "no-unsafe-finally": "warn",
        "no-unused-labels": "warn",
        "no-var": "warn",
        "object-shorthand": "warn",
        "one-var": [
            "warn",
            "never"
        ],
        "prefer-const": "warn",
        "quote-props": [
            "warn",
            "as-needed"
        ],
        "radix": "warn",
        "use-isnan": "warn",
        "space-before-function-paren": "off",
        "space-before-blocks": "warn",
        "keyword-spacing": "warn",
        "semi": "warn",
        "prefer-arrow/prefer-arrow-functions": 'off',
        "arrow-body-style": "off",
    }
};
