import { defineType, defineField } from "next-sanity";

export default defineType({
	name: "siteConfig",
	title: "Site Config",
	type: "document",
	fields: [
		defineField({ name: "name", title: "Name", type: "string" }),
		defineField({ name: "role", title: "Role", type: "string" }),
		defineField({ name: "location", title: "Location", type: "string" }),
		defineField({ name: "education", title: "Education", type: "string" }),
		defineField({ name: "experience", title: "Experience", type: "string" }),
		defineField({ name: "email", title: "Email", type: "string" }),
		defineField({ name: "github", title: "GitHub URL", type: "url" }),
		defineField({ name: "linkedin", title: "LinkedIn URL", type: "url" }),
		defineField({
			name: "bio",
			title: "Bio",
			type: "text",
			rows: 4,
		}),
		defineField({
			name: "heroImage",
			title: "Hero/Image",
			type: "image",
			options: { hotspot: true },
		}),
	],
});
