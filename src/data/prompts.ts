export interface Prompt {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  promptText: string;
  example: string;
  tags: string[];
  popularity: number;
}

export const prompts: Prompt[] = [
  // ========== WRITING ==========
  {
    id: "w1",
    slug: "blog-post-writer",
    title: "Blog Post Writer",
    description: "Generate complete blog posts on any topic with SEO optimization",
    category: "Writing",
    subcategory: "Blog Writing",
    promptText: `You are an expert blog writer. Write a comprehensive blog post on the topic: [TOPIC]

Requirements:
- Title: Catchy and SEO-friendly
- Introduction: Hook the reader (50-75 words)
- 5-7 subheadings with detailed paragraphs (each 100-150 words)
- Actionable tips and examples
- Conclusion with call-to-action (50 words)
- Meta description (150 characters)
- 5 SEO keywords as a bullet list

Tone: [Professional/Casual/Educational]
Target audience: [Beginners/Intermediates/Experts]
Word count: [1500-2000 words]

Format the response with proper markdown headings.`,
    example: "Topic: How to use ChatGPT for content marketing",
    tags: ["blogging", "content", "seo", "writing"],
    popularity: 98
  },
  {
    id: "w2",
    slug: "email-newsletter",
    title: "Email Newsletter Writer",
    description: "Create engaging newsletter emails that people actually read",
    category: "Writing",
    subcategory: "Email Writing",
    promptText: `Write an email newsletter for [TOPIC/BUSINESS].

Requirements:
- Subject line: Compelling and curiosity-driven (under 60 chars)
- Preview text: Short and punchy
- Opening: Personal greeting and hook
- Main content: 2-3 key insights or stories
- Value add: Exclusive tip or resource
- Call-to-action: Clear and specific
- Sign-off: Warm and professional

Tone: [Friendly/Professional/Conversational]
Length: 150-250 words

Make it:
- Scannable (short paragraphs, bullet points)
- Personal (use "you" and "we")
- Valuable (give before asking)`,
    example: "Weekly newsletter for SaaS founders about growth strategies",
    tags: ["email", "newsletter", "writing", "content"],
    popularity: 92
  },
  {
    id: "w3",
    slug: "social-media-caption",
    title: "Social Media Caption Generator",
    description: "Generate engaging captions for all social media platforms",
    category: "Writing",
    subcategory: "Social Media Writing",
    promptText: `Write [NUMBER] social media captions for [PLATFORM] about [TOPIC].

Each caption should:
- Hook in first sentence
- Include [NUMBER] relevant hashtags
- Have [NUMBER] emojis
- End with a question or call-to-action

Platform-specific requirements:
- Twitter/X: Max 280 characters, 1-2 hashtags
- Instagram: 150-200 characters, 5-10 hashtags
- LinkedIn: Professional tone, 200-250 characters
- Facebook: Conversational, 100-150 characters

Variation types:
1. Educational/Informative
2. Entertaining/Humorous
3. Inspirational/Motivational
4. Question/Engagement
5. Product/Service focused

Make each caption unique and platform-optimized.`,
    example: "5 Instagram captions about AI tools for content creators",
    tags: ["social media", "writing", "captions", "engagement"],
    popularity: 96
  },
  {
    id: "w4",
    slug: "article-writer",
    title: "Article Writer",
    description: "Write in-depth articles with research and citations",
    category: "Writing",
    subcategory: "Article Writing",
    promptText: `Write a comprehensive article on [TOPIC].

Requirements:
- Title: SEO-optimized and compelling
- Introduction: Hook + thesis statement (100-150 words)
- Body: 5-7 sections with subheadings
  - Each section: 200-300 words
  - Include data, examples, and quotes
  - Use bullet points and numbered lists
- Conclusion: Summary + key takeaways (100 words)
- Sources: Cite 3-5 reputable sources

Target audience: [AUDIENCE]
Tone: [Authoritative/Conversational/Academic]
Word count: [2000-3000 words]

Format with markdown headings and include a "Key Takeaways" box at the end.`,
    example: "Article about the future of remote work in 2025",
    tags: ["article", "writing", "long-form", "research"],
    popularity: 90
  },
  {
    id: "w5",
    slug: "cold-email-outreach",
    title: "Cold Email Outreach",
    description: "Write persuasive cold emails that get responses",
    category: "Writing",
    subcategory: "Email Writing",
    promptText: `Write a cold email to [RECIPIENT TYPE] about [OFFER/VALUE].

Email structure:
1. Subject line: Catchy and curiosity-driven (under 60 chars)
2. Opening: Personalized compliment or observation
3. Value proposition: Clear benefit in 1-2 sentences
4. Social proof: Mention similar clients/success
5. Call-to-action: Specific, low-commitment request (15-min call, reply yes/no)
6. PS: Add urgency or additional value

Tone: [Professional/Friendly/Direct]
Length: Under 200 words total

Make it:
- Personalized (use [NAME] placeholder)
- Value-first (focus on them, not you)
- Easy to reply to (yes/no question)
- Mobile-friendly (short paragraphs)`,
    example: "Cold email to SaaS founders about AI automation services",
    tags: ["email", "sales", "outreach", "writing"],
    popularity: 94
  },
  {
    id: "w6",
    slug: "press-release",
    title: "Press Release Writer",
    description: "Write professional press releases for product launches",
    category: "Writing",
    subcategory: "Business Writing",
    promptText: `Write a press release for [COMPANY NAME] announcing [NEWS].

Press release structure:

FOR IMMEDIATE RELEASE

[HEADLINE]: Compelling, under 15 words
[SUBHEADLINE]: Supporting detail, under 20 words

[CITY, State] — [DATE] — [COMPANY NAME], a [COMPANY DESCRIPTION], today announced [ANNOUNCEMENT].

[Quote from CEO/Founder]: "..."

Key details:
- [Feature/Benefit 1]
- [Feature/Benefit 2]
- [Feature/Benefit 3]

[Quote from customer/partner]: "..."

[Availability details]: Pricing, where to buy

[Call-to-action]: Visit [URL] for more information

### About [COMPANY NAME]
[Company boilerplate - 50 words]

### Media Contact
[Name], [Title]
[Email]
[Phone]

Include ### at the end for "###"`,
    example: "Press release for AI startup launching new chatbot platform",
    tags: ["pr", "business", "announcement", "writing"],
    popularity: 88
  },

  // ========== MARKETING ==========
  {
    id: "m1",
    slug: "product-description",
    title: "Product Description Writer",
    description: "Write compelling product descriptions that convert",
    category: "Marketing",
    subcategory: "Copywriting",
    promptText: `Write a product description for [PRODUCT NAME].

Product category: [CATEGORY]
Target audience: [AUDIENCE]
Key features: [LIST 3-5 FEATURES]
Unique selling point: [WHAT MAKES IT SPECIAL]

Description sections:
1. Headline: Attention-grabbing (under 10 words)
2. Subheadline: Value proposition (under 15 words)
3. Problem statement: What it solves (50 words)
4. Solution: How it works (100 words)
5. Features benefit table: Feature → Benefit
6. Social proof snippet: "Loved by [NUMBER] customers"
7. Call-to-action: "Get [PRODUCT] today"

Tone: [Professional/Playful/Urgent/Luxury]
Length: 300-400 words total

Format with bullet points and short paragraphs.`,
    example: "Description for AI-powered project management tool for remote teams",
    tags: ["ecommerce", "product", "copywriting", "sales"],
    popularity: 92
  },
  {
    id: "m2",
    slug: "seo-meta-tags",
    title: "SEO Meta Tags Generator",
    description: "Generate optimized meta titles and descriptions for SEO",
    category: "Marketing",
    subcategory: "SEO",
    promptText: `Generate SEO meta tags for [PAGE TOPIC].

Target keyword: [KEYWORD]
Secondary keywords: [LIST 3-5]

Generate:
1. Meta Title (50-60 characters)
   - Include primary keyword at the beginning
   - Make it click-worthy
   - Provide 3 variations

2. Meta Description (150-160 characters)
   - Include primary and secondary keywords
   - Clear value proposition
   - Call-to-action
   - Provide 3 variations

3. SEO Keywords (10-15)
   - Primary, secondary, long-tail, LSI
   - Group by search intent

4. H1 Tag (under 60 characters)
   - Include primary keyword

5. URL Slug (SEO-friendly)
   - Short, keyword-rich

Target audience: [AUDIENCE]
Search intent: [Informational/Commercial/Transactional/Navigational]`,
    example: "Meta tags for blog post about 'best AI tools for small business'",
    tags: ["seo", "marketing", "meta tags", "keywords"],
    popularity: 93
  },
  {
    id: "m3",
    slug: "email-marketing-campaign",
    title: "Email Marketing Campaign",
    description: "Create complete email sequences for product launches and newsletters",
    category: "Marketing",
    subcategory: "Email Marketing",
    promptText: `Create a [NUMBER]-email sequence for [PURPOSE] targeting [AUDIENCE].

Email 1: Welcome/Introduction
- Subject line (50 chars)
- Body (100-150 words)
- Call-to-action

Email 2: Value/Benefits
- Subject line (50 chars)
- Body (150-200 words)
- Key benefits as bullet points

Email 3: Social Proof
- Subject line (50 chars)
- Body (150-200 words)
- Testimonials or case studies

Email 4: Urgency/CTA
- Subject line (50 chars)
- Body (100-150 words)
- Strong call-to-action

Make each email engaging, personalized, and conversion-focused.`,
    example: "5-email sequence for SaaS product launch targeting startup founders",
    tags: ["email", "marketing", "campaign", "newsletter"],
    popularity: 95
  },
  {
    id: "m4",
    slug: "landing-page-copy",
    title: "Landing Page Copywriter",
    description: "Write high-converting landing page copy",
    category: "Marketing",
    subcategory: "Copywriting",
    promptText: `Write landing page copy for [PRODUCT NAME].

Product: [DESCRIPTION]
Target audience: [AUDIENCE]
Unique selling point: [MAIN BENEFIT]

Sections:

1. Hero Section
   - Headline (under 10 words, benefit-driven)
   - Subheadline (under 20 words, supporting benefit)
   - Primary CTA button text (action-oriented)
   - Secondary CTA (optional)

2. Social Proof Bar
   - "Trusted by [NUMBER] customers"
   - Logos of 3-5 recognizable brands (placeholders)
   - Rating stars + review count

3. Problem Section
   - Headline: "You're struggling with [PAIN POINT]"
   - 3 pain points as bullet points
   - Empathy statement

4. Solution Section
   - Headline: "Meet [PRODUCT NAME]"
   - 3 key benefits with icons
   - Screenshot placeholder

5. How It Works (3 steps)
   - Step 1: [ACTION] (benefit)
   - Step 2: [ACTION] (benefit)
   - Step 3: [ACTION] (benefit)

6. Features Grid (6 features)
   - Feature 1: Headline + 1 sentence
   - Feature 2: Headline + 1 sentence
   - (repeat to 6)

7. Testimonials (3)
   - Quote + Name + Title + Company + Photo placeholder

8. Pricing Section
   - 3 tiers (Basic, Pro, Enterprise)
   - Price + features list + CTA
   - Annual discount note

9. FAQ (4-6 questions)
   - Question + short answer

10. Final CTA Section
    - Headline: "Start [BENEFIT] today"
    - Subheadline: No credit card required, free trial
    - CTA button

Add psychological triggers:
- Scarcity ("Limited spots")
- Urgency ("Offer ends [DATE]")
- Social proof ("Join 10,000+ customers")
- Risk reversal ("30-day money-back guarantee")`,
    example: "Landing page for AI writing assistant targeting content creators",
    tags: ["landing page", "copywriting", "conversion", "marketing"],
    popularity: 94
  },
  {
    id: "m5",
    slug: "sales-email-sequence",
    title: "Sales Email Sequence",
    description: "Create automated email sequences for lead nurturing",
    category: "Marketing",
    subcategory: "Email Marketing",
    promptText: `Create a [NUMBER]-email sales sequence for [PRODUCT/SERVICE].

Target: [LEAD TYPE - e.g., cold leads, warm leads, trial users]
Goal: [CONVERSION GOAL - e.g., book demo, purchase, upgrade]

Email 1: Introduction/Value
- Subject line: [CREATE 3 OPTIONS]
- Preview text: [CREATE 2 OPTIONS]
- Hook (personalized opener)
- Value proposition (1-2 sentences)
- Social proof (1 sentence)
- CTA: Low commitment (click link, reply yes/no)

Email 2: Problem/Solution
- Subject line: Problem-focused
- Pain point acknowledgment
- How we solve it
- Case study snippet (result)
- CTA: Medium commitment (watch video, read case study)

Email 3: Social Proof
- Subject line: Success story
- Customer quote + result ($, time saved, etc.)
- Before/after comparison
- Risk reversal (guarantee, free trial)
- CTA: High commitment (book call, start trial)

Email 4: Scarcity/Urgency
- Subject line: FOMO-driven
- Limited offer (discount, bonus)
- Timer or deadline
- What they'll miss
- CTA: Final action

Email 5: Breakup (if no response)
- Subject line: "Should I close your file?"
- No hard sell
- Open door for future
- Ask for feedback

Each email: under 150 words, 1 main idea, 1 CTA, mobile-friendly. Add personalization tokens: [First Name], [Company], [Industry].`,
    example: "5-email sequence for SaaS free trial users to convert to paid",
    tags: ["sales", "email", "sequence", "automation"],
    popularity: 92
  },
  {
    id: "m6",
    slug: "social-media-strategy",
    title: "Social Media Strategy Planner",
    description: "Create a comprehensive social media marketing strategy",
    category: "Marketing",
    subcategory: "Social Media Marketing",
    promptText: `Create a social media strategy for [BRAND/PRODUCT].

Requirements:
1. Goals and KPIs
   - Brand awareness targets
   - Engagement metrics
   - Conversion goals

2. Platform Strategy
   - Primary platforms (choose 3-4)
   - Content mix for each platform
   - Posting frequency

3. Content Pillars
   - 3-5 main content themes
   - Content types for each pillar
   - Brand voice guidelines

4. Content Calendar
   - Weekly posting schedule
   - Best times to post
   - Content themes by day

5. Engagement Strategy
   - Response templates
   - Community management
   - Influencer collaboration plan

6. Advertising Plan
   - Ad formats
   - Budget allocation
   - Targeting strategy

7. Analytics and Reporting
   - Key metrics to track
   - Reporting frequency
   - Optimization strategy

Target audience: [AUDIENCE]
Budget: [BUDGET RANGE]
Timeline: [TIMEFRAME]`,
    example: "Social media strategy for DTC skincare brand",
    tags: ["social media", "marketing", "strategy", "planning"],
    popularity: 89
  },

  // ========== DEVELOPMENT ==========
  {
    id: "d1",
    slug: "code-explainer",
    title: "Code Explainer",
    description: "Explain any code snippet in simple terms",
    category: "Development",
    subcategory: "Code Assistance",
    promptText: `Explain this code in simple terms:

[PASTE CODE]

Explain:
1. What this code does (1-2 sentences for non-technical)
2. How it works step-by-step (for beginners)
3. Key functions/terms explained (glossary)
4. Common use cases (3 examples)
5. Potential issues or edge cases
6. Best practices for using this pattern

Format the explanation with:
- Emojis for visual breaks
- Code blocks for examples
- Bullet points for lists
- Bold for important terms

Target level: [Absolute Beginner/Beginner/Intermediate]`,
    example: "Explain a React useEffect hook with cleanup function",
    tags: ["code", "learning", "education", "tutorial"],
    popularity: 94
  },
  {
    id: "d2",
    slug: "bug-fixer",
    title: "Bug Fixer",
    description: "Debug and fix code issues with explanations",
    category: "Development",
    subcategory: "Code Assistance",
    promptText: `Debug this code:

[PASTE CODE]

Error message (if any): [ERROR]

The issue is: [DESCRIBE WHAT'S WRONG]

Please provide:
1. Root cause analysis (why it's happening)
2. The fix (show corrected code)
3. Explanation of the fix (why it works)
4. Prevention tips (how to avoid this)
5. Alternative solutions (2-3 other ways)

Return format:
- Problem: [summary]
- Solution: [fixed code block]
- Explanation: [detailed]
- Prevention: [tips]`,
    example: "Fix infinite loop in React useEffect dependency array",
    tags: ["debugging", "code", "fix", "troubleshooting"],
    popularity: 96
  },
  {
    id: "d3",
    slug: "api-documentation",
    title: "API Documentation Writer",
    description: "Generate clean API documentation from code",
    category: "Development",
    subcategory: "Documentation",
    promptText: `Generate API documentation for:

Endpoint: [METHOD] [URL]
Description: [WHAT IT DOES]

Request parameters:
[PARAMETERS]

Response example:
[EXAMPLE]

Generate documentation with:
1. Overview (1 paragraph)
2. Authentication required: [Yes/No]
3. Request headers (if any)
4. Request body schema
5. Request example (curl and JavaScript fetch)
6. Response schema
7. Response example
8. Error codes (with meanings)
9. Rate limiting info
10. Version notes

Format with markdown tables for parameters and error codes.`,
    example: "Documentation for POST /api/users endpoint creating new users",
    tags: ["api", "documentation", "technical", "writing"],
    popularity: 90
  },
  {
    id: "d4",
    slug: "sql-query-builder",
    title: "SQL Query Builder",
    description: "Generate complex SQL queries from plain English",
    category: "Development",
    subcategory: "Database",
    promptText: `Generate SQL query for:

Database type: [MySQL/PostgreSQL/SQLite/SQL Server]
Tables: [LIST TABLES AND COLUMNS]
What I want: [DESCRIBE IN PLAIN ENGLISH]

Requirements:
- [SPECIFIC CONDITION 1]
- [SPECIFIC CONDITION 2]

Provide:
1. The SQL query (with proper formatting)
2. Explanation of what each part does
3. Expected output columns
4. Performance considerations (indexes needed)
5. Alternative queries (if applicable)
6. Edge cases to watch for

If complex, break into CTE or subquery format.
Add comments in the SQL explaining each section.`,
    example: "Get top 10 customers by total purchase amount in last 30 days",
    tags: ["sql", "database", "queries", "data"],
    popularity: 92
  },
  {
    id: "d5",
    slug: "unit-test-generator",
    title: "Unit Test Generator",
    description: "Generate unit tests for your code",
    category: "Development",
    subcategory: "Testing",
    promptText: `Generate unit tests for this function:

[PASTE FUNCTION CODE]

Testing framework: [Jest/Vitest/Pytest/JUnit]
Language: [JavaScript/TypeScript/Python/Java]

Requirements:
- Test happy path (normal input)
- Test edge cases (boundary values)
- Test error handling (invalid inputs)
- Mock external dependencies
- Test async behavior (if applicable)

Provide:
1. Describe what's being tested
2. Setup/teardown code
3. Individual test cases with descriptions
4. Assertion explanations
5. Code coverage expectations

Format with AAA pattern: Arrange, Act, Assert
Add comments explaining each test.`,
    example: "Jest tests for user authentication function",
    tags: ["testing", "unit tests", "quality", "code"],
    popularity: 89
  },
  {
    id: "d6",
    slug: "readme-generator",
    title: "README Generator",
    description: "Create professional README files for your projects",
    category: "Development",
    subcategory: "Documentation",
    promptText: `Generate a README.md for [PROJECT NAME].

Project type: [Web app/CLI tool/Library/API]
Tech stack: [TECHNOLOGIES USED]

Include these sections:
1. Title with badge bar (version, license, build status)
2. Description (what, why, who for)
3. Features (bullet points with emojis)
4. Demo/Screenshots (placeholder links)
5. Quick start (installation + basic usage)
6. Detailed usage (code examples)
7. API reference (if applicable)
8. Configuration options (with defaults)
9. Contributing guidelines
10. License info
11. Acknowledgments

Add emojis for visual appeal:
- 🚀 for features
- 📦 for installation
- 💡 for examples
- 🔧 for configuration
- 🤝 for contributing

Keep it professional but approachable.`,
    example: "README for Next.js SaaS boilerplate with authentication",
    tags: ["documentation", "github", "project", "readme"],
    popularity: 93
  },
  {
    id: "d7",
    slug: "web-app-builder",
    title: "Web App Builder",
    description: "Generate scaffolding for full-stack web applications",
    category: "Development",
    subcategory: "Web Development",
    promptText: `Create a full-stack web application for [APP IDEA].

Requirements:
1. Tech Stack Recommendation
   - Frontend: [React/Next.js/Vue/etc.]
   - Backend: [Node.js/Python/etc.]
   - Database: [PostgreSQL/MongoDB/etc.]
   - Hosting: [Vercel/AWS/etc.]

2. Project Structure
   - Folder organization
   - File naming conventions
   - Configuration files

3. Core Features
   - Authentication system
   - Database schema
   - API endpoints
   - UI components

4. Setup Instructions
   - Installation steps
   - Environment variables
   - Database setup
   - Running locally

5. Deployment Guide
   - Build process
   - Environment configuration
   - CI/CD pipeline

6. Security Considerations
   - Authentication best practices
   - Input validation
   - Rate limiting
   - HTTPS enforcement

Target users: [AUDIENCE]
Timeline: [TIMEFRAME]`,
    example: "Build a SaaS boilerplate with authentication and payments",
    tags: ["web development", "fullstack", "scaffolding", "project"],
    popularity: 91
  },
  {
    id: "d8",
    slug: "mobile-app-builder",
    title: "Mobile App Builder",
    description: "Generate project structure for iOS and Android apps",
    category: "Development",
    subcategory: "App Development",
    promptText: `Create a mobile application for [APP IDEA].

Requirements:
1. Platform Strategy
   - Native: [iOS/Android/Both]
   - Framework: [React Native/Flutter/Swift/Kotlin]
   - Cross-platform considerations

2. Core Features
   - User authentication
   - Data synchronization
   - Push notifications
   - Offline mode

3. UI/UX Design
   - Navigation structure
   - Screen layouts
   - Design system
   - Accessibility considerations

4. Technical Architecture
   - State management
   - API integration
   - Local storage
   - Third-party SDKs

5. Development Plan
   - Sprint breakdown
   - Testing strategy
   - Performance optimization

6. Launch Checklist
   - App store requirements
   - Beta testing
   - Marketing materials

Target audience: [AUDIENCE]
Budget: [BUDGET RANGE]`,
    example: "Build a fitness tracking app with social features",
    tags: ["mobile", "app development", "ios", "android"],
    popularity: 87
  },

  // ========== BUSINESS ==========
  {
    id: "b1",
    slug: "business-plan",
    title: "Business Plan Writer",
    description: "Create comprehensive business plans",
    category: "Business",
    subcategory: "Planning",
    promptText: `Create a business plan for [BUSINESS NAME].

Industry: [INDUSTRY]
Business model: [SaaS/Ecommerce/Service/Marketplace]
Target customers: [DESCRIBE]

Include:

1. Executive Summary (1 page)
   - Mission statement
   - Problem and solution
   - Business model
   - Financial highlights

2. Company Overview
   - History (if any)
   - Legal structure
   - Location
   - Milestones

3. Market Analysis
   - Industry size and growth
   - Target market segments
   - Customer needs/pain points
   - Competitor analysis (SWOT)

4. Product/Service
   - Detailed description
   - Pricing strategy
   - Unique value proposition
   - Roadmap (6-12 months)

5. Marketing Plan
   - Acquisition channels (primary/secondary)
   - Customer retention strategy
   - Brand positioning
   - Launch plan

6. Financial Plan
   - Startup costs (itemized)
   - Revenue projections (3 years table)
   - Profit and loss (first year monthly)
   - Break-even analysis

7. Funding Requirements
   - Amount needed
   - Use of funds
   - ROI projections

Use tables for financial data and bold key metrics.`,
    example: "Business plan for AI-powered content creation SaaS",
    tags: ["business", "plan", "startup", "strategy"],
    popularity: 91
  },
  {
    id: "b2",
    slug: "pitch-deck",
    title: "Pitch Deck Outline",
    description: "Create investor-ready pitch decks",
    category: "Business",
    subcategory: "Fundraising",
    promptText: `Create a pitch deck outline for [STARTUP NAME].

Industry: [INDUSTRY]
Stage: [Idea/Pre-seed/Seed/Series A]
Ask: [$AMOUNT]

Slides (10-12):

1. Title Slide
   - Company name + logo
   - Tagline (one sentence)
   - Presenter name + contact

2. Problem (1 slide)
   - Current pain points
   - Quantify the problem ($ lost, time wasted)
   - Who experiences it

3. Solution (1 slide)
   - Product demo screenshot/mockup
   - How it solves the problem
   - Key features

4. Why Now? (1 slide)
   - Market trends
   - Technology enablers
   - Timing advantage

5. Market Size (1 slide)
   - TAM, SAM, SOM calculation
   - Growth rate
   - Sources for numbers

6. Product (1-2 slides)
   - Screenshots/wireframes
   - User flow
   - Technical architecture (brief)

7. Traction (1 slide)
   - Key metrics: users, revenue, growth
   - Testimonials
   - Partnerships

8. Business Model (1 slide)
   - How you make money
   - Pricing tiers
   - Unit economics

9. Competition (1 slide)
   - Competitive matrix (2x2)
   - Your moats

10. Team (1 slide)
    - Founders (relevant experience)
    - Key hires
    - Advisors

11. Financials (1 slide)
    - 3-5 year projections
    - Key assumptions
    - Use of funds

12. Ask & Closing (1 slide)
    - Amount raising
    - Use of funds pie chart
    - Contact info

Each slide: minimal text, strong visuals, one key message.`,
    example: "Pitch deck for AI productivity tool raising $500k seed round",
    tags: ["pitch deck", "fundraising", "investors", "startup"],
    popularity: 89
  },
  {
    id: "b3",
    slug: "competitive-analysis",
    title: "Competitive Analysis",
    description: "Analyze competitors and identify opportunities",
    category: "Business",
    subcategory: "Strategy",
    promptText: `Perform competitive analysis for [YOUR PRODUCT] against [COMPETITOR NAMES].

Your product: [DESCRIPTION]
Target market: [MARKET]

Analyze each competitor on:

1. Company Overview
   - Founded year
   - Funding raised
   - Team size
   - Key customers

2. Product Features Matrix
   - Feature 1: Has/Doesn't have
   - Feature 2: Has/Doesn't have
   - Feature 3: Has/Doesn't have
   (Create table)

3. Pricing Comparison
   - Free tier available?
   - Starting price
   - Enterprise pricing
   - Hidden costs

4. GTM Strategy
   - Primary channels
   - Pricing model
   - Sales motion

5. Strengths (3-5)
6. Weaknesses (3-5)
7. Opportunities for us (3-5)
8. Threats to watch (3-5)

9. Positioning Statement
   - How we differentiate
   - Our unfair advantage

10. Battle Card (one-page summary)
    - Their pitch
    - How to counter
    - Key differentiators

Format with tables for feature comparison.`,
    example: "Competitive analysis of Zapier vs Make.com vs n8n",
    tags: ["competitive", "analysis", "strategy", "market"],
    popularity: 87
  },
  {
    id: "b4",
    slug: "customer-interview",
    title: "Customer Interview Script",
    description: "Conduct effective customer discovery interviews",
    category: "Business",
    subcategory: "Research",
    promptText: `Create a customer interview script for [PRODUCT IDEA].

Target user persona: [DESCRIBE]
Interview length: [15/30/45] minutes

Script structure:

1. Introduction (2 min)
   - Thank them for their time
   - Explain purpose (improving product, not selling)
   - Get permission to record
   - Confidentiality promise

2. Warm-up questions (3 min)
   - "Tell me about your role and daily responsibilities"
   - "What tools do you use most often?"
   - "What's the hardest part of your job?"

3. Problem exploration (10 min)
   - "Walk me through how you currently handle [TASK]"
   - "What frustrates you about this process?"
   - "How much time/money does this cost you?"
   - "Have you tried solving this before?"
   - "What didn't work about those solutions?"

4. Solution feedback (10 min)
   - Show prototype/screenshots/wireframe
   - "What's your first impression?"
   - "What would you change?"
   - "How would this fit into your workflow?"
   - "What's missing?"

5. Willingness to pay (5 min)
   - "If this solved your problem, what would you pay?"
   - "Would you switch from current solution?"
   - "What would make this a 'must-have'?"

6. Closing (2 min)
   - "Is there anyone else you'd recommend we talk to?"
   - "Can we follow up if we have more questions?"
   - Thank them again

Probing techniques:
- "Tell me more about that..."
- "Why is that important to you?"
- "Show me how you do that..."

Avoid leading questions. Focus on past behavior, not future intent.`,
    example: "Customer interview for project management tool for remote teams",
    tags: ["customer", "interview", "research", "validation"],
    popularity: 88
  },
  {
    id: "b5",
    slug: "sales-script",
    title: "Sales Script Writer",
    description: "Create effective sales scripts for calls and demos",
    category: "Business",
    subcategory: "Sales",
    promptText: `Create a sales script for [PRODUCT/SERVICE].

Sales scenario: [Cold call/Demo/Follow-up/Closing]
Target audience: [AUDIENCE]
Call duration: [5/15/30] minutes

Script structure:

1. Opening (30 seconds)
   - Greeting and introduction
   - Permission to continue
   - Quick credibility statement

2. Discovery (2-3 minutes)
   - Open-ended questions
   - Pain point identification
   - Budget and timeline questions

3. Value Proposition (1-2 minutes)
   - Key benefits
   - Differentiation from competitors
   - Relevant case study

4. Demo/Explanation (3-5 minutes)
   - Key features to highlight
   - How it solves their specific problem
   - ROI calculation

5. Objection Handling
   - Price objections
   - Timing objections
   - Competitor comparisons
   - "I need to think about it"

6. Closing
   - Trial offer
   - Next steps
   - Follow-up plan

Include:
- Tone guidelines
- Pacing notes
- Power phrases
- Red flags to watch for`,
    example: "Sales script for SaaS project management tool",
    tags: ["sales", "script", "calling", "closing"],
    popularity: 86
  },

  // ========== DESIGN ==========
  {
    id: "ds1",
    slug: "ui-design-prompt",
    title: "UI Design Prompt Generator",
    description: "Generate detailed prompts for UI design tasks",
    category: "Design",
    subcategory: "UI/UX Design",
    promptText: `Create a UI design prompt for [TYPE OF INTERFACE].

Requirements:
1. Project Context
   - Product/feature description
   - Target users
   - Business goals

2. Design Requirements
   - Platform: [Web/Mobile/Desktop]
   - Screen size: [Responsive/Fixed]
   - Key user flows
   - Accessibility requirements

3. Visual Direction
   - Style: [Minimal/Bold/Playful/Professional]
   - Color palette preferences
   - Typography guidelines
   - Imagery style

4. Component Specifications
   - Navigation pattern
   - Form elements
   - Cards and lists
   - Buttons and CTAs

5. Interaction Design
   - Micro-interactions
   - Loading states
   - Error states
   - Empty states

6. Deliverables
   - Wireframes
   - High-fidelity mockups
   - Design system components
   - Prototype interactions

Inspiration references: [LIST 2-3 COMPETITORS OR DESIGN REFERENCES]`,
    example: "UI design prompt for a fintech dashboard",
    tags: ["ui", "ux", "design", "interface"],
    popularity: 85
  },
  {
    id: "ds2",
    slug: "photo-editing-prompt",
    title: "Photo Editing Prompt",
    description: "Generate prompts for photo editing and enhancement",
    category: "Design",
    subcategory: "Photo Editing",
    promptText: `Create a photo editing prompt for [TYPE OF EDIT].

Photo details:
- Subject: [DESCRIBE SUBJECT]
- Setting: [INDOOR/OUTDOOR/LOCATION]
- Lighting: [NATURAL/STUDIO/MIXED]
- Current issues: [WHAT NEEDS FIXING]

Editing requirements:
1. Color and Tone
   - Color grading style: [WARM/COOL/MONOCHROME/CINEMATIC]
   - Contrast adjustment
   - Saturation level
   - Highlights and shadows

2. Retouching
   - Skin smoothing
   - Background cleanup
   - Object removal
   - Perspective correction

3. Composition
   - Cropping guidelines
   - Rule of thirds
   - Leading lines
   - Framing

4. Effects
   - Vignette
   - Grain/noise
   - Blur effects
   - Light leaks

5. Output specifications
   - Resolution: [WEB/PRINT/SOCIAL]
   - Format: [JPG/PNG/RAW]
   - Color profile: [sRGB/AdobeRGB]

Style reference: [REFERENCE IMAGE OR ARTIST STYLE]`,
    example: "Photo editing prompt for a portrait with cinematic look",
    tags: ["photo", "editing", "retouching", "visual"],
    popularity: 84
  },
  {
    id: "ds3",
    slug: "video-editing-prompt",
    title: "Video Editing Prompt",
    description: "Generate prompts for video editing and post-production",
    category: "Design",
    subcategory: "Video Editing",
    promptText: `Create a video editing prompt for [TYPE OF VIDEO].

Video details:
- Duration: [LENGTH]
- Platform: [YouTube/Instagram/TikTok/Commercial]
- Style: [VLOG/TUTORIAL/MUSIC VIDEO/DOCUMENTARY]
- Target audience: [AUDIENCE]

Editing requirements:
1. Structure
   - Opening hook (0:00-0:10)
   - Main content segments
   - Transitions between scenes
   - Closing and call-to-action

2. Visual Style
   - Color grading: [WARM/COOL/CINEMATIC/VINTAGE]
   - Aspect ratio: [16:9/9:16/1:1]
   - Frame rate: [24/30/60 fps]
   - Resolution: [4K/1080p/720p]

3. Audio
   - Background music style
   - Sound effects
   - Voiceover guidelines
   - Audio levels and mixing

4. Motion Graphics
   - Text overlays
   - Lower thirds
   - Animations
   - Logo placement

5. Effects
   - Slow motion
   - Time lapse
   - Color transitions
   - Particle effects

6. Export settings
   - File format
   - Bitrate
   - Platform-specific optimizations

Reference: [SIMILAR VIDEO OR STYLE REFERENCE]`,
    example: "Video editing prompt for a product launch teaser",
    tags: ["video", "editing", "post-production", "motion"],
    popularity: 83
  },

  // ========== PRODUCTIVITY ==========
  {
    id: "p1",
    slug: "task-prioritization",
    title: "Task Prioritization Framework",
    description: "Prioritize tasks using proven frameworks",
    category: "Productivity",
    subcategory: "Task Management",
    promptText: `Help me prioritize these tasks using the [EISENHOWER/MO SCORE/ICE MODEL] framework.

My tasks:
- [TASK 1]: [DEADLINE] - [IMPACT]
- [TASK 2]: [DEADLINE] - [IMPACT]
- [TASK 3]: [DEADLINE] - [IMPACT]

My goals:
- [GOAL 1]
- [GOAL 2]

Constraints:
- Available hours per day: [HOURS]
- Energy levels: [HIGHEST/MEDIUM/LOWEST TIMES]
- Dependencies: [WHAT DEPENDS ON WHAT]

Provide:
1. Prioritized task list with reasoning
2. Time-blocked schedule
3. Delegation recommendations
4. Elimination suggestions
5. Weekly review template`,
    example: "Prioritize 10 tasks for a product manager using ICE model",
    tags: ["productivity", "tasks", "prioritization", "planning"],
    popularity: 86
  },
  {
    id: "p2",
    slug: "meeting-agenda",
    title: "Meeting Agenda Generator",
    description: "Create effective meeting agendas and minutes",
    category: "Productivity",
    subcategory: "Meetings",
    promptText: `Create a meeting agenda for [MEETING TYPE].

Meeting details:
- Type: [Team sync/Planning/Review/1:1/Brainstorm]
- Duration: [30/60/90] minutes
- Participants: [LIST ROLES]
- Goal: [WHAT YOU WANT TO ACHIEVE]

Agenda structure:
1. Opening (5 min)
   - Welcome and check-in
   - Previous action items review

2. Main Topics
   - Topic 1: [DESCRIPTION] ([TIME] min)
     - Discussion points
     - Decision needed
     - Owner: [NAME]
   - Topic 2: [DESCRIPTION] ([TIME] min)
     - Discussion points
     - Decision needed
     - Owner: [NAME]
   - Topic 3: [DESCRIPTION] ([TIME] min)
     - Discussion points
     - Decision needed
     - Owner: [NAME]

3. Wrap-up (5 min)
   - Action items summary
   - Next steps
   - Next meeting date

Include:
- Pre-meeting preparation checklist
- Time allocation for each section
- Decision log template
- Follow-up email template`,
    example: "Weekly team sync agenda for product team",
    tags: ["meetings", "agenda", "productivity", "collaboration"],
    popularity: 85
  },
  {
    id: "p3",
    slug: "daily-planner",
    title: "Daily Planner",
    description: "Plan your day for maximum productivity",
    category: "Productivity",
    subcategory: "Task Management",
    promptText: `Create a daily plan for [DATE/TYPICAL DAY].

My context:
- Top 3 priorities: [PRIORITY 1], [PRIORITY 2], [PRIORITY 3]
- Available hours: [HOURS]
- Energy patterns: [MORNING PERSON/NIGHT OWL/etc.]
- Meetings: [LIST FIXED MEETINGS]
- Deadlines: [UPCOMING DEADLINES]

Plan structure:
1. Morning Block ([TIME] - [TIME])
   - High-focus work
   - Most important task
   - Break schedule

2. Midday Block ([TIME] - [TIME])
   - Meetings
   - Collaborative work
   - Lunch break

3. Afternoon Block ([TIME] - [TIME])
   - Secondary tasks
   - Admin work
   - Learning/development

4. Evening Block ([TIME] - [TIME])
   - Wrap-up
   - Next day prep
   - Reflection

Include:
- Buffer time for unexpected tasks
- Break schedule (Pomodoro/custom)
- Energy-based task assignment
- Contingency plan for interruptions`,
    example: "Daily plan for a remote software developer",
    tags: ["productivity", "planning", "daily", "schedule"],
    popularity: 84
  },
  {
    id: "p4",
    slug: "email-template-manager",
    title: "Email Template Manager",
    description: "Generate professional email templates for common scenarios",
    category: "Productivity",
    subcategory: "Email Writing",
    promptText: `Create an email template for [SCENARIO].

Email type: [Request/Follow-up/Introduction/Apology/Feedback/etc.]
Tone: [Professional/Friendly/Casual/Formal]
Length: [Short/Medium/Long]

Template requirements:
1. Subject line options (3 variations)
2. Opening greeting
3. Body structure
   - Context setting
   - Main message
   - Call to action
4. Closing
5. Signature block

Customization points:
- [NAME]
- [DATE]
- [SPECIFIC DETAILS]
- [LINKS/ATTACHMENTS]

Include:
- Placeholder guide
- Tone adjustments for different recipients
- Follow-up template
- Alternative closings`,
    example: "Email template for requesting a deadline extension",
    tags: ["email", "templates", "productivity", "communication"],
    popularity: 83
  },
  {
    id: "p5",
    slug: "note-taking-system",
    title: "Note-Taking System",
    description: "Create a structured note-taking system for meetings and learning",
    category: "Productivity",
    subcategory: "Task Management",
    promptText: `Design a note-taking system for [USE CASE].

Use case: [Meetings/Learning/Research/Project Management]
Tool preference: [Notion/Obsidian/Apple Notes/Paper/etc.]
Sharing needs: [Personal/Team/Public]

System structure:
1. Template Design
   - Header fields
   - Section organization
   - Tagging system
   - Linking structure

2. Content Framework
   - Key points format
   - Action items capture
   - Decision log
   - Reference links

3. Organization System
   - Folder structure
   - Naming conventions
   - Date formats
   - Search strategy

4. Review Process
   - Daily review
   - Weekly synthesis
   - Monthly archive
   - Knowledge extraction

5. Integration
   - Calendar linking
   - Task management
   - CRM/notes sync
   - Backup strategy

Include example entries and migration guide from current system.`,
    example: "Note-taking system for engineering team meetings",
    tags: ["notes", "productivity", "organization", "learning"],
    popularity: 82
  },

  // ========== ADDITIONAL WRITING ==========
  {
    id: "w7",
    slug: "storytelling-framework",
    title: "Storytelling Framework",
    description: "Structure compelling narratives for any medium",
    category: "Writing",
    subcategory: "Creative Writing",
    promptText: `Create a story about [TOPIC/THEME].

Story type: [Personal/Business/Fictional/Case Study]
Length: [Short/Medium/Long]
Audience: [AUDIENCE]

Story structure:
1. Hook (Opening)
   - Attention-grabbing moment
   - Relatable character/situation
   - Tension or conflict

2. Journey
   - Challenge faced
   - Attempts to solve
   - Turning point
   - Climax

3. Resolution
   - Outcome
   - Transformation
   - Lesson learned

4. Takeaway
   - Key message
   - Call to reflection
   - Application to audience

Style elements:
- Voice: [First/Second/Third person]
- Tone: [Inspirational/Educational/Entertaining]
- Pacing: [Fast/Medium/Slow]
- Perspective: [Internal/External/Omniscient]

Include:
- Character development notes
- Dialogue guidelines
- Sensory details suggestions
- Editing checklist`,
    example: "Story about a founder's journey from failure to success",
    tags: ["storytelling", "creative", "narrative", "writing"],
    popularity: 87
  },
  {
    id: "w8",
    slug: "technical-documentation",
    title: "Technical Documentation Writer",
    description: "Write clear technical documentation for developers and users",
    category: "Writing",
    subcategory: "Technical Writing",
    promptText: `Write technical documentation for [PRODUCT/FEATURE].

Document type: [API/SDK/User Guide/Tutorial/Reference]
Audience: [Developers/End Users/Administrators]
Technical level: [Beginner/Intermediate/Advanced]

Documentation structure:
1. Overview
   - What it is
   - What it does
   - When to use it

2. Prerequisites
   - Required knowledge
   - Dependencies
   - Setup requirements

3. Getting Started
   - Installation
   - Configuration
   - First use example

4. Core Concepts
   - Key terminology
   - Architecture overview
   - Data flow diagrams

5. Usage Examples
   - Basic example
   - Intermediate example
   - Advanced example
   - Common patterns

6. Troubleshooting
   - Common issues
   - Error messages
   - FAQ

7. Reference
   - API endpoints
   - Configuration options
   - Best practices

Include code blocks, diagrams, and cross-references.`,
    example: "Technical docs for a REST API authentication system",
    tags: ["technical", "documentation", "api", "writing"],
    popularity: 86
  },

  // ========== ADDITIONAL MARKETING ==========
  {
    id: "m7",
    slug: "content-calendar",
    title: "Content Calendar Planner",
    description: "Plan a month of content across all platforms",
    category: "Marketing",
    subcategory: "Social Media Marketing",
    promptText: `Create a 4-week content calendar for [BRAND/PRODUCT].

Platforms: [Instagram/Twitter/LinkedIn/TikTok/YouTube/etc.]
Goals: [Awareness/Engagement/Conversions/Retention]
Content pillars: [3-5 main themes]

Calendar structure:
Week 1: [THEME]
- Monday: [POST TYPE] - [TOPIC]
- Wednesday: [POST TYPE] - [TOPIC]
- Friday: [POST TYPE] - [TOPIC]

Week 2: [THEME]
- Monday: [POST TYPE] - [TOPIC]
- Wednesday: [POST TYPE] - [TOPIC]
- Friday: [POST TYPE] - [TOPIC]

Week 3: [THEME]
Week 4: [THEME]

For each post include:
- Caption/hook
- Hashtags
- Visual description
- Call-to-action
- Best posting time

Include:
- Content repurposing plan
- Trending topics to leverage
- Engagement strategy
- Analytics checkpoints`,
    example: "Content calendar for a fitness brand",
    tags: ["content", "calendar", "social media", "planning"],
    popularity: 88
  },
  {
    id: "m8",
    slug: "ad-copy-generator",
    title: "Ad Copy Generator",
    description: "Write high-converting ad copy for paid campaigns",
    category: "Marketing",
    subcategory: "Copywriting",
    promptText: `Write ad copy for [PRODUCT/SERVICE].

Platform: [Google Ads/Facebook/Instagram/LinkedIn/TikTok]
Campaign goal: [Awareness/Consideration/Conversion]
Target audience: [AUDIENCE]
Budget: [BUDGET RANGE]

Ad structure:
1. Headline (max 30 chars)
   - Benefit-driven
   - Urgency element
   - Brand mention

2. Description (max 90 chars)
   - Key benefit
   - Social proof
   - CTA

3. Body copy
   - Problem agitation
   - Solution presentation
   - Proof points
   - Strong CTA

4. Visual direction
   - Image/video concept
   - Color scheme
   - Text overlay suggestions

Variations needed:
- 3 headline options
- 2 description options
- 2 CTA options

Include A/B testing recommendations.`,
    example: "Facebook ad copy for a SaaS productivity tool",
    tags: ["ads", "copywriting", "paid", "conversion"],
    popularity: 90
  },
  {
    id: "m9",
    slug: "press-release",
    title: "Press Release Writer",
    description: "Write professional press releases for product launches",
    category: "Marketing",
    subcategory: "PR",
    promptText: `Write a press release for [COMPANY NAME] announcing [NEWS].

Press release structure:

FOR IMMEDIATE RELEASE

[HEADLINE]: Compelling, under 15 words
[SUBHEADLINE]: Supporting detail, under 20 words

[CITY, State] — [DATE] — [COMPANY NAME], a [COMPANY DESCRIPTION], today announced [ANNOUNCEMENT].

[Quote from CEO/Founder]: "..."

Key details:
- [Feature/Benefit 1]
- [Feature/Benefit 2]
- [Feature/Benefit 3]

[Quote from customer/partner]: "..."

[Availability details]: Pricing, where to buy

[Call-to-action]: Visit [URL] for more information

### About [COMPANY NAME]
[Company boilerplate - 50 words]

### Media Contact
[Name], [Title]
[Email]
[Phone]

Include ### at the end for "###"`,
    example: "Press release for AI startup launching new chatbot platform",
    tags: ["pr", "marketing", "announcement", "media"],
    popularity: 85
  },

  // ========== ADDITIONAL DEVELOPMENT ==========
  {
    id: "d9",
    slug: "frontend-component",
    title: "Frontend Component Generator",
    description: "Generate reusable frontend components with best practices",
    category: "Development",
    subcategory: "Web Development",
    promptText: `Create a [REACT/VUE/SVELTE/etc.] component for [COMPONENT NAME].

Requirements:
1. Component purpose and behavior
2. Props interface
   - Required props
   - Optional props with defaults
   - Prop types and validation

3. State management
   - Local state
   - Derived state
   - Side effects

4. Styling approach
   - CSS Modules/Tailwind/Styled-components/etc.
   - Responsive design
   - Dark mode support

5. Accessibility
   - ARIA labels
   - Keyboard navigation
   - Screen reader support

6. Performance
   - Memoization
   - Lazy loading
   - Bundle size considerations

7. Testing
   - Unit test examples
   - Edge cases
   - Interaction tests

Include:
- File structure
- Usage examples
- Storybook/ documentation
- Migration guide from existing component`,
    example: "React data table component with sorting and pagination",
    tags: ["frontend", "components", "react", "ui"],
    popularity: 91
  },
  {
    id: "d10",
    slug: "database-schema",
    title: "Database Schema Designer",
    description: "Design normalized database schemas for applications",
    category: "Development",
    subcategory: "Database",
    promptText: `Design a database schema for [APPLICATION TYPE].

Requirements:
1. Entities and relationships
   - Main entities
   - Relationships (1:1, 1:N, N:N)
   - Junction tables

2. Table structure
   - Column definitions
   - Data types
   - Constraints
   - Default values

3. Indexing strategy
   - Primary keys
   - Foreign keys
   - Performance indexes
   - Full-text search indexes

4. Normalization
   - 3NF compliance
   - Denormalization where needed
   - Data integrity rules

5. Scalability
   - Partitioning strategy
   - Archiving policy
   - Sharding considerations

6. Security
   - Row-level security
   - Data encryption
   - Audit logging

Database: [PostgreSQL/MySQL/MongoDB/etc.]
Scale: [Expected rows/users]`,
    example: "E-commerce database schema with products, orders, and users",
    tags: ["database", "schema", "sql", "design"],
    popularity: 88
  },
  {
    id: "d11",
    slug: "api-integration",
    title: "API Integration Helper",
    description: "Generate code for integrating third-party APIs",
    category: "Development",
    subcategory: "Web Development",
    promptText: `Integrate [API NAME] into [PROJECT TYPE].

API details:
- Endpoint: [ENDPOINT URL]
- Method: [GET/POST/PUT/DELETE]
- Auth: [API Key/OAuth/Basic/etc.]
- Rate limits: [LIMITS]

Integration requirements:
1. Client setup
   - Authentication
   - Base URL configuration
   - Error handling

2. Request building
   - Headers
   - Body/payload
   - Query parameters
   - File uploads

3. Response handling
   - Success responses
   - Error responses
   - Retry logic
   - Caching strategy

4. Type safety
   - Request/response types
   - Validation schemas
   - Error types

5. Testing
   - Mock responses
   - Integration tests
   - Error scenario tests

6. Documentation
   - Usage examples
   - Error code reference
   - Rate limit handling

Language/Framework: [JavaScript/Python/etc.]
Project structure: [Existing codebase details]`,
    example: "Stripe payment integration for a Node.js e-commerce site",
    tags: ["api", "integration", "web", "backend"],
    popularity: 89
  },

  // ========== ADDITIONAL BUSINESS ==========
  {
    id: "b6",
    slug: "market-research",
    title: "Market Research Framework",
    description: "Conduct thorough market research for new ventures",
    category: "Business",
    subcategory: "Research",
    promptText: `Conduct market research for [PRODUCT/SERVICE/INDUSTRY].

Research scope:
1. Market size and growth
   - TAM, SAM, SOM
   - Growth rate
   - Market trends

2. Customer analysis
   - Demographics
   - Psychographics
   - Pain points
   - Buying behavior

3. Competitive landscape
   - Direct competitors
   - Indirect competitors
   - Market share
   - Competitive advantages

4. SWOT analysis
   - Strengths
   - Weaknesses
   - Opportunities
   - Threats

5. Entry strategy
   - Market entry points
   - Differentiation strategy
   - Go-to-market plan
   - Pricing strategy

6. Risk assessment
   - Market risks
   - Competitive risks
   - Regulatory risks
   - Financial risks

Include data sources, methodology, and actionable recommendations.`,
    example: "Market research for AI-powered customer support tool",
    tags: ["market research", "business", "analysis", "strategy"],
    popularity: 87
  },
  {
    id: "b7",
    slug: "partnership-agreement",
    title: "Partnership Agreement Outline",
    description: "Create outlines for business partnership agreements",
    category: "Business",
    subcategory: "Legal",
    promptText: `Create a partnership agreement outline for [BUSINESS TYPE].

Parties: [PARTY A] and [PARTY B]
Partnership type: [Equity/Joint Venture/Strategic Alliance]
Duration: [TIMEFRAME]

Agreement structure:
1. Definitions and Interpretation
2. Partnership Purpose
   - Business activities
   - Scope of work
   - Exclusions

3. Capital Contributions
   - Initial contributions
   - Additional contributions
   - Valuation method

4. Profit and Loss Distribution
   - Split ratio
   - Distribution schedule
   - Reinvestment policy

5. Roles and Responsibilities
   - Management structure
   - Decision-making process
   - Key responsibilities

6. Intellectual Property
   - Ownership
   - Licensing
   - Transfer restrictions

7. Term and Termination
   - Duration
   - Termination conditions
   - Exit strategy
   - Buyout terms

8. Dispute Resolution
   - Mediation
   - Arbitration
   - Governing law

Include boilerplate clauses and checklist for legal review.`,
    example: "Partnership agreement for a SaaS integration partnership",
    tags: ["legal", "partnership", "business", "contract"],
    popularity: 84
  },
  {
    id: "b8",
    slug: "investor-update",
    title: "Investor Update Email",
    description: "Write compelling monthly updates for investors",
    category: "Business",
    subcategory: "Fundraising",
    promptText: `Write an investor update for [MONTH/QUARTER].

Company: [COMPANY NAME]
Stage: [Pre-seed/Seed/Series A/etc.]
Key metrics:
- Revenue: $[AMOUNT] ([GROWTH]%)
- Users: [NUMBER] ([GROWTH]%)
- Other KPIs: [METRICS]

Update structure:
1. Header
   - Company name and date
   - Quick summary (1 sentence)

2. Highlights
   - Top 3 wins
   - Key metrics dashboard
   - Milestone achieved

3. Challenges
   - What didn't go well
   - Root cause analysis
   - Mitigation plan

4. Upcoming
   - Next 30-60-90 day goals
   - Key launches
   - Hiring plans

5. Ask (if applicable)
   - Specific help needed
   - Introductions requested
   - Feedback wanted

Tone: [Professional/Conversational/Data-driven]
Length: [Short/Medium/Long]

Include:
- Visual metrics suggestions
- Follow-up actions
- Calendar for next update`,
    example: "Monthly investor update for a B2B SaaS startup",
    tags: ["investors", "fundraising", "updates", "business"],
    popularity: 85
  },

  // ========== ADDITIONAL DESIGN ==========
  {
    id: "ds4",
    slug: "brand-identity",
    title: "Brand Identity Generator",
    description: "Create comprehensive brand identity guidelines",
    category: "Design",
    subcategory: "Branding",
    promptText: `Create brand identity guidelines for [BRAND NAME].

Brand details:
- Industry: [INDUSTRY]
- Target audience: [AUDIENCE]
- Brand personality: [LUXURY/TECH/FRIENDLY/PROFESSIONAL/etc.]
- Values: [CORE VALUES]

Brand identity components:
1. Brand Story
   - Origin story
   - Mission statement
   - Vision statement
   - Core values

2. Visual Identity
   - Logo usage
   - Color palette
     - Primary colors (hex codes)
     - Secondary colors
     - Neutral palette
   - Typography
     - Headings font
     - Body font
     - Accent font
   - Imagery style
   - Iconography

3. Brand Voice
   - Tone of voice
   - Key messaging
   - Taglines
   - Do's and don'ts

4. Application
   - Business cards
   - Letterhead
   - Social media
   - Website
   - Marketing materials

5. Brand Guidelines
   - Clear space rules
   - Minimum sizes
   - Incorrect usage
   - Co-branding rules

Include brand mood board description and competitive differentiation.`,
    example: "Brand identity for a sustainable fashion startup",
    tags: ["branding", "identity", "design", "guidelines"],
    popularity: 86
  },
  {
    id: "ds5",
    slug: "logo-design",
    title: "Logo Design Prompt",
    description: "Generate detailed logo design briefs",
    category: "Design",
    subcategory: "Branding",
    promptText: `Create a logo design brief for [BRAND NAME].

Brand information:
- Industry: [INDUSTRY]
- Target audience: [AUDIENCE]
- Brand values: [VALUES]
- Personality: [MODERN/CLASSIC/PLAYFUL/PROFESSIONAL]

Design requirements:
1. Logo type
   - Wordmark/Lettermark
   - Pictorial mark
   - Abstract mark
   - Mascot
   - Combination mark

2. Style direction
   - Minimal/Detailed
   - Flat/Gradient/3D
   - Monochrome/Color
   - Modern/Retro

3. Color psychology
   - Primary color rationale
   - Secondary colors
   - Color meanings

4. Typography
   - Font style
   - Letter spacing
   - Weight

5. Concept exploration
   - 3-5 concept directions
   - Symbolism
   - Memorability factors

6. Deliverables
   - Vector files
   - Variations (horizontal/vertical/icon)
   - Color versions
   - Monochrome version

Include:
- Competitor logo analysis
- Scalability requirements
- Usage examples`,
    example: "Logo design brief for a tech startup",
    tags: ["logo", "branding", "design", "visual"],
    popularity: 85
  },
  {
    id: "ds6",
    slug: "infographic-design",
    title: "Infographic Design Prompt",
    description: "Create prompts for designing informative infographics",
    category: "Design",
    subcategory: "Visual Content",
    promptText: `Design an infographic about [TOPIC].

Infographic type: [Statistical/Timeline/Process/Comparison/List]
Audience: [AUDIENCE]
Platform: [Web/Social/Print/Presentation]

Content structure:
1. Headline
   - Main title
   - Subtitle
   - Key statistic

2. Data visualization
   - Chart types (bar/line/pie/etc.)
   - Data points
   - Scale and axes

3. Information hierarchy
   - Primary message
   - Supporting points
   - Details

4. Visual elements
   - Icons
   - Illustrations
   - Photos
   - Graphics

5. Color scheme
   - Primary palette
   - Data colors
   - Background treatment

6. Layout
   - Grid system
   - Flow direction
   - White space

7. Typography
   - Headings
   - Body text
   - Data labels

Include:
- Data sources
- Design tools recommendation
- Accessibility checklist
- Export specifications`,
    example: "Infographic about climate change statistics",
    tags: ["infographic", "visual", "design", "data"],
    popularity: 83
  },

  // ========== ADDITIONAL PRODUCTIVITY ==========
  {
    id: "p6",
    slug: "automation-workflow",
    title: "Automation Workflow Designer",
    description: "Design automated workflows for repetitive tasks",
    category: "Productivity",
    subcategory: "Automation",
    promptText: `Design an automation workflow for [TASK/PROCESS].

Current process:
1. [STEP 1]
2. [STEP 2]
3. [STEP 3]

Pain points:
- [PAIN POINT 1]
- [PAIN POINT 2]

Automation goals:
- Save time: [HOURS/WEEK]
- Reduce errors
- Improve consistency

Workflow design:
1. Trigger
   - Event that starts workflow
   - Schedule/frequency
   - Conditions

2. Actions
   - Step 1: [ACTION]
   - Step 2: [ACTION]
   - Step 3: [ACTION]

3. Decision points
   - Conditional logic
   - Error handling
   - Approval gates

4. Output
   - Final deliverable
   - Notification method
   - Storage location

Tools: [Zapier/Make.com/n8n/Power Automate/etc.]
Integrations needed: [APPS/SERVICES]

Include:
- Before/after comparison
- ROI calculation
- Testing plan
- Maintenance schedule`,
    example: "Automated invoice processing workflow for small business",
    tags: ["automation", "workflow", "productivity", "zapier"],
    popularity: 87
  },
  {
    id: "p7",
    slug: "goal-setting-framework",
    title: "Goal Setting Framework",
    description: "Set and track goals using proven methodologies",
    category: "Productivity",
    subcategory: "Task Management",
    promptText: `Create a goal-setting plan using [OKR/SMART/3-3-3/etc.] framework.

My context:
- Time horizon: [Quarter/Year/5 years]
- Current role: [ROLE]
- Key responsibilities: [RESPONSIBILITIES]
- Resources available: [TIME/BUDGET/TOOLS]

Goal structure:
1. Vision
   - Long-term vision (1-3 years)
   - Core values alignment
   - Success definition

2. Strategic goals
   - Goal 1: [OBJECTIVE]
     - Key results
     - Initiatives
   - Goal 2: [OBJECTIVE]
     - Key results
     - Initiatives
   - Goal 3: [OBJECTIVE]
     - Key results
     - Initiatives

3. Action plan
   - Weekly actions
   - Monthly milestones
   - Quarterly reviews

4. Tracking system
   - Metrics to track
   - Review frequency
   - Adjustment process

Include:
- Accountability mechanisms
- Obstacle planning
- Celebration milestones`,
    example: "OKR framework for a product manager",
    tags: ["goals", "planning", "productivity", "okr"],
    popularity: 84
  },
  {
    id: "p8",
    slug: "knowledge-base",
    title: "Knowledge Base Builder",
    description: "Structure and organize team knowledge bases",
    category: "Productivity",
    subcategory: "Automation",
    promptText: `Build a knowledge base for [TEAM/PROJECT].

Audience: [Internal team/Customers/Partners]
Tools: [Notion/Confluence/GitBook/Custom/etc.]
Content types: [Documentation/FAQs/Tutorials/Reference]

Knowledge base structure:
1. Top-level categories
   - Getting started
   - Core processes
   - Tools and resources
   - Policies and guidelines
   - Troubleshooting

2. Content templates
   - Process documentation
   - How-to guides
   - Decision trees
   - FAQ format

3. Organization system
   - Naming conventions
   - Tagging strategy
   - Search optimization
   - Cross-linking

4. Maintenance plan
   - Review schedule
   - Update triggers
   - Owner assignments
   - Archival policy

5. Access control
   - Public/internal/restricted
   - Permissions matrix
   - Version control

Include:
- Migration checklist from current docs
- Contribution guidelines
- Quality standards
- Analytics and feedback loops`,
    example: "Knowledge base for a remote engineering team",
    tags: ["knowledge base", "documentation", "team", "productivity"],
    popularity: 82
  }
];

