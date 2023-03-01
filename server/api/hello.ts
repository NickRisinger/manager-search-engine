import { prisma } from '../data/prisma-client';

export default defineEventHandler((event) => {
  return {
    api: 'works',
  };
});
