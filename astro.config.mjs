import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import embeds from "astro-embed/integration";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://21-futures.com/",
  integrations: [embeds(), mdx(), tailwind(), react()]
});