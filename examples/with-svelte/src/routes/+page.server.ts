import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  return {
    user: await fetchUser()
  };
};

interface User {
  firstName: string;
  lastName: string;
}

async function fetchUser() {
  const response = await fetch('https://api.example.com/user');
  return response.json() as Promise<User>;
}
