/* ✎ EDIT ME — fill these in when you're ready. Save photos inside the "photos" folder. */
window.CONFIG = {
  // Main baby picture on the first page (put the file in /photos).
  // Photos are never cropped — the frame always fits the picture.
  mainPhoto: "photos/baby-main.jpg",

  // Gallery pictures (up to 6 look best). Missing files show a cute placeholder.
  gallery: ["photos/gallery1.jpg","photos/gallery2.jpg","photos/gallery3.jpg","photos/gallery4.jpg","photos/gallery5.jpg","photos/gallery6.jpg"],

  // Godparents — names only (no photos). role: "Ninong" or "Ninang". They appear in two columns
  // (Ninong / Ninang) as little pastel name chips, and the list scrolls if it is long.
  // Leave the list empty [] to show "coming soon" placeholders.
  // Example: godparents: [{role:"Ninong", name:"Juan Dela Cruz"}, {role:"Ninang", name:"Maria Santos"}]
  godparents: [],

  // Google Maps link — searches the exact chapel address.
  // For a precise pin, open the chapel in Google Maps > Share > Copy link, and paste it here instead.
  mapLink: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Sto. Niño Chapel, Prk 1A, Pasian, Monkayo, Davao de Oro, Philippines")
};
