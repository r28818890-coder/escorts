/**
 * ============================================================
 * ESCORTS HUB JAIPUR — MILITARY-GRADE CLIENT SECURITY & ANTI-TAMPER SHIELD
 * ============================================================
 */

export const initSecurityShield = () => {
  if (typeof window === 'undefined') return;

  // 1. Disable Right Click (Context Menu) globally
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
  }, { capture: true, passive: false });

  // 2. Disable Key Combinations for DevTools, View Source, Save Page
  document.addEventListener('keydown', (e) => {
    // F12
    if (e.key === 'F12' || e.keyCode === 123) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    const isCtrl = e.ctrlKey || e.metaKey;

    // Ctrl+Shift+I (Inspect), Ctrl+Shift+J (Console), Ctrl+Shift+C (Element Inspector)
    if (isCtrl && e.shiftKey && ['I', 'i', 'J', 'j', 'C', 'c', 'K', 'k'].includes(e.key)) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Ctrl+U (View Page Source)
    if (isCtrl && (e.key === 'u' || e.key === 'U')) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Ctrl+S (Save Page)
    if (isCtrl && (e.key === 's' || e.key === 'S')) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  }, { capture: true, passive: false });

  // 3. Disable Image Dragging and Long-Press on Mobile
  document.addEventListener('dragstart', (e) => {
    if (e.target instanceof HTMLImageElement || (e.target as HTMLElement)?.tagName === 'IMG') {
      e.preventDefault();
      return false;
    }
  }, { capture: true, passive: false });

  // 4. Console Watermark & Anti-Tamper
  try {
    const banner = '%c🔒 Protected by Escorts Hub Jaipur Enterprise Security Shield';
    console.log(banner, 'color: #e11d48; font-size: 13px; font-weight: bold; background: #0f172a; padding: 4px 8px; border-radius: 4px;');
  } catch {}
};

export default initSecurityShield;
