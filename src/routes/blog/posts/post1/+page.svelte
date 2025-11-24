<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>The History of Lorem Ipsum: From Cicero to Modern Design | AxelBase Blog</title>
	<meta name="description" content="Explore the 2,000-year history of Lorem Ipsum — from ancient Rome to modern web design — and why the classic version remains the gold standard." />
	<meta property="og:title" content="The History of Lorem Ipsum: From Cicero to Modern Design" />
	<meta property="og:description" content="Discover why authentic Latin placeholder text from 45 BC still outperforms modern alternatives in design mockups." />
	<meta property="og:url" content="{base}/blog/posts/post1" />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="The History of Lorem Ipsum: From Cicero to Modern Design" />
	<meta name="twitter:description" content="Why real Latin from 45 BC beats fake generators every time." />
</svelte:head>

<div class="container py-5 max-w-800">
	<nav class="breadcrumbs mb-4">
		<a href="{base}/blog">Blog</a> <span>/</span> <span>The History of Lorem Ipsum</span>
	</nav>

	<article class="prose">
		<h1>The History of Lorem Ipsum: From Cicero to Modern Design</h1>
		<p class="post-meta">Published: November 20, 2025</p>

		<p>Every designer has seen it: <em>“Lorem ipsum dolor sit amet…”</em> But few know it’s not random gibberish — it’s real Latin from 45 BC.</p>

		<p>The text comes from <strong>Marcus Tullius Cicero</strong>’s philosophical treatise <em>De Finibus Bonorum et Malorum</em> (“On the Ends of Good and Evil”), written in 45 BC. In the 1500s, an unknown printer scrambled sections of this work to create a type specimen book. The result? A scrambled but natural-looking Latin text that has been used for over 500 years.</p>

		<h2>Why the Classic Version Still Wins</h2>
		<p>Modern “lorem ipsum” generators often create fake words or repetitive patterns. But the original text has something they don’t: <strong>authentic word length distribution, sentence rhythm, and punctuation flow</strong> — exactly like real prose.</p>

		<p>This is why professional designers and typographers prefer the classic version. It doesn’t distract with readable English, yet it feels natural. Letters like “h”, “t”, and “e” appear in realistic proportions. Ascenders and descenders balance perfectly. Your layout looks real from the very first mockup.</p>

		<h2>The First Paragraph Tradition</h2>
		<p>You’ve probably noticed: nearly every classic generator starts with the same famous paragraph. That’s not an accident — it’s tradition. This tool honors that by offering the “Start with real first paragraph” option (enabled by default).</p>

		<p>When you need true visual accuracy, there’s no substitute for the original.</p>

		<h2>Fun Fact</h2>
		<p>The phrase “Lorem Ipsum” itself doesn’t appear in Cicero’s work — it’s a corruption of “dolorem ipsum” (“pain itself”) caused by the printer cutting off the beginning and end of lines.</p>

		<p class="italic-note">Next time you use placeholder text, remember: you’re not just filling space — you’re using a 2,000-year-old piece of design history.</p>
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