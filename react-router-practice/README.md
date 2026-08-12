# react-router-practice (Chapter)

A React + TypeScript + Vite single-page app for practicing
**React Router v6**, themed as a small bookstore called *Chapter*.

## Setup

```bash
npm install
npm run dev      # start dev server
npm run build    # production build
```

## What's included

- **`AppLayout`** — shared shell (`Header` + `<Outlet />`) so the
  header stays mounted across route changes.
- **Static views** — Landing, Story, Reach
- **Auth-flavored views** — SignIn (redirects back via
  `useNavigate`/`location.state`), Account, Preferences
- **List + dynamic route** — Catalog (`/catalog`) and
  ItemView (`/catalog/:itemId`) via `useParams`
- **App sections** — History, Overview
- **Catch-all** — `Missing`, mapped to `path="*"`, last in the route list

## Routing setup

`main.tsx` wraps the app in `<BrowserRouter>`. `App.tsx` declares all
routes under one parent `<Route path="/" element={<AppLayout />}>`, so
every child renders inside `AppLayout`'s `<Outlet />`.

```tsx
<Route path="/" element={<AppLayout />}>
  <Route index element={<Landing />} />
  <Route path="catalog" element={<Catalog />} />
  <Route path="catalog/:itemId" element={<ItemView />} />
  <Route path="*" element={<Missing />} />
</Route>
```

`Header.tsx` uses `<NavLink>` so the active route is styled automatically
through the `isActive` render prop.
