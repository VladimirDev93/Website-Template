// Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
        .then(() => {
            console.info('Service Worker registered.');
        }).catch(err => {
            console.error(`Service Worker failed to register, ${err}`);
        });
}