import createElement from "./createELement";

const winAddFile = document.querySelector(".drop-area");
const inputAddFile = document.querySelector(".add-file");
const contImages = document.querySelector(".contImg");

winAddFile.addEventListener("dragover", (event) => {
  event.preventDefault();

  winAddFile.classList.add("carryover");
});

winAddFile.addEventListener("drop", (event) => {
  event.preventDefault();

  winAddFile.classList.remove("carryover");

  const images = Array.from(event.currentTarget.files);

  images.forEach((item) => {
    let image = createElement(item);

    contImages.appendChild(image);

    let close = image.querySelector(".close");

    close.addEventListener("click", () => {
      contImages.removeChild(image);
    });
  });
});

winAddFile.addEventListener("click", () => {
  inputAddFile.addEventListener("click", () => {
    inputAddFile.addEventListener("change", (event) => {
      const images = Array.from(event.dataTransfer.files);

      images.forEach((item) => {
        let image = createElement(item);

        contImages.appendChild(image);

        let close = image.querySelector(".close");

        close.addEventListener("click", () => {
          contImages.removeChild(image);
        });
      });
    });
  });

  inputAddFile.dispatchEvent(new MouseEvent("click"));
});
