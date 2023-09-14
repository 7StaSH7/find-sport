CREATE TABLE IF NOT EXISTS "users_to_grounds" (
	"user_uuid" uuid NOT NULL,
	"grounds_uuid" uuid NOT NULL,
	CONSTRAINT users_to_grounds_user_uuid_grounds_uuid PRIMARY KEY("user_uuid","grounds_uuid")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users_to_grounds" ADD CONSTRAINT "users_to_grounds_user_uuid_users_uuid_fk" FOREIGN KEY ("user_uuid") REFERENCES "users"("uuid") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users_to_grounds" ADD CONSTRAINT "users_to_grounds_grounds_uuid_grounds_uuid_fk" FOREIGN KEY ("grounds_uuid") REFERENCES "grounds"("uuid") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
