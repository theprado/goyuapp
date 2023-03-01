import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createClient } from '@supabase/supabase-js';
import { SessionContextProvider } from '@supabase/auth-helpers-react';

const supabase = createClient(
  "https://xrryiqsmxoarfxrzgrna.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhycnlpcXNteG9hcmZ4cnpncm5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc1MjgxNDAsImV4cCI6MTk5MzEwNDE0MH0.S-F6J35ZwlJPp4HmhR1JvXJzL0wuFtp0UMrs8O9XqUs"
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SessionContextProvider supabaseClient={supabase}>
    <App />
    </SessionContextProvider>
  </React.StrictMode>,
)
