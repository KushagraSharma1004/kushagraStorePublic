if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/kushagraStorePublic/sw.js', { scope: '/kushagraStorePublic/' })})}