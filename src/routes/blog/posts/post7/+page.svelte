<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Deploy Your Own Custom Lorem Generator on GitHub Pages | AxelBase Blog</title>
	<meta name="description" content="Fork, customize, and deploy your personal version in under 5 minutes — completely free." />
	<meta property="og:title" content="Deploy Your Own Custom Lorem Generator on GitHub Pages" />
	<meta property="og:description" content="Make it yours: change colors, add your logo, remove features — all with zero cost." />
	<meta property="og:url" content="{base}/blog/posts/post7" />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container py-5 max-w-800">
	<nav class="breadcrumbs mb-4">
		<a href="{base}/blog">Blog</a> → <span>Deploy Your Own Version</span>
	</nav>

	<article class="prose">
		<h1>Deploy Your Own Custom Lorem Generator on GitHub Pages</h1>
		<p class="post-meta">Published: December 2, 2025</p>

		<p>Want your team’s branding? Your favorite colors? Your company name in the title?</p>

		<p>You don’t need to ask permission. This tool is open source and designed to be forked.</p>

		<h2>Deploy in 4 Steps</h2>
		<ol>
			<li>Fork the repository on GitHub</li>
			<li>Edit <code>src/app.html</code> → change title and favicon</li>
			<li>Update colors in <code>app.css</code></li>
			<li>Enable GitHub Pages in repository settings</li>
		</ol>

		<p>Done. Your custom version is live at <code>yourusername.github.io/your-repo-name</code></p>

		<h2>Popular Customizations</h2>
		<ul>
			<li>Add your logo</li>
			<li>Change fonts (e.g., Inter, Georgia, system stack)</li>
			<li>Remove the Share button</li>
			<li>Default to 3 paragraphs of short text</li>
			<li>Add dark mode toggle</li>
		</ul>

		<h2>Zero Cost Forever</h2>
		<p>GitHub Pages = free hosting<br>
		No build minutes limit for public repos<br>
		Custom domain support included</p>

		<p>Hundreds of designers and agencies already run their own version.</p>

		<p class="italic-note">Make it yours. It’s not just allowed — it’s encouraged.</p>
	</article>

	<div class="text-center mt-5">
		<a href="{base}/blog" class="btn btn-outline-primary">← Back to Blog</a>
		<a href="https://github.com/yourusername/classic-lorem-generator" target="_blank" class="btn btn-success ms-3">
			Fork on GitHub
		</a>
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