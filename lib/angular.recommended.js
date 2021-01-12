module.exports = {
    "extends": [
        "plugin:@angular-eslint/ng-cli-compat",
        "plugin:@angular-eslint/ng-cli-compat--formatting-add-on",
        "plugin:@angular-eslint/template/process-inline-templates",
        "plugin:rxjs/recommended",
    ],
    rules: {
        "@angular-eslint/component-class-suffix": "warn",
        "@angular-eslint/directive-class-suffix": "warn",
        "@angular-eslint/no-host-metadata-property": "warn",
        "@angular-eslint/no-input-rename": "warn",
        "@angular-eslint/no-inputs-metadata-property": "warn",
        "@angular-eslint/no-output-on-prefix": "warn",
        "@angular-eslint/no-output-rename": "warn",
        "@angular-eslint/no-outputs-metadata-property": "warn",
        "@angular-eslint/use-pipe-transform-interface": "warn",
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
        "@typescript-eslint/member-ordering": "warn",
        "@typescript-eslint/naming-convention": "warn",
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
        "no-shadow": [
            "warn",
            {
                "hoist": "all"
            }
        ],
        "no-throw-literal": "warn",
        "no-trailing-spaces": "warn",
        "no-undef-init": "warn",
        "no-underscore-dangle": "warn",
        "no-unsafe-finally": "warn",
        "no-unused-labels": "warn",
        "no-var": "warn",
        "object-shorthand": "warn",
        "one-var": [
            "warn",
            "never"
        ],
        "prefer-arrow/prefer-arrow-functions": "warn",
        "prefer-const": "warn",
        "quote-props": [
            "warn",
            "as-needed"
        ],
        "radix": "warn",
        "use-isnan": "warn",
        "space-before-function-paren": "error",
        "space-before-blocks": "error",
        "keyword-spacing": "error",
        "object-curly-spacing": [
            "error",
            "always"
        ]
    }
};
