# Pocket - Agent Guidelines

## 1. Project Overview
Pocket is a mobile-first fintech cashflow app for tracking balance, income vs expense, transactions, analytics, categories, and settings. Keep implementation production-oriented and ready for API migration.

## 2. Tech Stack
- Next.js App Router for routing, layouts, server rendering, and data prefetch boundaries.
- TypeScript for all domain, API, and UI contracts.
- Tailwind CSS for all styling decisions.
- shadcn/ui for reusable UI primitives and consistent component APIs.
- TanStack Query for all data fetching, caching, hydration, and client consumption.
- Recharts for analytics data visualization.

## 3. Architecture
- `app/*`: App Router routes, route-level layout/loading/error, and server-side prefetch with hydration.
- `features/*`: screen-level client modules for each domain feature.
- `components/*`: reusable shared UI, layout, nav, and state components.
- `types/*`: domain models.
- `lib/mock-db/*`: mock source-of-truth data only.
- `lib/api/*`: async server-like functions returning typed promises.
- `lib/react-query/*`: query client factories and query key definitions.
- `lib/query-options/*`: feature query option factories consumed by server prefetch and `useQuery`.

## 4. Data Layer Rules
- All app data access must go through TanStack Query.
- UI components must never import mock arrays directly.
- Define stable query keys in `lib/react-query/query-keys.ts`.
- Define query option factories in `lib/query-options/*`.
- Server routes prefetch with `queryClient.prefetchQuery(...)`, then hydrate with `dehydrate` + `HydrationBoundary`.
- Client screens consume data with `useQuery(queryOptionsFactory(...))`.

## 5. Component Rules
- Build reusable components first in `components/common` and `components/ui`.
- Avoid one-off duplicated markup across screens.
- Use shadcn/ui primitives as the default base for buttons, inputs, cards, tabs, and badges.
- Keep presentational components stateless where possible.

## 6. Server vs Client Components
- Default to Server Components for routes and structural layout.
- Use Client Components only for interactivity: forms, filtering, search, tabs, chart rendering, local UI state.
- Keep server/client boundaries explicit and minimal.

## 7. Styling Rules
- Tailwind CSS only.
- No CSS-in-JS.
- Use theme tokens from `app/globals.css`.
- Maintain mobile-first spacing and responsive enhancements.
- Preserve fintech visual language: dark premium cards, subtle borders, high-contrast amounts.

## 8. Naming Conventions
- Components: PascalCase.
- Hooks: `useX`.
- Query option factories: `getXQueryOptions`.
- Files: kebab-case.
- Domain enums: uppercase string unions for transaction direction values (`INCOME`, `OUTCOME`).

## 9. Feature Development Workflow
1. Define or extend domain types in `types/*`.
2. Add/adjust mock records in `lib/mock-db/*`.
3. Add async typed API function in `lib/api/*`.
4. Add query key (if needed) and query options factory.
5. Prefetch in route server component.
6. Consume with `useQuery` in feature client screen.

## 10. API Migration Strategy
- Keep exported function signatures in `lib/api/*` stable.
- Replace mock implementation internals with real HTTP calls.
- Preserve response shape mapping to existing domain types.
- Keep query keys/options unchanged so UI components remain untouched.

## 11. Performance Guidelines
- Minimize client-only boundaries.
- Set sensible query `staleTime` and `gcTime`.
- Prefetch critical route data server-side.
- Memoize derived lists and filters in interactive screens.
- Keep chart payloads scoped to current period/filter.

## 12. UI/UX Principles
- Mobile-first navigation and interactions.
- Minimal friction for core actions (view, filter, add).
- Clear information hierarchy with strong amount typography.
- Consistent empty/loading/error states across screens.
- Clean, minimal, premium fintech presentation with readable data density.
