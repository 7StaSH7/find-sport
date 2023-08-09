CREATE TABLE IF NOT EXISTS "grounds" (
	"uuid" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(256),
	"latitude" numeric NOT NULL,
	"longitude" numeric NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users_to_grounds" (
	"user_id" uuid NOT NULL,
	"ground_id" uuid NOT NULL,
	CONSTRAINT users_to_grounds_user_id_ground_id PRIMARY KEY("user_id","ground_id")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users_to_grounds" ADD CONSTRAINT "users_to_grounds_user_id_users_uuid_fk" FOREIGN KEY ("user_id") REFERENCES "users"("uuid") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users_to_grounds" ADD CONSTRAINT "users_to_grounds_ground_id_grounds_uuid_fk" FOREIGN KEY ("ground_id") REFERENCES "grounds"("uuid") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
