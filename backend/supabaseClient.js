import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vpigydfurbbjcyvtlmwb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwaWd5ZGZ1cmJiamN5dnRsbXdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI4NTU5NjAsImV4cCI6MjA2ODQzMTk2MH0.oI1x4l0avMn204-QosM7nDnpQFkhsB98RtGAHO-o2bo'

export const supabase = createClient(supabaseUrl, supabaseKey)