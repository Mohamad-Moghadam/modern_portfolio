import { groq } from "next-sanity";
import { client } from "./client";

export async function getBlogs() {
	return client.fetch(
		groq`*[_type == "blog"] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      tags,
      readTime,
      publishedAt,
      "coverImage": coverImage.asset->url,
    }`,
	);
}

export async function getProjects() {
	return client.fetch(
		groq`*[_type == "project"] | order(order asc) {
      _id,
      title,
      desc,
      tech,
      link,
      "coverImage": coverImage.asset->url,
    }`,
	);
}

export async function getSkills() {
	return client.fetch(
		groq`*[_type == "skill"] | order(order asc) {
      _id,
      name,
      icon,
      color,
    }`,
	);
}

export async function getSiteConfig() {
	return client.fetch(
		groq`*[_type == "siteConfig"][0] {
      name,
      role,
      location,
      education,
      experience,
      email,
      github,
      linkedin,
      bio,
      "heroImage": heroImage.asset->url,
    }`,
	);
}
