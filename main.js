const TOTAL_FRAMES = 300;
const FOLDER_NAME = 'tech_vedas_frames_30fps (1)';

const canvas = document.getElementById('animation-canvas');
const ctx = canvas.getContext('2d');
const loaderBar = document.getElementById('loader-bar');

const frames = new Array(TOTAL_FRAMES);
let loadedCount = 0;
let currentFrameIndex = 0;
let targetFrameIndex = 0;

// Format frame filename
function getFramePath(index) {
  const paddedIndex = String(index).padStart(6, '0');
  return `./${encodeURIComponent(FOLDER_NAME)}/frame_${paddedIndex}.jpg`;
}

// Set canvas dimensions with Device Pixel Ratio (DPI) adjustment
function resizeCanvas() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const width = window.innerWidth;
  const height = window.innerHeight;

  canvas.width = width * dpr;
  canvas.height = height * dpr;

  ctx.scale(dpr, dpr);
}

// Calculate cover image dimensions & offsets for full viewport rendering
function getCoverDimensions(imgWidth, imgHeight, containerWidth, containerHeight) {
  const imgRatio = imgWidth / imgHeight;
  const containerRatio = containerWidth / containerHeight;
  
  let drawWidth, drawHeight, offsetX, offsetY;

  if (containerRatio > imgRatio) {
    drawWidth = containerWidth;
    drawHeight = containerWidth / imgRatio;
    offsetX = 0;
    offsetY = (containerHeight - drawHeight) / 2;
  } else {
    drawWidth = containerHeight * imgRatio;
    drawHeight = containerHeight;
    offsetX = (containerWidth - drawWidth) / 2;
    offsetY = 0;
  }

  return { drawWidth, drawHeight, offsetX, offsetY };
}

// Draw specified frame index to canvas
function drawFrame(index) {
  let img = frames[index];
  
  // Fallback to nearest loaded frame if target frame isn't loaded yet
  if (!img || !img.complete || img.naturalWidth === 0) {
    for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
      const prev = frames[index - offset];
      const next = frames[index + offset];
      if (prev && prev.complete && prev.naturalWidth > 0) {
        img = prev;
        break;
      }
      if (next && next.complete && next.naturalWidth > 0) {
        img = next;
        break;
      }
    }
  }

  if (!img || !img.complete || img.naturalWidth === 0) return;

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  ctx.clearRect(0, 0, viewportWidth, viewportHeight);
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';

  const { drawWidth, drawHeight, offsetX, offsetY } = getCoverDimensions(
    img.naturalWidth || 1280,
    img.naturalHeight || 720,
    viewportWidth,
    viewportHeight
  );

  ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
}

// Preload all frame images in background
function startPreloading() {
  for (let i = 1; i <= TOTAL_FRAMES; i++) {
    const img = new Image();
    const frameIdx = i - 1;

    img.onload = () => {
      loadedCount++;
      const percent = (loadedCount / TOTAL_FRAMES) * 100;
      if (loaderBar) {
        loaderBar.style.width = `${percent}%`;
        if (loadedCount === TOTAL_FRAMES) {
          setTimeout(() => {
            loaderBar.classList.add('hidden');
          }, 300);
        }
      }
    };

    img.onerror = () => {
      console.warn(`Failed to load frame ${i}`);
      loadedCount++;
    };

    img.src = getFramePath(i);
    frames[frameIdx] = img;
  }
}

// Update target frame index based on window scroll position
function updateTargetFrame() {
  const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  const docHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
  const scrollableHeight = docHeight - window.innerHeight;
  
  if (scrollableHeight <= 0) return;

  const scrollProgress = Math.min(1, Math.max(0, scrollTop / scrollableHeight));
  targetFrameIndex = scrollProgress * (TOTAL_FRAMES - 1);
}

// Animation loop with smooth linear interpolation (lerping)
function renderLoop() {
  updateTargetFrame();

  // Smooth interpolation factor (0.15 for smooth physics transition)
  currentFrameIndex += (targetFrameIndex - currentFrameIndex) * 0.15;

  const roundedIndex = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(currentFrameIndex)));

  drawFrame(roundedIndex);

  requestAnimationFrame(renderLoop);
}

// Initialize application
function init() {
  resizeCanvas();

  window.addEventListener('resize', resizeCanvas);
  window.addEventListener('scroll', updateTargetFrame, { passive: true });
  window.addEventListener('wheel', updateTargetFrame, { passive: true });
  window.addEventListener('touchmove', updateTargetFrame, { passive: true });

  startPreloading();

  // Start continuous render loop
  requestAnimationFrame(renderLoop);
}

// Run init when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
