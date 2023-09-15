DO $$ BEGIN
 CREATE TYPE "role" AS ENUM('admin', 'user', 'guest');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "roles" (
	"uuid" uuid DEFAULT gen_random_uuid(),
	"role" "role"
);
--> statement-breakpoint
TRUNCATE TABLE "users" CASCADE;
ALTER TABLE "users" ADD COLUMN "email" varchar(50) NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "name" varchar(30) NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "surname" varchar(50) NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "patronymic" varchar(50) NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "password_hash" varchar(72) NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "role" "role";--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "nickname_idx" ON "users" ("nickname");--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_nickname_unique" UNIQUE("nickname");--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_email_unique" UNIQUE("email");