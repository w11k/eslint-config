# eslint-config
ES Lint Config for W11K Projects

# files
Typescript: `@w11k/eslint-config/lib/typescript.recommended`
Angular: `@w11k/eslint-config/lib/angular.recommended`
React: `@w11k/eslint-config/lib/react.recommended`

## .eslintrc.json
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
