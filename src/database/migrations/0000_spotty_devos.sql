CREATE TABLE IF NOT EXISTS "users" (
	"uuid" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"full_name" varchar(256) NOT NULL,
	"nickname" varchar(256) NOT NULL
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "nickname_idx" ON "users" ("nickname");