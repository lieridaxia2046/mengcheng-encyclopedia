/**
 * Generate an inline SVG data-URI placeholder with Chinese text.
 * Replace these with real photos by swapping the `src` in data files.
 */
export function placeholder(label, { width = 800, height = 450, bg = '#e8e0d4', fg = '#8a7e6e', icon = '📷' } = {}) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="${width}" height="${height}" fill="${bg}"/>
  <text x="50%" y="45%" text-anchor="middle" font-size="48" fill="${fg}" font-family="sans-serif">${icon}</text>
  <text x="50%" y="60%" text-anchor="middle" font-size="20" fill="${fg}" font-family="sans-serif">${label}</text>
  <text x="50%" y="70%" text-anchor="middle" font-size="13" fill="${bg}" font-family="sans-serif" opacity="0.6">替换为实拍照片</text>
</svg>`
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

export const PLACEHOLDER_ICON = {
  pagoda: '🏛️',
  temple: '⛩️',
  ruins: '🏺',
  memorial: '🎖️',
  nature: '🌿',
  town: '🏘️',
  portrait: '👤',
  city: '🏙️',
  food: '🍽️',
  artifact: '🏺',
}
