ALTER TABLE "users_to_grounds" RENAME COLUMN "grounds_uuid" TO "ground_uuid";--> statement-breakpoint
ALTER TABLE "users_to_grounds" DROP CONSTRAINT "users_to_grounds_user_uuid_grounds_uuid";--> statement-breakpoint
ALTER TABLE "users_to_grounds" DROP CONSTRAINT "users_to_grounds_grounds_uuid_grounds_uuid_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users_to_grounds" ADD CONSTRAINT "users_to_grounds_ground_uuid_grounds_uuid_fk" FOREIGN KEY ("ground_uuid") REFERENCES "grounds"("uuid") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "users_to_grounds" ADD CONSTRAINT "users_to_grounds_user_uuid_ground_uuid" PRIMARY KEY("user_uuid","ground_uuid");