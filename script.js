const wallpapers = [
  {
    title: 'Cat 1',
    folder: 'Cats',
    path: 'Wallpaper Index/Cats/Cat-1.png',
    fileName: 'Cat-1.png'
  },
  {
    title: 'Cat 2',
    folder: 'Cats',
    path: 'Wallpaper Index/Cats/Cat-2.png',
    fileName: 'Cat-2.png'
  },
  {
    title: 'Minecraft',
    folder: 'Minecraft',
    path: 'Wallpaper Index/Minecraft/Minecraft-1.png',
    fileName: 'Minecraft-1.png'
  },
  {
    title: 'Visual Studio Logo',
    folder: 'Random',
    path: 'Wallpaper Index/Random/Visual Studio Logo.png',
    fileName: 'Visual Studio Logo.png'
  }
];

const wallpaperList = document.getElementById('wallpaper-list');

if (wallpaperList) {
  wallpapers.forEach((wallpaper) => {
    const card = document.createElement('article');
    card.className = 'wallpaper-card';

    const imageWrap = document.createElement('div');
    imageWrap.className = 'wallpaper-image-wrap';

    const image = document.createElement('img');
    image.className = 'wallpaper-image';
    image.src = wallpaper.path;
    image.alt = `${wallpaper.title} wallpaper`;
    image.loading = 'lazy';

    const details = document.createElement('div');
    details.className = 'wallpaper-details';

    const info = document.createElement('div');
    info.className = 'wallpaper-info';

    const resolution = document.createElement('p');
    resolution.className = 'wallpaper-resolution';
    resolution.textContent = 'Loading resolution...';

    const link = document.createElement('a');
    link.className = 'download-btn';
    link.href = wallpaper.path;
    link.download = wallpaper.fileName;
    link.textContent = 'Download';

    image.addEventListener('load', () => {
      resolution.textContent = `Resolution: ${image.naturalWidth} × ${image.naturalHeight}`;
    });

    image.addEventListener('error', () => {
      resolution.textContent = 'Resolution unavailable';
    });

    info.append(resolution);
    details.append(info, link);
    imageWrap.appendChild(image);
    card.append(imageWrap, details);
    wallpaperList.appendChild(card);
  });
}
