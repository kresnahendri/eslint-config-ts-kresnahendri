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
  plugins: [
    "@typescript-eslint",
    "prettier",
    "react",
    // "simple-import-sort",
    "jest",
  ],
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
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "jsx-a11y/anchor-is-valid": "off",
    "no-param-reassign": "off",
    "react/no-unstable-nested-components": "off",
    "import/no-extraneous-dependencies": "off",
    "react/require-default-props": "off",
    semi: ["error", "never"],
    "react/react-in-jsx-scope": "off",
    "import/no-named-as-default": "off",
    "class-methods-use-this": "off",
    "no-useless-constructor": "off",
    "react/function-component-definition": "off",
    "dot-notation": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "import/order": [
      "error",
      {
        "groups": ["builtin", "external", "internal"],
        "pathGroups": [
          {
            "pattern": "react",
            "group": "external",
            "position": "before"
          }
        ],
        "newlines-between": "never",
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      }
    ]
  },
};
