import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "homepage_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "homepage_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "homepage" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_title" varchar DEFAULT 'Il Tinder' NOT NULL,
  	"hero_title_highlight" varchar DEFAULT 'per cani.' NOT NULL,
  	"hero_subtitle" varchar DEFAULT 'Trova il compagno di giochi perfetto per il tuo amico a quattro zampe. Swipe, match, e organizza passeggiate insieme nel tuo quartiere.' NOT NULL,
  	"hero_cta_text" varchar DEFAULT 'Scarica gratis',
  	"hero_secondary_cta_text" varchar DEFAULT 'Scopri di piu',
  	"features_title" varchar DEFAULT 'Perche PawMatch?',
  	"features_subtitle" varchar DEFAULT 'Tutto quello che serve per socializzare il tuo cane, in una sola app.',
  	"steps_title" varchar DEFAULT 'Come funziona',
  	"cta_title" varchar DEFAULT 'Pronto a trovare nuovi amici?',
  	"cta_subtitle" varchar DEFAULT 'Scarica PawMatch e unisciti a migliaia di padroni e cani felici.',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "homepage_features" ADD CONSTRAINT "homepage_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_steps" ADD CONSTRAINT "homepage_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "homepage_features_order_idx" ON "homepage_features" USING btree ("_order");
  CREATE INDEX "homepage_features_parent_id_idx" ON "homepage_features" USING btree ("_parent_id");
  CREATE INDEX "homepage_steps_order_idx" ON "homepage_steps" USING btree ("_order");
  CREATE INDEX "homepage_steps_parent_id_idx" ON "homepage_steps" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "homepage_features" CASCADE;
  DROP TABLE "homepage_steps" CASCADE;
  DROP TABLE "homepage" CASCADE;`)
}
