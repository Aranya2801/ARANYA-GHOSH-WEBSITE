import 'server-only'
import postgres from 'postgres'

/**
 * Optional PostgreSQL (e.g. Neon). If DATABASE_URL is unset the site still works —
 * the contact form just delivers by email only. No ORM, no codegen: the table is
 * created on first use.
 */
let client: ReturnType<typeof postgres> | null | undefined

export function getDb() {
  if (client !== undefined) return client
  const url = process.env.DATABASE_URL
  client = url ? postgres(url, { max: 1, idle_timeout: 20, connect_timeout: 10 }) : null
  return client
}

export interface ContactMessage {
  name: string
  email: string
  subject: string
  message: string
}

/** Returns true if stored, false if no database is configured. Throws on a real DB error. */
export async function saveContactMessage(m: ContactMessage): Promise<boolean> {
  const db = getDb()
  if (!db) return false
  await db`
    CREATE TABLE IF NOT EXISTS contact_messages (
      id         BIGSERIAL PRIMARY KEY,
      name       TEXT NOT NULL,
      email      TEXT NOT NULL,
      subject    TEXT NOT NULL DEFAULT '',
      message    TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )`
  await db`INSERT INTO contact_messages (name, email, subject, message) VALUES (${m.name}, ${m.email}, ${m.subject}, ${m.message})`
  return true
}