// Helper functions
export function getPromptBySlug(slug: string): Prompt | undefined {
  return prompts.find(prompt => prompt.slug === slug);
}

export function getPromptsByCategory(category: string): Prompt[] {
  return prompts.filter(prompt => prompt.category === category);
}

export function getPromptsBySubcategory(category: string, subcategory: string): Prompt[] {
  return prompts.filter(prompt => prompt.category === category && prompt.subcategory === subcategory);
}

export function getCategories(): string[] {
  const categories = new Set(prompts.map(prompt => prompt.category));
  return Array.from(categories);
}

export function getSubcategories(category: string): string[] {
  const subcategories = new Set(
    prompts.filter(prompt => prompt.category === category).map(prompt => prompt.subcategory)
  );
  return Array.from(subcategories);
}

export function getCategoryPromptCount(category: string): number {
  return prompts.filter(prompt => prompt.category === category).length;
}

export function getSubcategoryPromptCount(category: string, subcategory: string): number {
  return prompts.filter(prompt => prompt.category === category && prompt.subcategory === subcategory).length;
}

export function getAlternativePrompts(currentPrompt: Prompt, limit: number = 3): Prompt[] {
  const sameCategory = prompts.filter(p => 
    p.id !== currentPrompt.id && p.category === currentPrompt.category
  );
  
  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }
  
  const similarTags = prompts.filter(p => 
    p.id !== currentPrompt.id &&
    p.tags.some(tag => currentPrompt.tags.includes(tag))
  );
  
  return [...sameCategory, ...similarTags].slice(0, limit);
}
