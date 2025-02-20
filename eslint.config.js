import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
    "plugins": ["react", "@typescript-eslint"],
    "rules": {
      "prettier/prettier": ["error", { "semi": false }]
    }
  }  
)
