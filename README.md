# Consensus Algorithms in Blockchain — A Comparative Explorer

An interactive dashboard for exploring and comparing 12 blockchain consensus algorithms:
trade-offs, performance, security, and the real chains that run on each one.

## Stack

React (Vite) · Tailwind CSS · Framer Motion · Recharts · React Icons

## Run it

```bash
npm install
npm run dev
```

Open the printed local URL (defaults to `http://localhost:5173`).

Build for production with `npm run build`; output goes to `dist/`.

## Data-driven content

All educational content lives in `src/data/`:

- `algorithms.json` — every consensus algorithm: overview, mechanism, pros/cons,
  step-by-step workflow, trilemma scores, performance metrics, and security profile.
- `blockchains.json` — real-world chains mapped to the consensus algorithm they use.
- `compatibility.json` — tooltip templates for the compatibility matrix.

Edit these files and the entire UI (sidebar, overview card, charts, metric cards,
blockchain mapping, and compatibility matrix) updates automatically — no component
code needs to change to add a 13th algorithm or a new blockchain.

## Project structure

```
src/
  components/   reusable UI building blocks (Sidebar, OverviewCard, TrilemmaRadar, ...)
  pages/        Dashboard.jsx composes all sections
  context/      AlgorithmContext.jsx — centralized selection + search state
  hooks/        useAlgorithmIcon.js — data key -> icon component lookup
  data/         algorithms.json, blockchains.json, compatibility.json
  styles/       Tailwind entry + component-level utility classes
```
