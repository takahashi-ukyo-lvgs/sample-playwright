This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
# Start Nextjs Project
pnpm run dev

# Start ladle catalog
make catalog

# Take snapshots
make update-snapshot
```

## Issue: Different font family rendered in Playwright snapshots

#### What I want to confirm:

- When running pnpm run dev (Next.js server) or make catalog (Ladle), the following font seems to be applied correctly:

```
# in tailwind.config.ts
fontFamily: {
  sans: ["Noto Sans JP", "Asap Condensed"],
},
```

- However, snapshots generated with make update-catalog appear to use a different font.(e2e/snapshot.spec.ts-snapshots/)
- Why is this happening?
