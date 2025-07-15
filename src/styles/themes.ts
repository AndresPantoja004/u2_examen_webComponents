export const themes: Record<string, { border: string; header: string; background: string }> = {
  azul: {
    border: '#003C71',
    header: '#005BA1',
    background: '#E6F0FA',
  },
  verde: {
    border: '#006B53',
    header: '#009E76',
    background: '#E5F8F0',
  },
  rojo: {
    border: '#E63329',
    header: '#FF4C4C',
    background: '#FFE8E5',
  },
  gris: {
    border: '#8C8C8C',
    header: '#AAAAAA',
    background: '#F0F0F0',
  },
  naranja: {
    border: '#F9BE01',
    header: '#FF9900',
    background: '#FFF3E5',
  },
};

export function getThemeByCedulaLastDigit(digit: number) {
  if ([0, 1].includes(digit)) return themes.azul;
  if ([2, 3].includes(digit)) return themes.verde;
  if ([4, 5].includes(digit)) return themes.rojo;
  if ([6, 7].includes(digit)) return themes.gris;
  return themes.naranja;
}
