import { defineType, defineField } from "next-sanity";

export default defineType({
	name: "skill",
	title: "Skill",
	type: "document",
	fields: [
		defineField({
			name: "name",
			title: "Name",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "icon",
			title: "Icon (emoji or text)",
			type: "string",
		}),
		defineField({
			name: "color",
			title: "Color (hex)",
			type: "string",
			description: 'e.g. "#3b82f6"',
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
});
