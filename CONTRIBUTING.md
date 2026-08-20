# Contributing to IndieVibeStack

Thanks for your interest in contributing! IndieVibeStack is a community-driven platform for indie hackers to build AI products without code. This guide will help you clone the project, run it locally, and contribute prompts, categories, fixes, or features.

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Prerequisites](#prerequisites)
- [Clone and Run Locally](#clone-and-run-locally)
- [How to Contribute](#how-to-contribute)
  - [1. Add a New Prompt](#1-add-a-new-prompt)
  - [2. Add a New Subcategory](#2-add-a-new-subcategory)
  - [3. Add a New Category](#3-add-a-new-category)
  - [4. Fix Bugs or Improve UI](#4-fix-bugs-or-improve-ui)
  - [5. Update Documentation](#5-update-documentation)
- [Prompts Data Format](#prompts-data-format)
- [Styling and Design Guidelines](#styling-and-design-guidelines)
- [Submitting a Pull Request](#submitting-a-pull-request)
- [Code of Conduct](#code-of-conduct)

## Project Overview

IndieVibeStack is a free, open-source platform that helps indie hackers build real AI products without writing code. It provides:

- **Tools Directory**: Curated AI tools with logos, descriptions, and direct links
- **Project Stacks**: Step-by-step tutorials to build complete AI products
- **Prompt Library**: Ready-to-use prompts organized by category with editable placeholders
- **Guides**: In-depth tutorials and best practices

The site is built with Next.js 14, React 18, and Tailwind CSS.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Icons | Lucide React |
| Data | Static TypeScript files (`src/data/`) |
| Deployment | Vercel |

## Folder Structure

```
indievibestack/
├── src/
│   ├── app/                      # Next.js App Router pages
│   │   ├── layout.tsx            # Root layout, header, footer
│   │   ├── page.tsx              # Homepage
│   │   ├── tools/                # Tools pages
│   │   │   ├── page.tsx          # Tools listing
│   │   │   └── [slug]/page.tsx   # Tool detail
│   │   ├── stacks/               # Stacks pages
│   │   │   ├── page.tsx          # Stacks listing
│   │   │   └── [slug]/page.tsx   # Stack detail
│   │   ├── prompts/              # Prompts pages
│   │   │   ├── page.tsx          # Prompt categories landing
│   │   │   ├── [slug]/page.tsx   # Single prompt detail
│   │   │   └── category/
│   │   │       └── [category]/page.tsx  # Category prompts
│   │   ├── guides/               # Guides pages
│   │   │   ├── page.tsx          # Guides listing
│   │   │   └── [slug]/page.tsx   # Guide detail
│   │   ├── saved/page.tsx        # Saved items
│   │   ├── about/page.tsx        # About page
│   │   ├── privacy/page.tsx      # Privacy policy
│   │   └── terms/page.tsx        # Terms of service
│   ├── components/               # Reusable React components
│   │   ├── ToolLogo.tsx          # Tool logo with fallback
│   │   ├── LLMLogo.tsx           # LLM logo with fallback
│   │   ├── LaunchWithAI.tsx      # LLM launch buttons
│   │   └── search/               # Search components
│   ├── data/                     # Static data files
│   │   ├── tools.ts              # Tools data + helpers
│   │   ├── prompts.ts            # Prompts data + helpers
│   │   ├── stacks.ts             # Stacks data + helpers
│   │   └── guides.ts             # Guides data + helpers
│   └── global.css                # Global styles
├── public/
│   └── images/                   # Static images (logo, etc.)
├── .kilo/                        # Kilo config
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
├── CONTRIBUTING.md
└── README.md
```

## Prerequisites

- **Node.js**: v18.17+ (LTS recommended)
- **npm** or **pnpm**: Package manager
- **Git**: For version control

## Clone and Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/Axomiya-IT-Labs/indievibestack.git
cd indievibestack

# 2. Install dependencies
npm install
# or
pnpm install

# 3. Run the development server
npm run dev
# or
pnpm dev

# 4. Open http://localhost:3000 in your browser
```

## How to Contribute

### 1. Add a New Prompt

All prompts live in **`src/data/prompts.ts`**. The prompt pages read directly from this file.

1. Open `src/data/prompts.ts`
2. Find the matching category section (e.g., `// ========== WRITING ==========`)
3. Copy an existing prompt object and update these fields:

```ts
{
  id: "w9",                          // unique id, e.g. "w9", "m10"
  slug: "my-new-prompt",             // url-safe string, lowercase with hyphens
  title: "My New Prompt",            // human-readable title
  description: "Short description",  // what the prompt does
  category: "Writing",               // main category name
  subcategory: "Blog Writing",       // subcategory name
  promptText: `Your prompt here...`, // the actual prompt with [PLACEHOLDERS]
  example: "Example usage",          // optional example
  tags: ["blog", "seo"],             // lowercase tags
  popularity: 85                     // 0-100 popularity score
}
```

4. Save the file. The prompt appears automatically on the site.

#### Prompt Text Guidelines

- Use **`[PLACEHOLDER]`** syntax for variables users should fill in
- Be specific and actionable
- Include clear instructions and output format
- Keep it under 100 lines for readability
- Example:

```ts
promptText: `Write a cold email to [RECIPIENT] about [TOPIC].

Requirements:
- Subject line under 60 characters
- Body under 200 words
- Clear call-to-action
- Personalized opening

Tone: [Professional/Friendly]`
```

### 2. Add a New Subcategory

You **do not** need to register subcategories separately.

Just use a new `subcategory` string on any prompt in that category, and the site will automatically create a tab for it.

```ts
{
  id: "w10",
  slug: "ai-writing-prompt",
  title: "AI Writing Prompt",
  category: "Writing",
  subcategory: "AI Writing",  // new subcategory, auto-creates tab
  ...
}
```

### 3. Add a New Category

1. Add your prompt objects to the `prompts` array in `src/data/prompts.ts`
2. Update `getCategoryDescription()` in `src/app/prompts/page.tsx`:

```ts
function getCategoryDescription(category: string): string {
  const descriptions: Record<string, string> = {
    // ...existing
    "YourCategory": "Description of this category.",
  };
  return descriptions[category] || "Curated prompts for this category.";
}
```

3. Update `getCategoryAccent()` and `getCategoryBg()` in `src/app/prompts/page.tsx`:

```ts
function getCategoryAccent(category: string): string {
  const accents: Record<string, string> = {
    // ...existing
    "YourCategory": "text-indigo-600",
  };
  return accents[category] || "text-gray-600";
}

function getCategoryBg(category: string): string {
  const bgs: Record<string, string> = {
    // ...existing
    "YourCategory": "bg-indigo-50",
  };
  return bgs[category] || "bg-gray-50";
}
```

### 4. Fix Bugs or Improve UI

1. Create a new branch:
   ```bash
   git checkout -b fix/typo-in-prompts
   ```

2. Make your changes in the relevant files:
   - **Tools**: `src/data/tools.ts`, `src/app/tools/`
   - **Stacks**: `src/data/stacks.ts`, `src/app/stacks/`
   - **Prompts**: `src/data/prompts.ts`, `src/app/prompts/`
   - **Guides**: `src/data/guides.ts`, `src/app/guides/`

3. Run the dev server and verify:
   ```bash
   npm run dev
   ```

4. Check TypeScript and lint:
   ```bash
   npx tsc --noEmit
   npm run lint
   ```

### 5. Update Documentation

- Update `CONTRIBUTING.md` if you change the contribution workflow
- Update `README.md` for user-facing changes
- Add comments in code for complex logic

## Prompts Data Format

The `Prompt` interface in `src/data/prompts.ts`:

```ts
export interface Prompt {
  id: string;          // unique identifier, e.g. "w1", "m5"
  slug: string;        // url-safe string, e.g. "blog-post-writer"
  title: string;       // display title
  description: string; // short description for cards
  category: string;    // main category, e.g. "Writing"
  subcategory: string; // subcategory, e.g. "Blog Writing"
  promptText: string;  // the actual prompt template
  example: string;     // optional usage example
  tags: string[];      // lowercase tags
  popularity: number;  // 0-100 score
}
```

### Helper Functions

The file exports these helpers used by the UI:

- `getPromptBySlug(slug)` — get single prompt
- `getPromptsByCategory(category)` — filter by category
- `getPromptsBySubcategory(category, subcategory)` — filter by subcategory
- `getCategories()` — list all categories
- `getSubcategories(category)` — list subcategories in a category
- `getCategoryPromptCount(category)` — count prompts in category
- `getSubcategoryPromptCount(category, subcategory)` — count prompts in subcategory
- `getAlternativePrompts(prompt, limit)` — get similar prompts

## Styling and Design Guidelines

- Use **Tailwind CSS** utility classes
- Keep colors **minimal and neutral**: white backgrounds, `border-gray-200`, `bg-gray-100`
- Avoid harsh gradients or color effects around cards
- Use `text-gray-900` for primary text, `text-gray-500` for secondary
- Use `hover:border-gray-300` and `hover:shadow-sm` for subtle hover states
- Buttons: `bg-gray-900 text-white` for primary, `bg-gray-100` for secondary
- Spacing: tight but readable — use `gap-1.5`, `p-3`, `mb-4`
- Fonts: default Inter font from `next/font/google`

## Submitting a Pull Request

1. **Fork** the repository on GitHub
2. **Clone** your fork locally
3. Create a **feature branch**: `git checkout -b feature/my-new-prompt`
4. Make your changes and **commit**: `git commit -m "Add 5 new marketing prompts"`
5. **Push** to your fork: `git push origin feature/my-new-prompt`
6. Open a **Pull Request** against `main` branch
7. Fill in the PR template describing:
   - What you changed
   - Why you changed it
   - Screenshots (if UI changes)

### PR Checklist

- [ ] Code runs without errors (`npm run dev`)
- [ ] TypeScript passes (`npx tsc --noEmit`)
- [ ] Lint passes (`npm run lint`)
- [ ] New prompts follow the data format
- [ ] No fake data or placeholder links added
- [ ] Minimal, clean styling (no harsh colors)

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers and help them get started
- Focus on constructive feedback
- No spam, fake data, or low-quality contributions

## Questions?

- Open an issue on GitHub: https://github.com/Axomiya-IT-Labs/indievibestack/issues
- Join our Telegram: https://t.me/indievibestack
- Follow updates on X: https://x.com/rkblailabs
