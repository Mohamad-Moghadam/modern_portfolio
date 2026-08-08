"use client";

import { NextStudio } from "next-sanity/studio";
import { config } from "@/sanity/config";
import { schemaTypes } from "@/sanity/schemas";

export default function StudioPage() {
	return <NextStudio config={{ ...config, schema: { types: schemaTypes } }} />;
}
