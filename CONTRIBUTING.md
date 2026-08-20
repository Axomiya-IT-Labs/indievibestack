# Contributing to IndieVibeStack Prompt Library

Thanks for your interest in contributing! This document explains how to add new prompts, subcategories, and categories to the prompt library.

## Data Source

All prompts are stored in a single file:
- `src/data/prompts.ts`

The prompt pages read directly from this file, so changes here appear on the site automatically.

## Adding a New Prompt

1. Open `src/data/prompts.ts`
2. Find the matching category section (Writing, Marketing, Development, etc.)
3. Copy any existing prompt object and update these fields:
   - `id` — unique id like `"w9"`
   - `slug` — url-safe string like `"my-new-prompt"`
   - `title`, `description`, `promptText`
   - `category` — main category name
   - `subcategory` — subcategory name
   - `tags` — array of tags
   - `popularity` — number, e.g. `85`

Example:

```ts
{
  id: "w9",
  slug: "my-new-prompt",
  title: "My New Prompt",
  description: "Short description of what this prompt does",
  category: "Writing",
  subcategory: "Blog Writing",
  promptText: `Your prompt text here with [PLACEHOLDERS]`,
  example: "Example usage",
  tags: ["blogging", "content", "seo", "writing"],
  popularity: 90
}
```

## Adding a New Subcategory

You do not need to register subcategories separately. Just use a new `subcategory` string on any prompt in that category, and the site will automatically create a tab for it.

Example:
```ts
{
  ...
  category: "Writing",
  subcategory: "AI Writing",
  ...
}
```

## Adding a New Category

1. Add your prompt objects to the `prompts` array in `src/data/prompts.ts`
2. Update `getCategoryDescription()` in `src/app/prompts/page.tsx` to include a description for the new category
3. Update `getCategoryColor()` and `getCategoryGradient()` in:
   - `src/app/prompts/page.tsx`
   - `src/app/prompts/category/[category]/page.tsx`
4. Update `getCategoryIcon()` in `src/app/prompts/page.tsx` if you want a custom icon

## Guidelines

- Keep `promptText` actionable and well-structured
- Use `[PLACEHOLDER]` syntax for variables users should fill in
- Write clear `title` and `description` fields
- Use lowercase slug format: `my-new-prompt`
- Keep tags lowercase and relevant
- Set realistic `popularity` scores

## Submitting

Open an issue or PR on GitHub:
- Repo: `https://github.com/Axomiya-IT-Labs/indievibestack`
