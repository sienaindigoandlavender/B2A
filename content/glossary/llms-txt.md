---
section: glossary
id: glossary-llms-txt
slug: llms-txt
title: llms.txt
subtitle: Agent Experience
updated: 2026-06-05
---

A Markdown file placed at the root of a website (`/llms.txt`) that acts as a curated, machine-readable map of the site's most important content for AI systems. Analogous to `robots.txt` for crawler access, but serving a different purpose: content prioritisation rather than access control.

The file typically contains: a brief description of the organisation, links to the most important and up-to-date pages, API documentation, pricing, and terms. Instead of forcing AI agents to crawl the entire site and guess what matters, `llms.txt` provides a curated menu.

**Distinction from robots.txt:**

- `robots.txt` — tells crawlers where they are allowed to go (access restriction)
- `llms.txt` — tells AI systems what they should prioritise (content curation)

The convention was popularised in 2024–2025 as AI-generated answers became a significant source of web traffic. Anthropic ships `llms.txt` for Claude's documentation. The Ksour archive project ships `llms.txt` and `llms-full.txt` as a full synthesis map of all entity content.
