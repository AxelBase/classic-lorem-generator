<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Privacy Policy | Classic Paragraph Lorem Generator – AxelBase</title>
	<meta name="description" content="We collect nothing. Your generated text never leaves your browser. 100% private, 100% client-side." />
	<meta property="og:title" content="Privacy Policy | Classic Paragraph Lorem Generator" />
	<meta property="og:description" content="Zero data collection. Zero tracking. Works offline after first visit." />
	<meta property="og:url" content="{base}/privacy" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container py-5 max-w-800">
	<nav class="breadcrumbs mb-4">
		<a href="{base}/">Home</a> → <span>Privacy Policy</span>
	</nav>

	<article class="prose">
		<h1>Privacy Policy</h1>
		<p class="post-meta">Effective Date: November 24, 2025 • Last Updated: November 24, 2025</p>

		<p>At <strong>Classic Paragraph Lorem Generator</strong> (the “Tool”), your privacy is not just respected — it is <strong>guaranteed by design</strong>.</p>

		<h2>1. We Collect Nothing</h2>
		<p>This tool runs <strong>100% in your browser</strong>. When you generate Lorem Ipsum text:</p>
		<ul>
			<li><strong>No text is ever sent</strong> to any server</li>
			<li><strong>No IP addresses are logged</strong></li>
			<li><strong>No cookies are set</strong></li>
			<li><strong>No analytics, tracking pixels, or fingerprinting</strong> are used</li>
		</ul>
		<p>Your generated paragraphs exist only in your browser’s memory and disappear when you close the tab.</p>

		<h2>2. How the Tool Works (Client-Side Only)</h2>
		<p>All logic — from paragraph selection to word trimming and URL parameter handling — happens locally using JavaScript. The classic Latin text is bundled directly into the site. Even the Bootstrap framework is loaded from a CDN but does not track you.</p>

		<h2>3. Offline-First = Maximum Privacy</h2>
		<p>After your first visit, the entire tool is cached by your browser. You can use it on a plane, train, or submarine with zero internet — and zero privacy risk.</p>

		<h2>4. Third-Party Services</h2>
		<p>We do not use:</p>
		<ul>
			<li>Google Analytics</li>
			<li>Meta Pixel</li>
			<li>Advertising networks</li>
			<li>Session recording tools</li>
		</ul>
		<p>The only external resources are Bootstrap 5 and Bootstrap Icons from jsDelivr — both privacy-respecting CDNs with no tracking.</p>

		<h2>5. Children’s Privacy</h2>
		<p>This tool is safe and appropriate for users of all ages. Since no data is collected, we fully comply with COPPA and similar regulations by default.</p>

		<h2>6. International Compliance</h2>
		<p>Because we collect no personal data, the Tool inherently complies with <strong>GDPR</strong>, <strong>CCPA</strong>, <strong>LGPD</strong>, and all other privacy laws — no action required.</p>

		<h2>7. Changes to This Policy</h2>
		<p>If we ever change our approach (highly unlikely), we will update this page and the effective date above.</p>

		<h2>8. Contact</h2>
		<p>This tool is proudly developed and maintained by <strong>AxelBase</strong>. Questions? Open an issue on our public GitHub repository.</p>

		<p class="italic-note">
			<em>We believe privacy isn’t a feature — it’s the foundation. That’s why this tool will <strong>never</strong> collect your data.</em>
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
	.italic-note { font-style: italic; color: #555; text-align: center; margin: 3rem 0; font-size: 1.15rem; background: #f8f9fa; padding: 1.5rem; border-radius: 12px; }
</style>