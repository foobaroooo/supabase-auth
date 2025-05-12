import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);

const VITE_SUPABASE_URL="https://vapmvmiiwnktavmxbwty.supabase.co";
const VITE_SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZhcG12bWlpd25rdGF2bXhid3R5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2ODA3NzcsImV4cCI6MjA2MjI1Njc3N30.G86qo1JHGXsCQSwsakldPQfFm9_XhalKwbE9bF3PUZY";    
const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY);

export default supabase