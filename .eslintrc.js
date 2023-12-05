module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  globals: {
    document: false,
    escape: false,
    navigator: false,
    unescape: false,
    window: false,
    describe: true,
    test: true,
    before: true,
    it: true,
    expect: true,
    sinon: true,
    module: true,
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "typescript-sort-keys",
    "simple-import-sort",
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "prettier/prettier": "off",
    "react/display-name": "off",
    "no-prototype-builtins": "off",
    "no-console": 2,
    "react-hooks/exhaustive-deps": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-unused-vars": "off",
    // the below rules fromt typescript-eslint
    // are disabled as they threw errors in
    // pre-typescript integration files.
    // we can turn these back on and clean up in
    // future PR if deemed necessary
    "@typescript-eslint/no-unused-vars": 2,
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-var-requires": "off",
    "react/jsx-sort-props": 2,
    "typescript-sort-keys/interface": 2,
    "typescript-sort-keys/string-enum": 2,
    "simple-import-sort/imports": 2,
    "simple-import-sort/exports": 2,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
      rules: {
        "simple-import-sort/imports": [
          "error",
          {
            groups: [
              ["^react", "^@?\\w"], // all react imports
              ["^\\u0000"], // rest of imports
              ["^(@|views)(/.*|$)"],
              ["^(@|components)(/.*|$)"],
              ["^(@|hooks)(/.*|$)"],
              ["^(@|hoc)(/.*|$)"],
              ["^(@|providers)(/.*|$)"],
              ["^(@|redux)(/.*|$)"],
              ["^(@|actions)(/.*|$)"],
              ["^(@|reducers)(/.*|$)"],
              ["^(@|selectors)(/.*|$)"],
              ["^(@|dispatchers)(/.*|$)"],
              ["^(@|routes)(/.*|$)"],
              ["^(@|utils)(/.*|$)"],
              ["^(@|types)(/.*|$)"],
              ["^(@|styles)(/.*|$)"],
              ["^(@|theme)(/.*|$)"],
              ["^(@|sizes)(/.*|$)"],
              ["^(@|icons)(/.*|$)"],
              ["^(@|logos)(/.*|$)"],
              ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
              ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
              ["^(@|style(d|s))(/.*|$)"],
            ],
          },
        ],
      },
    },
  ],
};
