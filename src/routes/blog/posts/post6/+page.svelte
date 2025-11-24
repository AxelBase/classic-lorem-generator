<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Building a Static, Offline-First Lorem Ipsum Generator | AxelBase Blog</title>
	<meta name="description" content="How this tool works 100% in your browser — no server, no tracking, fully offline after first visit." />
	<meta property="og:title" content="Building a Static, Offline-First Lorem Ipsum Generator" />
	<meta property="og:description" content="Zero backend. Zero analytics. Works on planes, trains, and remote cabins." />
	<meta property="og:url" content="{base}/blog/posts/post6" />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container py-5 max-w-800">
	<nav class="breadcrumbs mb-4">
		<a href="{base}/blog">Blog</a> → <span>Offline-First Design</span>
	</nav>

	<article class="prose">
		<h1>Building a Static, Offline-First Lorem Ipsum Generator</h1>
		<p class="post-meta">Published: November 30, 2025</p>

		<p>Most online generators require an internet connection. This one doesn’t.</p>

		<p>After your first visit, the entire tool — all 60+ classic paragraphs, generation logic, and UI — is cached by your browser. Open it on a plane, in a tunnel, or at a remote cabin: it just works.</p>

		<h2>How It’s Possible</h2>
		<ul>
			<li>Built with SvelteKit + adapter-static → 100% static HTML/CSS/JS</li>
			<li>Deployed on GitHub Pages → no server, no database</li>
			<li>All text stored directly in the bundle → zero API calls</li>
			<li>Bootstrap 5 loaded from CDN (cached forever)</li>
		</ul>

		<h2>Privacy by Design</h2>
		<p>No cookies. No analytics. No tracking pixels. Nothing ever leaves your device.</p>

		<h2>Performance</h2>
		<ul>
			<li>First load: ~150 KB (gzipped)</li>
			<li>Subsequent loads: instant (cached)</li>
			<li>50 long paragraphs generated in &lt; 50 ms on mobile</li>
		</ul>

		<p>This isn’t just a tool — it’s a statement: powerful web apps don’t need servers.</p>

		<p class="italic-note">The future of tools is static, private, and lightning-fast — and it’s here today.</p>
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