This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Alternatively, visit [this link] to see the deployed page.

## Considerations

1. The prompt mentions that this page might be used by event attendees to see if their classmates are also attending or
   internally by staff to follow up with individuals who have not yet completed their registration. In addition, there should be an option for those who wish to remain "incognito."

Assuming that this page is behind authentication, I would write a hook to wrap the attendees to check if the user logged in is an "admin" or a plain "user". If the user is an "admin" they will be able to view those who are "incognito". Alternatively, if there is a way to make a separate API call, the "admin" could get all attendees, but the plain "user" would only get attendees where `attendee.incognito === "no"`.

2. The prompt states that school and registration status filters should be generated dynamically based on values present.

3. I made some executive decisions on styling and colors that I would be happy to change if given more detailed instructions.
