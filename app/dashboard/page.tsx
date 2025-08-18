import { db } from "@/lib/db/drizzle";
import { projects } from "@/lib/db/schema";
import { desc } from "drizzle-orm";
import { DashboardClient } from "./dashboard-client"; // Import the new client component

// This is the main page component (Server Component)
export default async function DashboardPage() {
  // Fetch the most recently created project from the database.
  const latestConsultation = await db
    .select()
    .from(projects)
    .orderBy(desc(projects.createdAt)) // Get the newest one first
    .limit(1);

  const consultationData = latestConsultation[0] || null;

  // Render the Client Component and pass the fetched data as a prop.
  return <DashboardClient consultationData={consultationData} />;
}