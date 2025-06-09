// Path configuration for localhost vs GitHub Pages
class PathManager {
  constructor() {
    this.isGitHubPages = window.location.hostname.includes('github.io');
    this.isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    this.basePath = this.getBasePath();
  }

  getBasePath() {
    if (this.isGitHubPages) {
      // For GitHub Pages: https://username.github.io/rhm_events/
      return '/rhm_events';
    } else if (this.isLocalhost) {
      // For localhost: http://localhost:8000/
      return '';
    }
    return '';
  }

  getPath(relativePath) {
    // Remove leading slash if present
    const cleanPath = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath;
    return `${this.basePath}/${cleanPath}`;
  }
}

// Initialize path manager
const pathManager = new PathManager();

// Helper function for easy access
function getPath(path) {
  return pathManager.getPath(path);
}
