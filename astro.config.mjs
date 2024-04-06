import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import embeds from "astro-embed/integration";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://21futures.com/",
  integrations: [embeds(), mdx(), tailwind(), react()],
  head: {
    title: '21 Futures',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    ],
  }
});