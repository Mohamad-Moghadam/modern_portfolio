import { defineType, defineField } from "next-sanity";

export default defineType({
	name: "project",
	title: "Project",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "desc",
			title: "Description",
			type: "text",
			rows: 3,
		}),
		defineField({
			name: "tech",
			title: "Tech Stack",
			type: "array",
			of: [{ type: "string" }],
		}),
		defineField({
			name: "link",
			title: "Link",
			type: "url",
		}),
		defineField({
			name: "coverImage",
			title: "Cover Image",
			type: "image",
			options: { hotspot: true },
		}),
		defineField({
			name: "order",
			title: "Display Order",
			type: "number",
		}),
	],
	orderings: [
		{
			title: "Order, Asc",
			name: "orderAsc",
			by: [{ field: "order", direction: "asc" }],
		},
	],
	preview: {
		select: { title: "title", subtitle: "desc", media: "coverImage" },
	},
});
