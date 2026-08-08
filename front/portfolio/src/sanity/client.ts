import { createClient } from "next-sanity";
import { config } from "./config";

export const client = createClient({
	...config,
	useCdn: true,
});

export const previewClient = createClient({
	...config,
	useCdn: false,
	token: process.env.SANITY_API_READ_TOKEN,
});

export const getClient = (preview: boolean) =>
	preview ? previewClient : client;
