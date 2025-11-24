<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Terms & Conditions | Classic Paragraph Lorem Generator – AxelBase</title>
	<meta name="description" content="Free to use, modify, and deploy. No warranty. Use classic Lorem Ipsum responsibly." />
	<meta property="og:title" content="Terms & Conditions | Classic Paragraph Lorem Generator" />
	<meta property="og:description" content="Open source, free forever, no attribution required." />
	<meta property="og:url" content="{base}/terms" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container py-5 max-w-800">
	<nav class="breadcrumbs mb-4">
		<a href="{base}/">Home</a> → <span>Terms & Conditions</span>
	</nav>

	<article class="prose">
		<h1>Terms & Conditions</h1>
		<p class="post-meta">Effective Date: November 24, 2025</p>

		<p>By using the <strong>Classic Paragraph Lorem Generator</strong> (“the Tool”), you agree to these Terms.</p>

		<h2>1. Free to Use</h2>
		<p>The Tool is <strong>free for personal and commercial use</strong>, forever. No registration, no payment, no limits.</p>

		<h2>2. Open Source & Fork-Friendly</h2>
		<p>The entire source code is publicly available under the <strong>MIT License</strong>. You may:</p>
		<ul>
			<li>Fork and modify it</li>
			<li>Remove or add features</li>
			<li>Deploy your own version</li>
			<li>Rebrand it completely</li>
		</ul>
		<p><strong>No attribution required</strong> (but always appreciated).</p>

		<h2>3. No Warranty</h2>
		<p>The Tool is provided <strong>“as is”</strong> without warranty of any kind. We do not guarantee:</p>
		<ul>
			<li>100% accuracy of generated text</li>
			<li>Availability or uptime</li>
			<li>Fitness for any particular purpose</li>
		</ul>

		<h2>4. Use Responsibly</h2>
		<p>The classic Lorem Ipsum text is derived from Cicero’s <em>De Finibus Bonorum et Malorum</em> and is in the public domain. However, do not:</p>
		<ul>
			<li>Use it to impersonate real content in production</li>
			<li>Represent it as original writing</li>
			<li>Use it in ways that violate applicable laws</li>
		</ul>

		<h2>5. Limitation of Liability</h2>
		<p>AxelBase and contributors shall not be liable for any damages arising from use of this Tool, including but not limited to lost profits, data loss, or interrupted work.</p>

		<h2>6. Changes to Terms</h2>
		<p>We may update these Terms at any time. Continued use constitutes acceptance.</p>

		<h2>7. Governing Law</h2>
		<p>These Terms are governed by the laws of open source goodwill and common sense.</p>

		<p class="italic-note">
			<em>Built with care. Shared with joy. Use freely and make beautiful things.</em>
		</p>
	</article>

	<div class="text-center mt-5">
		<a href="{base}/" class="btn btn-outline-primary">← Back to Generator</a>
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
	.italic-note { font-style: italic; color: #555; text-align: center; margin: 3rem 0; font-size: 1.15rem; background: #f0f8ff; padding: 1.5rem; border-radius: 12px; border-left: 4px solid #0066cc; }
</style>