# Christ High School Backend

This is a simple Node.js + Express backend for school management with Supabase as the database.

## Features

- Student and Teacher Management
- Fee Receipt Generation
- Leaving Certificate Generation
- Report Card (Marksheet) Generation

## Setup

1. Install dependencies:

    ```bash
    npm install
    ```

2. Start server:

    ```bash
    npm start
    ```

3. The backend runs at `http://localhost:5000/`

## Supabase

- Make sure you have your tables (`students`, `teachers`, `fees`, `certificates`, `marksheets`) created in your Supabase project.
- Update your Supabase URL and Key in `supabaseClient.js` if needed.

---