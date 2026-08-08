import { defineType, defineField } from "next-sanity";

export default defineType({
	name: "blog",
	title: "Blog Post",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: { source: "title", maxLength: 96 },
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "excerpt",
			title: "Excerpt",
			type: "text",
			rows: 3,
		}),
		defineField({
			name: "body",
			title: "Body",
			type: "array",
			of: [
				{ type: "block" },
				{
					type: "image",
					options: { hotspot: true },
					fields: [
						defineField({
							name: "alt",
							title: "Alt text",
							type: "string",
						}),
					],
				},
				{ type: "code" },
			],
		}),
		defineField({
			name: "coverImage",
			title: "Cover Image",
			type: "image",
			options: { hotspot: true },
		}),
		defineField({
			name: "tags",
			title: "Tags",
			type: "array",
			of: [{ type: "string" }],
		}),
		defineField({
			name: "readTime",
			title: "Read Time",
			type: "string",
			description: 'e.g. "8 min"',
		}),
		defineField({
			name: "publishedAt",
			title: "Published At",
			type: "datetime",
		}),
	],
	orderings: [
		{
			title: "Published Date, New",
			name: "publishedAtDesc",
			by: [{ field: "publishedAt", direction: "desc" }],
		},
	],
	preview: {
		select: { title: "title", subtitle: "publishedAt", media: "coverImage" },
	},
});
