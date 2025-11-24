export function readUrlParams(): { paragraphs: number; length: string; realFirst: boolean } {
  const params = new URLSearchParams(window.location.search);
  const p = parseInt(params.get('p') || '5', 10);
  const paragraphs = isNaN(p) || p < 1 || p > 50 ? 5 : p;
  const length = ['short', 'medium', 'long', 'random'].includes(params.get('len')!)
    ? params.get('len')!
    : 'medium';
  const realFirst = params.get('realFirst') !== 'false';

  return { paragraphs, length: length as 'short' | 'medium' | 'long' | 'random', realFirst };
}

export function writeUrlParams(paragraphs: number, length: string, realFirst: boolean): void {
  const params = new URLSearchParams();
  params.set('p', paragraphs.toString());
  params.set('len', length);
  params.set('realFirst', realFirst.toString());

  const newUrl = `${window.location.pathname}?${params.toString()}${window.location.hash}`;
  window.history.replaceState(null, '', newUrl);
}