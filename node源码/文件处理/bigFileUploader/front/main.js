import axios from "axios";

const input = document.getElementById("fileInput");
const btn = document.getElementById("uploadBtn");

let file = null;
input.addEventListener("change", (e) => {
  file = input.files[0];
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (file) {
    const formData = new FormData();
    formData.append("file", file);

    axios({
      method: "POST",
      url: "http://localhost:3000/file",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => alert("上传成功: " + JSON.stringify(response.data)))

      .catch((error) => {
        alert("上传失败: " + error.message);
      });
  }
});
