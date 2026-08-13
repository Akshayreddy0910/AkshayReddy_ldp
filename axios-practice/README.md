# Axios Practice

React + TypeScript examples for working with the axios HTTP client — GET,
POST, PUT/PATCH, DELETE, interceptors, error handling, query params,
custom headers, and cancelling a request. Data comes from a local
`db.json` file served by `json-server`.

## Run

Two terminals:

```bash
# terminal 1 – serves db.json on http://localhost:3001
npm install
npm run server

# terminal 2 – runs the React app
npm run dev
```

Open the Vite URL it prints (usually http://localhost:5173).

## Files (src/components)

- `BasicGet.tsx` – fetching data with `axios.get`
- `PostData.tsx` – sending data with `axios.post`
- `UpdateData.tsx` – updating data with `axios.patch`
- `DeleteData.tsx` – removing data with `axios.delete`
- `AxiosInstance.tsx` – creating a separate `axios.create()` instance
- `RequestInterceptor.tsx` – attaching a header to every outgoing request
- `ResponseInterceptor.tsx` – modifying every incoming response
- `ErrorHandling.tsx` – checking errors with `axios.isAxiosError`
- `QueryParams.tsx` – sending query params via the `params` option
- `CustomHeaders.tsx` – sending a one-off custom header
- `CancelRequest.tsx` – cancelling an in-flight request
- `ListManager.tsx` – listing and deleting items in one screen

`src/lib/http.ts` holds the shared axios instance (`baseURL` + `timeout`)
used by most of the lessons.
