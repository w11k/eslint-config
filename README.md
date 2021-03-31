# eslint-config
ES Lint Config for W11K Projects

If you're migration from Angular tslint to eslint consider following this update guideline: https://github.com/angular-eslint/angular-eslint
and use the `.eslintrc.json` file below to get started.

# Install
`npm i @w11k/eslint-config`

# Configuration
- Typescript: `@w11k/eslint-config/lib/typescript.recommended`
- Angular: `@w11k/eslint-config/lib/angular.recommended`
- React: `@w11k/eslint-config/lib/react.recommended`

## .eslintrc.json for angular
```json
{
  "root": true,
  "ignorePatterns": [
    "projects/**/*"
  ],
  "overrides": [
    {
      "files": [
        "*.ts"
      ],
      "parserOptions": {
        "project": [
          "tsconfig.json"
        ],
        "createDefaultProgram": true
      },
      "extends": [
        "@w11k/eslint-config/lib/angular.recommended"
      ],
      "rules": {
        "@angular-eslint/component-class-suffix": "warn",
        "@angular-eslint/component-selector": [
          "warn",
          {
            "type": "element",
            "prefix": "app",
            "style": "kebab-case"
          }
        ],
        "@angular-eslint/directive-class-suffix": "warn",
        "@angular-eslint/directive-selector": [
          "warn",
          {
            "type": "attribute",
            "prefix": "app",
            "style": "camelCase"
          }
        ]
      }
    },
    {
      "files": [
        "*.html"
      ],
      "extends": [
        "plugin:@angular-eslint/template/recommended"
      ],
      "rules": {}
    }
  ]
}
```

## .eslintrc.js for gatsby
```
module.exports = {
  "root": true,
  "ignorePatterns": [
    "projects/**/*"
  ],
  "extends": [
    "@w11k/eslint-config/lib/react.recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": [
      "./tsconfig.json"
    ],
    "createDefaultProgram": true
  },
  "overrides": [
    {
      "files": [
        "*.ts",
        "*.tsx"
      ],
      "rules": {
        ...your overridden rules
      }
    }
  ]
}

```
