document.addEventListener("DOMContentLoaded", () => {
    if (typeof DETAIL_DATA === "undefined") return;
    document.title = DETAIL_DATA.title + " | Gezi Rehberi";
    document.getElementById("page-title").textContent = DETAIL_DATA.title;
    document.getElementById("page-desc").textContent = DETAIL_DATA.description;
    document.getElementById("header-badge").textContent = DETAIL_DATA.badge;

    const grid = document.getElementById("items-grid");
    if(grid && DETAIL_DATA.items) {
        grid.innerHTML = DETAIL_DATA.items.map(item => `
            <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                    <span class="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md uppercase tracking-wider">${item.category}</span>
                    <h3 class="text-xl font-bold text-slate-900 mt-3 mb-2">${item.title}</h3>
                    <p class="text-slate-600 text-sm leading-relaxed">${item.desc}</p>
                </div>
                <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span><i class="fa-solid fa-location-dot text-amber-600 mr-1"></i> Keşfet</span>
                    <span class="font-semibold text-slate-800">Popüler Nokta</span>
                </div>
            </div>
        `).join("");
    }
});
