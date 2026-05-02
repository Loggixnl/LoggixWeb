export default defineNuxtPlugin(() => {
  // Tawk.to Live Chat Widget
  // Replace YOUR_PROPERTY_ID and YOUR_WIDGET_ID with your actual Tawk.to IDs
  if (process.client) {
    const s1 = document.createElement('script');
    s1.async = true;
    s1.src = 'https://embed.tawk.to/568507f61c9dbe63110dd837/default';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    document.head.appendChild(s1);
  }
});
