import { defineConfig } from "next-sanity";
import { schemaTypes } from "./schemas";

export const config = defineConfig({
	projectId: "lvum7hfj",
	dataset: "production",
	title: "Garden Dev CMS",
	apiVersion: "2025-06-01",
	basePath: "/studio",
	schema: { types: schemaTypes },
	plugins: [],
});
