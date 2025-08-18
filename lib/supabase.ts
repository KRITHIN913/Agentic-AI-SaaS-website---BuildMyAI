// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

// The URL and key should be stored in your environment variables for security.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// This is a singleton client for Supabase.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);