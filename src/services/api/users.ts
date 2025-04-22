import { User } from "@/types/api";
import { BASE_URL, USERS_REVALIDATE_TIME_SECONDS } from "@/utils/constants";

/**
 * Fetches a user by ID
 */
export async function getUser(id: number): Promise<User> {
  try {
    const response = await fetch(`${BASE_URL}/users/${id}`, {
      // Next.js 15 cache settings
      next: {
        revalidate: USERS_REVALIDATE_TIME_SECONDS,
        tags: [`user-${id}`],
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch user ${id}: ${response.status}`);
    }

    await new Promise((resolve) => setTimeout(resolve, Math.random() * 2000));

    return response.json();
  } catch (error) {
    console.error(`Error fetching user ${id}:`, error);
    throw error;
  }
}
