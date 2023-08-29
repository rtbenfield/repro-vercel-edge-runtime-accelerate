# Steps

1. `npm install`
2. `npx prisma generate --no-engine`
3. `npx vercel deploy`

```
$ npx vercel deploy
Vercel CLI 32.1.0
🔍  Inspect: https://vercel.com/rtbenfield/<redacted> [2s]
Error: The Edge Function "api/prisma" is referencing unsupported modules:
        - api/prisma.js: @prisma/extension-accelerate
```

> `tsconfig.json` was supplied by user for reproduction.
