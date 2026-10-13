// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import netlify from "@netlify/vite-plugin-tanstack-start";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

/** Netlify CI sets NETLIFY; NITRO_PRESET is set in netlify.toml for explicit deploys. */
const nitroPreset =
  process.env.NITRO_PRESET ??
  (process.env.NETLIFY === "true" ? "netlify" : undefined);
const isNetlifyDeploy = nitroPreset === "netlify";

export default defineConfig({
  plugins: isNetlifyDeploy ? [netlify()] : [],
  ...(nitroPreset ? { nitro: { preset: nitroPreset } } : {}),
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
