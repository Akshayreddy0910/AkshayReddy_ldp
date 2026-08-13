# API Handling Practice

Small React + TypeScript examples for working with a REST API — fetching,
posting, updating, deleting, loading and error states. Data comes from our
own local `db.json` file (10 sample users + a few posts), served on your
machine with `json-server` — no external website involved.

## Run

You need two terminals running at the same time:

```bash
# terminal 1 – serves db.json as a REST API on http://localhost:3001
npm install
npm run server

# terminal 2 – runs the React app
npm run dev
```

Open the Vite URL it prints (usually http://localhost:5173). Every screen
now calls `http://localhost:3001/...`, which is your own `db.json` file.

You can open `db.json` any time to add, edit, or remove sample users —
`json-server` picks up changes automatically.

## Files (src/components)

- `PromiseIntro.tsx` – what fetch() actually returns
- `FetchThenCatch.tsx` – reading a response with .then/.catch
- `ChainedCalls.tsx` – using one response to make a second request
- `AsyncAwaitDemo.tsx` – same request written with async/await
- `ErrorHandling.tsx` – checking response.ok and throwing on failure
- `LoadingIndicator.tsx` – tracking a loading flag
- `AutoLoadOnMount.tsx` – loading data with useEffect
- `CustomFetchHook.tsx` – a small reusable data-fetching hook
- `SubmitNewPost.tsx` – sending data with POST
- `CustomSubmitHook.tsx` – a reusable hook for POST
- `EditPost.tsx` – updating data with PUT
- `RemovePost.tsx` – deleting data with DELETE
- `PostManager.tsx` – listing items and deleting them from the list
