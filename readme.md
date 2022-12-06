# eslint-config-ts-kresnahendri

## Usage

### .eslintrc

```json
{
  "root": true,
  "extends": "ts-kresnahendri",
  "rules": {
    "semi": ["error", "never"],
    "react/react-in-jsx-scope": "off",
    "import/no-named-as-default": "off",
    "class-methods-use-this": "off",
    "no-useless-constructor": "off",
    "react/function-component-definition": "off",
    "dot-notation": "off",
    "@typescript-eslint/ban-ts-comment": "off"
  }
}
```

### .prettierrc

```json
{
  "bracketSpacing": true,
  "jsxBracketSameLine": true,
  "singleQuote": false,
  "trailingComma": "all",
  "semi": false
}
```
