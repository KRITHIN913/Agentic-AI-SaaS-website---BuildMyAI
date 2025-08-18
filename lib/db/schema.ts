import {
  pgTable,
  serial,
  text,
  varchar,
  timestamp,
  integer,
  jsonb,
  boolean,
  uniqueIndex
} from 'drizzle-orm/pg-core';
import { relations, sql } from 'drizzle-orm';
import { createId } from '@paralleldrive/cuid2';

export const users = pgTable(
  'users',
  {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 256 }),
    email: varchar('email', { length: 256 }).notNull(),
    passwordHash: varchar('password_hash', { length: 256 }).notNull(),
    role: varchar('role', { length: 256 }).default('user'),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow(),
    deletedAt: timestamp('deleted_at')
  },
  (users) => {
    return {
      emailIdx: uniqueIndex('email_idx').on(users.email)
    };
  }
);

export const teams = pgTable(
  'teams',
  {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 256 }),
    createdAt: timestamp('created_at').defaultNow()
  },
  (teams) => {
    return {
      teamIdIdx: uniqueIndex('team_id_idx').on(teams.id)
    };
  }
);

export const teamMembers = pgTable('team_members', {
  id: serial('id').primaryKey(),
  teamId: integer('team_id')
    .notNull()
    .references(() => teams.id),
  userId: integer('user_id')
    .notNull()
    .references(() => users.id),
  role: varchar('role', { length: 256 }).default('member'),
  createdAt: timestamp('created_at').defaultNow()
});

export const teamMembersRelations = relations(teamMembers, ({ one }) => ({
  team: one(teams, {
    fields: [teamMembers.teamId],
    references: [teams.id]
  }),
  user: one(users, {
    fields: [teamMembers.userId],
    references: [users.id]
  })
}));

export const invitations = pgTable('invitations', {
  id: serial('id').primaryKey(),
  teamId: integer('team_id')
    .notNull()
    .references(() => teams.id),
  email: varchar('email', { length: 256 }).notNull(),
  role: varchar('role', { length: 256 }).default('member'),
  invitedBy: integer('invited_by').references(() => users.id),
  status: varchar('status', { length: 256 }).default('pending'),
  createdAt: timestamp('created_at').defaultNow()
});

export const activityLogs = pgTable('activity_logs', {
  id: serial('id').primaryKey(),
  teamId: integer('team_id')
    .notNull()
    .references(() => teams.id),
  userId: integer('user_id')
    .notNull()
    .references(() => users.id),
  action: varchar('action', { length: 256 }).notNull(),
  ipAddress: varchar('ip_address', { length: 256 }),
  createdAt: timestamp('created_at').defaultNow()
});

export const projects = pgTable('projects', {
  id: serial('id').primaryKey(),
  teamId: integer('team_id')
    .notNull()
    .references(() => teams.id),
  name: varchar('name', { length: 256 }).notNull(),
  email: varchar('email', { length: 256 }).notNull(),
  businessType: varchar('business_type', { length: 256 }).notNull(),
  companySize: varchar('company_size', { length: 256 }).notNull(),
  budget: varchar('budget', { length: 256 }).notNull(),
  projectType: jsonb('project_type').notNull(),
  timeline: varchar('timeline', { length: 256 }).notNull(),
  company: varchar('company', { length: 256 }).notNull(),
  phone: varchar('phone', { length: 256 }).notNull(),
  password: varchar('password', { length: 256 }),
  createdAt: timestamp('created_at').defaultNow()
});

export const projectGoals = pgTable('project_goals', {
  id: serial('id').primaryKey(),
  projectId: integer('project_id')
    .notNull()
    .references(() => projects.id),
  goal: varchar('goal', { length: 256 }).notNull(),
  createdAt: timestamp('created_at').defaultNow()
});

export const projectGoalsRelations = relations(projectGoals, ({ one }) => ({
  project: one(projects, {
    fields: [projectGoals.projectId],
    references: [projects.id]
  })
}));

export const projectsRelations = relations(projects, ({ many }) => ({
  projectGoals: many(projectGoals)
}));

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type Team = typeof teams.$inferSelect;
export type NewTeam = typeof teams.$inferInsert;
export type TeamMember = typeof teamMembers.$inferSelect;
export type NewTeamMember = typeof teamMembers.$inferInsert;
export type ActivityLog = typeof activityLogs.$inferSelect;
export type NewActivityLog = typeof activityLogs.$inferInsert;
export type Invitation = typeof invitations.$inferSelect;
export type NewInvitation = typeof invitations.$inferInsert;
export type Project = typeof projects.$inferSelect;
export type NewProject = typeof projects.$inferInsert;
export type ProjectGoal = typeof projectGoals.$inferSelect;
export type NewProjectGoal = typeof projectGoals.$inferInsert;