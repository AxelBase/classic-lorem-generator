<script lang="ts">
    import {base} from '$app/paths';
    import { onMount } from 'svelte';
    import { generateLorem } from '$lib/generateLorem';
    import { readUrlParams, writeUrlParams } from '$lib/urlSync';
    import { copyToClipboard } from '$lib/clipboard';

    let paragraphs = 5;
    let length: 'short' | 'medium' | 'long' | 'random' = 'medium';
    let realFirst = true;
    let output: string[] = [];

    function generate() {
        output = generateLorem(paragraphs, length, realFirst);
        writeUrlParams(paragraphs, length, realFirst);
    }

    function share() {
        writeUrlParams(paragraphs, length, realFirst);
        copyToClipboard(window.location.href);
    }

    onMount(() => {
        const params = readUrlParams();
        paragraphs = params.paragraphs;
        length = params.length;
        realFirst = params.realFirst;
        generate();
    });
</script>

<main class="container py-5">
    <div class="text-center mb-5">
        <h1 style="font-size: 3rem; color: var(--primary);">AxelBase</h1>
        <p class="lead" style="color: #888;">Classic Paragraph Lorem Generator</p>
    </div>

    <div class="card p-4">
        <div class="card-body">
            <div class="row g-4 align-items-end">
                <div class="col-lg-4">
                    <label for="count" class="form-label">Number of paragraphs (1–50)</label>
                    <input
                        type="range"
                        class="form-range"
                        min="1"
                        max="50"
                        step="1"
                        bind:value={paragraphs}
                        on:input={generate}
                        id="count"
                        aria-valuenow={paragraphs}
                    />
                    <div class="text-center fw-bold fs-4 mt-2" style="color: var(--primary);">{paragraphs}</div>
                </div>

                <div class="col-lg-4">
                    <label for="length" class="form-label">Paragraph length</label>
                    <select class="form-select" bind:value={length} on:change={generate} id="length">
                        <option value="short">Short (~50–80 words)</option>
                        <option value="medium">Medium (~80–120 words)</option>
                        <option value="long">Long (~120–180 words)</option>
                        <option value="random">Random (no limit)</option>
                    </select>
                </div>

                <div class="col-lg-4">
                    <div class="form-check mb-2">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            bind:checked={realFirst}
                            on:change={generate}
                            id="realFirst"
                        />
                        <label class="form-check-label" for="realFirst">
                            Start with real first paragraph
                        </label>
                    </div>
                </div>
            </div>

            <div class="d-flex flex-wrap gap-3 mt-5 justify-content-center">
                <button class="btn btn-primary btn-lg" on:click={generate}>
                    <i class="bi bi-arrow-clockwise me-2"></i> Generate
                </button>
                <button class="btn btn-success btn-lg" on:click={() => copyToClipboard(output.join('\n\n'))}>
                    <i class="bi bi-clipboard me-2"></i> Copy to Clipboard
                </button>
                <button class="btn btn-outline-secondary btn-lg" on:click={share}>
                    <i class="bi bi-share me-2"></i> Share URL
                </button>
            </div>
        </div>
    </div>

    <div id="output">
        {#each output as para, i}
            <p>{para}</p>
        {/each}
    </div>

<section id="about" class="content-section mt-5">
	<h2 class="display-5 fw-bold text-center mb-4">About AxelBase Classic Lorem Generator</h2>
	<div class="row justify-content-center">
		<div class="col-lg-10">
			<p class="lead text-center mb-5">
				We believe placeholder text should be <strong>beautiful, authentic, and useful</strong> — not random gibberish.
			</p>

			<p>
				<strong>AxelBase Classic Paragraph Lorem Generator</strong> is not just another lorem ipsum tool. It is the only generator that uses <strong>100% authentic Latin text</strong> from Cicero’s <em>De Finibus Bonorum et Malorum</em> (45 BC) — the original source that has been trusted by printers, typographers, and designers for over 500 years.
			</p>

			<p>
				Unlike modern “hipster” generators that output fake words or trendy phrases, we preserve the natural rhythm, word distribution, and punctuation of real classical prose. This means your mockups don’t just look filled — they look <strong>professional from the first second</strong>.
			</p>

			<p>
				Every feature was built with one goal: <strong>help you create realistic, balanced, and visually accurate layouts faster</strong>. From the traditional “real first paragraph” option to precise word-count trimming (Short: 50–80, Medium: 80–120, Long: 120–180), everything is designed to simulate actual editorial content.
			</p>

			<p>
				We are proudly <strong>100% client-side, offline-first, and privacy-first</strong>. Nothing you generate ever leaves your browser. No tracking. No cookies. No analytics. After your first visit, the entire tool works offline — perfect for planes, trains, or remote cabins.
			</p>

			<p>
				Built with SvelteKit and deployed on GitHub Pages, this tool is also <strong>fully open source (MIT license)</strong>. You can fork it, rebrand it, remove features, or deploy your own version in minutes — completely free, forever.
			</p>

			<p>
				Whether you’re designing a landing page, prototyping an app, mocking up a magazine, or teaching typography, AxelBase gives you the most authentic placeholder experience available today.
			</p>

			<p class="text-center mt-5 fst-italic text-muted">
				Because great design deserves great placeholder text.
			</p>
		</div>
	</div>
</section>
<section id="how-to-use" class="content-section mt-5 bg-light rounded-4 p-5">
	<h2 class="display-5 fw-bold text-center mb-5">How to Use AxelBase</h2>

	<div class="row g-5">
		<div class="col-md-6">
			<h3 class="h4 fw-bold text-primary"><i class="bi bi-1-circle-fill me-2"></i> Choose Paragraph Count</h3>
			<p>Slide the range from 1 to 50 to set exactly how many paragraphs you need. The number updates live — perfect for testing different content densities.</p>

			<h3 class="h4 fw-bold text-primary mt-4"><i class="bi bi-2-circle-fill me-2"></i> Select Paragraph Length</h3>
			<p>
				<strong>Short (~50–80 words)</strong>: Ideal for cards, testimonials, hero sections<br>
				<strong>Medium (~80–120 words)</strong>: The universal default — works everywhere<br>
				<strong>Long (~120–180 words)</strong>: Perfect for articles, case studies, print layouts<br>
				<strong>Random</strong>: No trimming — great for testing responsive grids
			</p>
		</div>

		<div class="col-md-6">
			<h3 class="h4 fw-bold text-primary"><i class="bi bi-3-circle-fill me-2"></i> Keep the Classic First Paragraph</h3>
			<p>Leave “Start with real first paragraph” checked (default) to honor 500 years of tradition. Uncheck it if you want full randomization from the very first line.</p>

			<h3 class="h4 fw-bold text-primary mt-4"><i class="bi bi-4-circle-fill me-2"></i> Generate & Use</h3>
			<p>Click <strong>Generate</strong> (or move any control) to instantly create your text. Then:</p>
			<ul class="list-unstyled">
				<li><i class="bi bi-clipboard text-success me-2"></i> <strong>Copy to Clipboard</strong> — paste directly into Figma, Word, InDesign, etc.</li>
				<li><i class="bi bi-share text-info me-2"></i> <strong>Share URL</strong> — sends the exact configuration to teammates or clients</li>
			</ul>
		</div>
	</div>

	<div class="alert alert-info mt-5 text-center">
		<strong>Pro tip:</strong> Bookmark your favorite configurations or share them in Figma comments — the URL remembers everything.
	</div>
</section>
<section id="faq" class="content-section mt-5">
	<h2 class="display-5 fw-bold text-center mb-5">Frequently Asked Questions</h2>

	<div class="accordion accordion-flush" id="faqAccordion">
		<div class="accordion-item border rounded-3 mb-3 shadow-sm">
			<h2 class="accordion-header">
				<button class="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#q1">
					Is this really the original Lorem Ipsum text?
				</button>
			</h2>
			<div id="q1" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
				<div class="accordion-body">
					Yes — 100%. We use the authentic scrambled sections from Cicero’s <em>De Finibus Bonorum et Malorum</em> (45 BC), exactly as used by printers since the 1500s. No fake words, no modern filler.
				</div>
			</div>
		</div>

		<div class="accordion-item border rounded-3 mb-3 shadow-sm">
			<h2 class="accordion-header">
				<button class="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#q2">
					Why not just use Lipsum.com or other generators?
				</button>
			</h2>
			<div id="q2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
				<div class="accordion-body">
					Most generators either serve ads, track you, or output unnatural text. This tool is private, offline-capable, fully customizable, and focused solely on paragraph realism — not gimmicks.
				</div>
			</div>
		</div>

		<div class="accordion-item border rounded-3 mb-3 shadow-sm">
			<h2 class="accordion-header">
				<button class="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#q3">
					Can I use this commercially?
				</button>
			</h2>
			<div id="q3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
				<div class="accordion-body">
					Absolutely. Free for personal and commercial use, forever. No attribution required.
				</div>
			</div>
		</div>

		<div class="accordion-item border rounded-3 mb-3 shadow-sm">
			<h2 class="accordion-header">
				<button class="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#q4">
					Can I deploy my own version?
				</button>
			</h2>
			<div id="q4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
				<div class="accordion-body">
					Yes! The entire project is open source (MIT). Fork it, change colors, add your logo, remove features — deploy in under 5 minutes on GitHub Pages.
				</div>
			</div>
		</div>

		<div class="accordion-item border rounded-3 mb-3 shadow-sm">
			<h2 class="accordion-header">
				<button class="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#q5">
					Does it work offline?
				</button>
			</h2>
			<div id="q5" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
				<div class="accordion-body">
					After your first visit, yes — fully offline. The entire tool and all 60+ classic paragraphs are cached by your browser.
				</div>
			</div>
		</div>

		<div class="accordion-item border rounded-3 mb-3 shadow-sm">
			<h2 class="accordion-header">
				<button class="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#q6">
					Is my data private?
				</button>
			</h2>
			<div id="q6" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
				<div class="accordion-body">
					<strong>Completely.</strong> Nothing is sent to any server. No cookies. No analytics. Your generated text exists only in your browser and disappears when you close the tab.
				</div>
			</div>
		</div>
	</div>
</section>
    <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 1100; margin-bottom: 60px;">
        <div
            id="copyToast"
            class="toast align-items-center text-white border-0"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
        >
            <div class="d-flex">
                <div class="toast-body">
                    <i class="bi bi-check-circle me-2"></i>
                    Copied to clipboard!
                </div>
                <button
                    type="button"
                    class="btn-close btn-close-white me-2 m-auto"
                    data-bs-dismiss="toast"
                    aria-label="Close toast"
                ></button>
            </div>
        </div>
    </div>
</main>