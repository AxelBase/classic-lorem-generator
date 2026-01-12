<script lang="ts">
  import '../app.css';
  import { base } from '$app/paths';
  import { fly } from 'svelte/transition';

  const currentYear = new Date().getFullYear();

  // Buy Me A Coffee + Crypto
  let isDropdownOpen = false;

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }

  function closeDropdown() {
    isDropdownOpen = false;
  }

  // Click outside helper
  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node)) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };
    document.addEventListener('click', handleClick, true);
    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
    };
  }
</script>

<header class="custom-navbar">
  <nav class="container" style="display: flex; justify-content: space-between; align-items: center;">
    <div style="display: flex; align-items: center; gap: 2rem;">
      <div style="display: flex; align-items: center; gap: 0.8rem;">
        <a href="{base}/" aria-label="Home">
          <img src="{base}/AxelLab-Logo.ico" alt="Logo" class="navbar-brand-logo" />
        </a>
        <a class="navbar-brand-text" href="{base}/" style="text-decoration: none;">AxelBase</a>
      </div>

      <!-- Buy me a coffee + Bitcoin dropdown -->
      <div class="bmac-nav-item position-relative" use:clickOutside on:click_outside={closeDropdown}>
        <button
          class="bmac-button d-flex align-items-center gap-2 text-white border-0 px-4 py-2 rounded-pill shadow-sm"
          on:click={toggleDropdown}
          aria-label="Support options"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.35,22.2L12,22A10,10,0,0,1,2,12V10A2,2,0,0,1,4,8H7.2A5.13,5.13,0,0,1,12,3A5.13,5.13,0,0,1,16.8,8H20A2,2,0,0,1,22,10V12A10,10,0,0,1,12.35,22.2M4,10V12A8,8,0,0,0,12,20A8,8,0,0,0,20,12V10H16.8A5.11,5.11,0,0,1,12.5,5.12A5.15,5.15,0,0,1,7.2,10H4Z"/>
          </svg>
          <span class="d-none d-sm-inline fw-semibold">Buy me a Coffee</span>
        </button>

        {#if isDropdownOpen}
          <div
            class="bmac-dropdown mt-2"
            transition:fly={{ y: -10, duration: 250 }}
          >
            <a
              href="https://buymeacoffee.com/axelbase"
              target="_blank"
              rel="noopener"
              on:click={closeDropdown}
            >
              <span class="amount">$3</span> One Coffee
            </a>

            <a
              href="https://buymeacoffee.com/axelbase"
              target="_blank"
              rel="noopener"
              on:click={closeDropdown}
            >
              <span class="amount">$5</span> Two Coffees
            </a>

            <a
              href="https://buymeacoffee.com/axelbase"
              target="_blank"
              rel="noopener"
              on:click={closeDropdown}
            >
              <span class="amount">$10</span> Three Coffees
            </a>

            <a
              href="https://buymeacoffee.com/axelbase"
              target="_blank"
              rel="noopener"
              on:click={closeDropdown}
              class="custom-amount"
            >
              Custom Amount
            </a>

            <a
              href="bitcoin:bc1q3p0e6vt492m4w4fpz5m2cl4zcfuqqkgaj6myc9?label=AxelBase&message=Buy%20me%20a%20coffee"
              target="_blank"
              rel="noopener"
              on:click={closeDropdown}
              class="custom-amount bitcoin-option"
            >
              Buy via Crypto (Bitcoin)
            </a>
          </div>
        {/if}
      </div>
    </div>

    <ul style="list-style: none; display: flex; align-items: center; gap: 2rem; margin: 0;">
      <li><a class="nav-link" href="{base}/">Home</a></li>
      <li><a class="nav-link" href="{base}/#about">About</a></li>
      <li><a class="nav-link" href="{base}/#how-to-use">How to use</a></li>
      <li><a class="nav-link" href="{base}/#faq">FAQ</a></li>
      <li><a class="nav-link" href="{base}/blog">Blog</a></li>
    </ul>
  </nav>
</header>

<slot />

<footer class="custom-footer">
  <div class="container" style="display: flex; justify-content: space-between; align-items: center;">
    <span style="color: #666; font-size: 0.9rem;">
      © AxelBase Crypto Price Target Calculator – {currentYear}
    </span>
    <div>
      <a href="{base}/privacy" class="footer-link">Privacy</a>
      <span style="color: #ccc;">|</span>
      <a href="{base}/terms" class="footer-link">Terms</a>
    </div>
  </div>
</footer>

<style>
  /* Keep most of app.css styles - we override/enhance only BMAC parts */

  .bmac-button {
    background: var(--primary);
    font-size: 0.95rem;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .bmac-button:hover {
    background: var(--primary-hover);
    transform: translateY(-3px);
    box-shadow: var(--shadow-hover);
  }

  .bmac-dropdown {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 240px;
    background: white;
    border-radius: 16px;
    box-shadow: 0 12px 32px rgba(193, 135, 107, 0.18);
    overflow: hidden;
    border: 1px solid rgba(193, 135, 107, 0.12);
    z-index: 1001;
    padding: 8px 0;
  }

  .bmac-dropdown a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 20px;
    color: #333;
    text-decoration: none;
    font-size: 0.97rem;
    transition: all 0.2s ease;
  }

  .bmac-dropdown a:hover {
    background: rgba(193, 135, 107, 0.08);
    color: var(--primary);
    padding-left: 28px;
  }

  .bmac-dropdown .amount {
    font-weight: 700;
    color: var(--primary);
    font-size: 1.1rem;
  }

  .bmac-dropdown .custom-amount {
    font-weight: 600;
    color: var(--primary);
    border-top: 1px solid rgba(193, 135, 107, 0.1);
    justify-content: center !important;
    margin-top: 4px;
    padding-top: 12px;
  }

  .bitcoin-option {
    color: #f7931a !important;
    font-weight: 600;
  }

  .bitcoin-option:hover {
    background: rgba(247, 147, 26, 0.08) !important;
    color: #e67e22 !important;
  }
</style>