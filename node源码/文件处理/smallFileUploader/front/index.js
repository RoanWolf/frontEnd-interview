const input = document.getElementById("file");

input.addEventListener("change", () => {
  const file = input.files[0];
  const fr = new FileReader();

  // 转 Base64
  fr.readAsDataURL(file);

  fr.onload = () => {
    const base64Data = fr.result; // 形如 data:image/png;base64,xxxx

    // 这里发给后端
    fetch("http://localhost:3000/uploadBase64", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: file.name, // 文件名
        type: file.type, // MIME 类型
        data: base64Data, // Base64 内容
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
      })
      .catch((err) => {
        console.error("上传失败:", err);
      });
  };
});
