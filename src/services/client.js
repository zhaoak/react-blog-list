import { createClient } from '@supabase/supabase-js';
export const client = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_KEY
);

export function checkError({ data, error }) {
  if (error) {
    throw error;
  }
  return data;
}

// supabase fetch
export async function getBlogs() {
  const response = await client.from('blogs').select('*').limit(100);
  return checkError(response);
}
