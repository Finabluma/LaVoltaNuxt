import { createClient } from '@sanity/client';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { postId, likeChange } = body;

  if (!postId || typeof likeChange !== 'number') {
    return {
      statusCode: 400,
      body: { error: 'postId and likeChange required' },
    };
  }

  const config = useRuntimeConfig();

  const sanity = createClient({
    projectId: config.sanityProjectId,
    dataset: config.sanityDataset,
    apiVersion: config.sanityApiVersion,
    token: config.apiSecret,  // TOKEN privado aquí
    useCdn: false,
  });

  try {
    await sanity
      .patch(postId)
      .setIfMissing({ likes: 0 })
      .inc({ likes: likeChange })
      .commit();

    return { success: true };
  } catch (error) {
    return {
      statusCode: 500,
      body: { error: error.message || 'Error updating likes' },
    };
  }
});
