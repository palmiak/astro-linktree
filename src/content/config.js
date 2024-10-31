import { z, defineCollection } from 'astro:content';

const profileCollection = defineCollection({
    type: 'data'
});

export const collections = {
    'profile': profileCollection,
};