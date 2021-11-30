module.exports = {
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "eslint:recommended",
    "plugin:react/recommended",
    "@react-native-community",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier", "react", "simple-import-sort"],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {},
    },
  },
  rules: {
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/indent": 0,
    // "@typescript-eslint/interface-name-prefix": [
    //   "error",
    //   {
    //     prefixWithI: "always",
    //   },
    // ],
    "@typescript-eslint/quotes": ["error", "double"],
    "arrow-body-style": 0,
    "import/extensions": 0,
    "import/no-extraneous-dependencies": [
      2,
      {
        devDependencies: ["**/test.tsx", "**/test.ts"],
      },
    ],
    "import/prefer-default-export": 0,
    quotes: ["error", "double"],
    "react/jsx-pascal-case": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-filename-extension": [
      2,
      {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
    "simple-import-sort/sort": "error",
    semi: "error",
    // "object-curly-spacing": ["error", "never", {arraysInObjects: true}],
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/ban-ts-ignore": "off",
    "global-require": "off",
    "no-shadow": "off",
    "react-native/no-inline-styles": "off",
    "react/destructuring-assignment": "off",
    "react/no-array-index-key": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "react-hooks/exhaustive-deps": "off",
    "@typescript-eslint/no-empty-function": "off",
    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
};
