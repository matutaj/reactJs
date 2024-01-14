module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "standard-with-typescript",
        "plugin:react/recommended",
        "airbnb",
        "prettier",
        "prettier/react",
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parser: "babel-eslint",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react", "prettier"],
    rules: {
        "prettier/prettier": "error",
        "react/jsx-filename-extension": [
            "warn",
            { extensions: [".jsx", ".js"] },
        ],
        "import/prefer-default-export": "off",
    },
};
