window.onload = function () {
  loadHTMLPart("../html/header.html", "header");
  loadHTMLPart("../html/home.html", "main");
  loadHTMLPart("../html/footer.html", "footer");
};

function loadHTMLPart(url, targetId) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((html) => {
      document.getElementById(targetId).innerHTML = html;
    })
    .catch((error) => {
      console.error("There was a problem loading the HTML:", error);
      // Thêm các xử lý khác ở đây nếu cần
    });
}
