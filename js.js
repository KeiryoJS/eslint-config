module.exports = {
    env: {
        es6: true,
        node: true,
    },
    extends: [ "eslint:recommended" ],
    parserOptions: {
        ecmaVersion: 2019,
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
        complexity: "warn",
        "accessor-pairs": "warn",
        camelcase: "warn",
        "max-len": [ 'error', 200, 2 ],
        yoda: 2
    },
};
