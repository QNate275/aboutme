console.log('^_^ Hello, welcome to my resume website!');

const CHECKS_SVG = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-checks" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
<path d="M7 12l5 5l10 -10"></path>
<path d="M2 12l5 5m5 -5l5 -5"></path>
</svg>`;

const ERROR_SVG = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-exclamation-circle" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
<path d="M12 9v4"></path>
<path d="M12 16v.01"></path>
</svg>`;

function copyIt(textToCopy, element) {
  const iconElement = element.parentElement.querySelector(".contact-icon");
  const originText = element.innerHTML;
  const originIconSvg = iconElement.innerHTML;
  element.style.width = `${element.offsetWidth}px`;

  function change(SVG, text) {
    iconElement.innerHTML = SVG;
    element.innerHTML = text;
    const timer = setTimeout(() => {
      clearTimeout(timer);
      iconElement.innerHTML = originIconSvg;
      element.innerHTML = originText;
    }, 1000);
  }
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      change(CHECKS_SVG, "已复制");
    })
    .catch((err) => {
      change(ERROR_SVG, "复制失败");
    });
}

const needCopyElements = document.querySelectorAll(".copy-js");
for (let element of needCopyElements) {
  element.addEventListener("click", () =>
    copyIt(element.innerHTML.trim(), element)
  );
}

// document.getElementById("download").addEventListener("click", () => {
//   html2canvas(document.body).then(canvas => {
//     document.body.appendChild(canvas)
//   });
// });


// document.getElementById("download").addEventListener("click", () => {
//   const { jsPDF } = window.jspdf;
//   const element = document.body;
//   const doc = new jsPDF();
//   doc.html(element, {
//     callback: function (pdf) {
//       pdf.save("导出的文件名.pdf");
//     },
//   });
// });
