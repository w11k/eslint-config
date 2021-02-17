module.exports = {
    "extends": [
        "plugin:@angular-eslint/ng-cli-compat",
        "plugin:@angular-eslint/ng-cli-compat--formatting-add-on",
        "plugin:@angular-eslint/template/process-inline-templates",
        "./typescript.recommended.js",
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
        "@angular-eslint/use-pipe-transform-interface": "warn"
    }
};
