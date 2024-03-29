module.exports = {
    env: {
        es6: true,
        node: true,
    },
    extends: [ "eslint:recommended", "plugin:@typescript-eslint/recommended" ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
    },
    rules: {
        indent: [
            "error",
            4,
            {
                SwitchCase: 1,
            },
        ],
        "linebreak-style": [ "error", "unix" ],
        quotes: [ "error", "double" ],
        semi: [ "error", "always" ],
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/prefer-nullish-coalescing": 2,
        complexity: "warn",
        "accessor-pairs": "warn",
        camelcase: "warn",
        "max-len": [ "error", 200, 2 ],
        yoda: 2,
        "eol-last": 2,
        "@typescript-eslint/no-namespace": "off",
    },
};
