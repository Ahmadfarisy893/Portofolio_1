(function () {
  var root = document.documentElement;
  var tombol = document.getElementById("tema");
 
  function simpan(nilai) {
    try { localStorage.setItem("tema", nilai); } catch (e) {}
  }
  function baca() {
    try { return localStorage.getItem("tema"); } catch (e) { return null; }
  }
  function sekarang() {
    return root.getAttribute("data-theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  }
  function perbarui() {
    var gelap = sekarang() === "dark";
    tombol.textContent = gelap ? "Light" : "Dark";
    tombol.setAttribute("aria-label", gelap ? "Ganti ke mode terang" : "Ganti ke mode gelap");
  }
 
  var tersimpan = baca();
  if (tersimpan === "dark" || tersimpan === "light") {
    root.setAttribute("data-theme", tersimpan);
  }
  perbarui();
 
  tombol.addEventListener("click", function () {
    var berikut = sekarang() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", berikut);
    simpan(berikut);
    perbarui();
  });
 
  document.getElementById("tahun").textContent = new Date().getFullYear();
})();