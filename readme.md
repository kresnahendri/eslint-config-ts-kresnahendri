# eslint-config-ts-kresnahendri

## Usage

### .eslintrc

```json
{
  "root": true,
  "extends": "ts-kresnahendri",
  "rules": {
    "semi": ["error", "never"],
    "react/react-in-jsx-scope": "off"
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
