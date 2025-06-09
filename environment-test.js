// Test navigation paths
console.log('Environment Detection:');
console.log('Hostname:', window.location.hostname);
console.log('Is GitHub Pages:', window.location.hostname.includes('github.io'));
console.log('Base Path:', pathManager.basePath);
console.log('Gallery Path:', getPath('pages/gallery.html'));
