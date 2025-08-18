'use server';

import { redirect } from 'next/navigation';
import { db } from '@/lib/db/drizzle';
import { projects, NewProject } from '@/lib/db/schema';

/**
 * This is the Server Action that receives the consultation form data
 * and saves it to your Supabase database using Drizzle.
 */
export async function submitConsultation(
  // We use the 'NewProject' type from your schema.ts for type safety.
  // We Omit 'id' and 'createdAt' because the database generates them automatically.
  data: Omit<NewProject, 'id' | 'createdAt' | 'teamId'>,
) {
    // Log the received data to the console for debugging.
    // A console.log on the server is a great way to debug.
    // Check your terminal (where you run `npm run dev`) for this message.
    console.log('Received consultation data on the server:', data);

    // Use Drizzle to insert the data into the 'projects' table.
    await db.insert(projects).values({
      // The 'data' object contains all the form fields.
      ...data,
      
      // Your 'projects' table requires a `team_id`.
      // For this example, we'll hardcode it to 1. In a real application,
      // you would get this from the logged-in user's session.
      teamId: 1,
    });

    console.log('Successfully saved data to the database!');

  

  // If the submission is successful, redirect the user to the dashboard.
  redirect('/dashboard');
}