export async function copyToClipboard(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
    const toastEl = document.getElementById('copyToast');
    if (toastEl) {
      const toast = new bootstrap.Toast(toastEl, { delay: 2000 });
      toast.show();
    }
  } catch (err) {
    console.error('Failed to copy:', err);
  }
}