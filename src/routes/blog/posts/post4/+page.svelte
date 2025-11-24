<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Sharing Lorem Ipsum: The Power of URL Parameters | AxelBase Blog</title>
	<meta name="description" content="Share exact text configurations instantly with clients and teammates using clean, reproducible share links." />
	<meta property="og:title" content="Sharing Lorem Ipsum: The Power of URL Parameters" />
	<meta property="og:description" content="No more “can you send me that version again?” — share perfect placeholder text with one click." />
	<meta property="og:url" content="{base}/blog/posts/post4" />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container py-5 max-w-800">
	<nav class="breadcrumbs mb-4">
		<a href="{base}/blog">Blog</a> → <span>Sharing with URL Parameters</span>
	</nav>

	<article class="prose">
		<h1>Sharing Lorem Ipsum: The Power of URL Parameters</h1>
		<p class="post-meta">Published: November 26, 2025</p>

		<p>You finally nailed the perfect mockup text: 8 medium paragraphs, real first paragraph enabled, long length. Your client loves it.</p>

		<p>Then someone asks: “Can you send me that exact version?”</p>

		<p>Before this tool: you’d screenshot, export, or try to remember the settings.</p>
		<p>Now? Just click **Share URL**.</p>

		<h2>How It Works</h2>
		<p>Every setting is encoded directly into the URL using clean query parameters:</p>
		<ul>
			<li><code>?p=8</code> → 8 paragraphs</li>
			<li><code>&len=medium</code> → medium length</li>
			<li><code>&realFirst=true</code> → classic first paragraph</li>
		</ul>

		<p>When anyone opens that link, they see <strong>exactly</strong> what you saw — same count, same length, same text. No explanation needed.</p>

		<h2>Real-World Use Cases</h2>
		<ul>
			<li>Send mockup-ready text to developers</li>
			<li>Share approved placeholder blocks with copywriters</li>
			<li>Link directly from Figma comments</li>
			<li>Bookmark your favorite configurations</li>
			<li>Teach students consistent placeholder standards</li>
		</ul>

		<p>Because it’s 100% static and client-side, the shared link works instantly — no login, no tracking, no delay.</p>

		<h2>Pro Tip</h2>
		<p>Combine with browser bookmarks: save your most-used configurations (e.g., “Blog Post Mockup”, “Landing Page Hero”, “Email Template”) and access them with one click.</p>

		<p class="italic-note">Great teams don’t guess at placeholder text — they share it perfectly, every time.</p>
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