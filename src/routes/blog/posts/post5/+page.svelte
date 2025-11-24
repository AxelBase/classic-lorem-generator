<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>When to Use Short, Medium, Long — or Random Paragraphs | AxelBase Blog</title>
	<meta name="description" content="A designer’s guide to choosing the perfect paragraph length for hero sections, articles, cards, and print layouts." />
	<meta property="og:title" content="When to Use Short, Medium, Long — or Random Paragraphs" />
	<meta property="og:description" content="Stop guessing. Here’s exactly when to use each length setting for professional results." />
	<meta property="og:url" content="{base}/blog/posts/post5" />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container py-5 max-w-800">
	<nav class="breadcrumbs mb-4">
		<a href="{base}/blog">Blog</a> → <span>When to Use Each Length</span>
	</nav>

	<article class="prose">
		<h1>When to Use Short, Medium, Long — or Random Paragraphs</h1>
		<p class="post-meta">Published: November 28, 2025</p>

		<p>Paragraph length isn’t just aesthetic — it’s functional. The wrong length breaks flow, ruins scannability, or makes content feel unbalanced.</p>

		<p>Here’s your definitive cheat sheet:</p>

		<h2>Short (50–80 words) — Use For:</h2>
		<ul>
			<li>Hero section intros</li>
			<li>Pricing card descriptions</li>
			<li>Testimonial quotes</li>
			<li>Mobile-first layouts</li>
			<li>Call-to-action blocks</li>
		</ul>
		<p>Keeps attention tight and focused.</p>

		<h2>Medium (80–120 words) — The Universal Default</h2>
		<p>Use almost everywhere:</p>
		<ul>
			<li>Feature sections</li>
			<li>About page paragraphs</li>
			<li>Blog preview cards</li>
			<li>Dashboard widgets</li>
			<li>Email newsletters</li>
		</ul>
		<p>Feels natural, reads fast, looks professional.</p>

		<h2>Long (120–180 words) — Use For:</h2>
		<ul>
			<li>Full article pages</li>
			<li>Case studies</li>
			<li>Whitepaper previews</li>
			<li>Print brochure mockups</li>
			<li>Legal or academic layouts</li>
		</ul>
		<p>Tests real reading rhythm and line length behavior.</p>

		<h2>Random (no limit) — Use When:</h2>
		<ul>
			<li>Testing responsive grid systems</li>
			<li>Simulating user-generated content</li>
			<li>Stress-testing typography scales</li>
			<li>Creating realistic content variations</li>
		</ul>

		<h2>Golden Rule</h2>
		<p>Never mix wildly different lengths in the same visual block. Consistency = professionalism.</p>

		<p class="italic-note">The best designers don’t fill space randomly — they fill it intentionally.</p>
	</article>

	<div class="text-center mt-5">
		<a href="{base}/blog" class="btn btn-outline-primary">← Back to Blog</a>
	</div>
</div>

<style>
	.max-w-800 { max-width: 800px; margin: 0 auto; }
	.breadcrumbs { font-size: 0.95rem; color: #666; }
	.breadcrumbs a { color: #0066cc; text-decoration: none; }
	.breadcrumbs a:hover { text-decoration: underline; }
	.breadcrumbs span { color: #999; margin: 0 0.5rem; }
	.prose { line-height: 1.8; }
	.post-meta { color: #888; font-size: 0.9rem; margin-bottom: 2rem; padding-bottom: 1rem; border-bottom: 1px solid #eee; }
	.prose h1 { font-size: 2.6rem; margin-bottom: 0.5rem; color: #1a1a1a; }
	.prose h2 { margin-top: 2.5rem; color: #0066cc; border-bottom: 2px solid #e6f3ff; padding-bottom: 0.5rem; }
	.italic-note { font-style: italic; color: #666; text-align: center; margin: 3rem 0; font-size: 1.1rem; }
</style>