<script lang="ts">
	import { base } from '$app/paths';

	const posts = [
		{
			href: '/blog/posts/post1',
			title: 'The History of Lorem Ipsum: From Cicero to Modern Design',
			description: 'Discover the 2,000-year journey of the world’s most famous placeholder text and why the classic version still reigns supreme.'
		},
		{
			href: '/blog/posts/post2',
			title: 'Why “Real” Lorem Ipsum Matters in Design Mockups',
			description: 'Learn why using authentic Latin paragraphs improves readability, rhythm, and realism in your layouts compared to fake generators.'
		},
		{
			href: '/blog/posts/post3',
			title: 'How to Generate Perfectly Balanced Paragraphs Every Time',
			description: 'Master the art of consistent paragraph length and flow using word-count control and the “real first paragraph” option.'
		},
		{
			href: '/blog/posts/post4',
			title: 'Sharing Lorem Ipsum: The Power of URL Parameters',
			description: 'Share exact text configurations instantly with colleagues using clean, reproducible share links — no more “send me that version again.”'
		},
		{
			href: '/blog/posts/post5',
			title: 'When to Use Short, Medium, Long — or Random Paragraphs',
			description: 'A practical guide to choosing the right paragraph length for landing pages, articles, dashboards, and print layouts.'
		},
		{
			href: '/blog/posts/post6',
			title: 'Building a Static, Offline-First Lorem Ipsum Generator',
			description: 'Behind the scenes: how this tool works 100% client-side, loads instantly, and functions offline after the first visit.'
		},
		{
			href: '/blog/posts/post7',
			title: 'Deploying Your Own Custom Lorem Generator on GitHub Pages',
			description: 'Step-by-step guide to fork, customize, and deploy your personal version of this tool — completely free and zero maintenance.'
		}
	];
</script>

<svelte:head>
	<title>Blog • AxelBase Classic Lorem Generator</title>
	<meta name="description" content="Deep dives, tips, and stories behind the most authentic Lorem Ipsum generator on the web." />
</svelte:head>

<div class="container py-5 blog-index">
	<header class="text-center mb-5">
		<h1 class="display-4 fw-bold">
			<i class="bi bi-journal-text"></i> Blog
		</h1>
		<p class="lead text-muted max-w-700 mx-auto">
			Insights, history, and pro tips about classic Lorem Ipsum, placeholder text, and the making of this generator.
		</p>
	</header>

	<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
		{#each posts as post}
			<div class="col">
				<a href="{base}{post.href}" class="text-decoration-none h-100">
					<div class="card h-100 shadow-sm hover-shadow transition-fast post-card">
						<div class="card-body d-flex flex-column">
							<h3 class="card-title h5 fw-bold text-primary">{post.title}</h3>
							<p class="card-text text-muted flex-grow-1 small">{post.description}</p>
							<div class="mt-auto pt-3">
								<span class="text-primary fw-semibold">
									Read more <i class="bi bi-arrow-right"></i>
								</span>
							</div>
						</div>
					</div>
				</a>
			</div>
		{/each}
	</div>
</div>

<style>
	.max-w-700 {
		max-width: 700px;
	}
	.post-card {
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}
	.post-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 10px 20px rgba(0,0,0,0.12) !important;
	}
	.hover-shadow {
		box-shadow: 0 4px 12px rgba(0,0,0,0.08);
	}
	.transition-fast {
		transition: all 0.25s ease;
	}
</style>