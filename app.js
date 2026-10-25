document.addEventListener("DOMContentLoaded", () => {
    // Veriyi 'CONTENT_DATA' (content.js) üzerinden veya yedek olarak 'DETAIL_DATA' üzerinden alıyoruz
    const sourceData = (typeof CONTENT_DATA !== "undefined") ? CONTENT_DATA : ((typeof DETAIL_DATA !== "undefined") ? DETAIL_DATA : null);
    
    if (!sourceData) return;

    document.title = (sourceData.title || "Kategori Vitrini") + " | Gezi Rehberi";
    if(document.getElementById("page-title")) document.getElementById("page-title").textContent = sourceData.title || "";
    if(document.getElementById("page-desc")) document.getElementById("page-desc").textContent = sourceData.description || "";
    if(document.getElementById("header-badge")) document.getElementById("header-badge").textContent = sourceData.badge || "Kategori";

    // Kart verilerini Content dosyasındaki 'category' veya 'items' dizisinden çekiyoruz
    const cardItems = sourceData.category || sourceData.items || [];
    const grid = document.getElementById("items-grid");

    if (grid && cardItems.length > 0) {
        grid.innerHTML = cardItems.map(item => `
            <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                    <span class="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md uppercase tracking-wider">${item.category || sourceData.badge}</span>
                    <h3 class="text-xl font-bold text-slate-900 mt-3 mb-2">${item.title}</h3>
                    <p class="text-slate-600 text-sm leading-relaxed">${item.desc || item.description || ''}</p>
                </div>
                <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span><i class="fa-solid fa-location-dot text-amber-600 mr-1"></i> Keşfet</span>
                    <span class="font-semibold text-slate-800">Popüler Nokta</span>
                </div>
            </div>
        `).join("");
    }
});
