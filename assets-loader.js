(() => {
  const styleParts = ['./src/styles-01.txt', './src/styles-02.txt'];
  const appParts = ['./src/app-01.txt', './src/app-02.txt', './src/app-03.txt', './src/app-04.txt'];

  async function readParts(paths) {
    const parts = await Promise.all(paths.map(async (path) => {
      const response = await fetch(path, { cache: 'no-cache' });
      if (!response.ok) throw new Error(`${path}: ${response.status}`);
      return response.text();
    }));
    return parts.join('');
  }

  (async () => {
    const css = await readParts(styleParts);
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    const app = await readParts(appParts);
    (0, eval)(app);
  })().catch((error) => {
    console.error('BLOCK FRONTIER load error', error);
    const panel = document.getElementById('errorOverlay');
    if (panel) panel.classList.add('show');
  });
})();
