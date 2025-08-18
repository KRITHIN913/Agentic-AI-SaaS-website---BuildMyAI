// lib/db/queries.ts
import { db } from './drizzle';
import { users, teams, teamMembers } from './schema';
import { eq } from 'drizzle-orm';
import { cookies } from 'next/headers';

// ======================================================================
// Helper function to get the user from the session
// ======================================================================

// This function retrieves the user ID from the session cookie
// and returns the corresponding user object. It's a server-only task.
export async function getUser(): Promise<typeof users.$inferSelect | null> {
  const cookieStore = await cookies();
  const session = cookieStore.get('session')?.value;

  if (!session) {
    return null;
  }
  
  // You would need to implement a function here to validate the session
  // and get the user's ID. This is a simplified example.
  const userId = 1; // Placeholder for the actual user ID from the session

  if (userId) {
    const [user] = await db.select().from(users).where(eq(users.id, userId));
    return user || null;
  }

  return null;
}


// ======================================================================
// Query to get user and their team information
// ======================================================================

// This function fetches a user and performs a join to get their team ID.
// It is useful for any operation that requires knowing the user's team.
export async function getUserWithTeam(
  userId: number
): Promise<{ user: typeof users.$inferSelect, teamId: number | null } | null> {
  const result = await db
    .select({
      user: users,
      teamId: teams.id,
    })
    .from(users)
    .leftJoin(teamMembers, eq(users.id, teamMembers.userId))
    .leftJoin(teams, eq(teamMembers.teamId, teams.id))
    .where(eq(users.id, userId));

  // The query returns an array, so we return the first result.
  return result.length > 0 ? result[0] : null;
}
