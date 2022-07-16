module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: ["airbnb-base", "prettier", "plugin:prettier/recommended"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["@typescript-eslint"],
    rules: {
        "prettier/prettier": "error",
        "import/prefer-default-export": "off",
        "no-underscore-dangle": "off",
        "no-unused-vars": "off",
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                js: "never",
                jsx: "never",
                ts: "never",
                tsx: "never",
            },
        ],
    },
    settings: {
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        },
    },
}
