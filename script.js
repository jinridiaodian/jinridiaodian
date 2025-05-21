// 获取 DOM 元素
const searchInput = document.getElementById("search");
const mapContainer = document.getElementById("map");

// 渲染钓点函数
function renderSpots(spots) {
  mapContainer.innerHTML = ""; // 清空页面
  spots.forEach(spot => {
    const box = document.createElement("div");
    box.className = "fishing-spot";

    box.innerHTML = `
      <h3>🐟 ${spot.name}</h3>
      <p>📍 ${spot.location}</p>
      <a href="${spot.link}" target="_blank">👉 进入 VR 全景</a>
    `;
    mapContainer.appendChild(box);
  });
}

// 初次加载全部钓点
renderSpots(fishingSpots);

// 搜索功能
searchInput.addEventListener("input", function () {
  const keyword = this.value.trim().toLowerCase();
  const filtered = fishingSpots.filter(spot =>
    spot.name.toLowerCase().includes(keyword) ||
    spot.location.toLowerCase().includes(keyword)
  );
  renderSpots(filtered);
});
