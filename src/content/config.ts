import { z, defineCollection, reference } from 'astro:content';

const storyCollection = defineCollection({ 
    type: 'content', // v2.5.0 and later
    schema: z.object({
        title: z.string(),
        excerpt: z.string(),
        tags: z.array(z.string()),
        image: z.string().optional(),
        author: reference('authors'),
  }),
});

const authorCollection = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        bio: z.string(),
        avatar: z.string().optional(),
        podcastUrl: z.string().optional(),
        npub: z.string().optional(),
        twitter: z.string().optional(),
    }),
});

export const collections = {
    'stories': storyCollection,
    'authors': authorCollection,	
};