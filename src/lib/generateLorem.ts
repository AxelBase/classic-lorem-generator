import paragraphs from './loremCorpus';

function trimToWordCount(text: string, min: number, max: number): string {
  const words = text.split(' ');
  if (words.length <= max) return text;
  return words.slice(0, max).join(' ') + (words.length > max ? ' …' : '');
}

export function generateLorem(
  count: number,
  lengthMode: 'short' | 'medium' | 'long' | 'random',
  realFirst: boolean
): string[] {
  const result: string[] = [];

  for (let i = 0; i < count; i++) {
    let para: string;

    if (i === 0 && realFirst) {
      para = paragraphs[0];
    } else {
      const randomIndex = Math.floor(Math.random() * paragraphs.length);
      para = paragraphs[randomIndex];
    }

    switch (lengthMode) {
      case 'short':
        para = trimToWordCount(para, 50, 80);
        break;
      case 'medium':
        para = trimToWordCount(para, 80, 120);
        break;
      case 'long':
        para = trimToWordCount(para, 120, 180);
        break;
      case 'random':
        // no trimming
        break;
    }

    result.push(para);
  }

  return result;
}