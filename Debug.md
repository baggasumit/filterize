## To debug in VS Code:

1. Install Debugger for Chrome extension
2. Create your React app using create-react-app
3. Create launch.json inside .vscode folder (in root)

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Chrome",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceRoot}/src"
    }
  ]
}
```

4. npm run start
5. Green play icon on Debug tab
