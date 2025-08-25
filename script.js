function aplicarFormato(markdown) {
  try {
    let html = markdown.replace(/^# (.*$)/gim, "<h1>$1</h1>");
    html = html.replace(/^## (.*$)/gim, "<h2>$1</h2>");
    html = html.replace(/^### (.*$)/gim, "<h3>$1</h3>");

    html = html.replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>");

    html = html.replace(/\*(.*?)\*/gim, "<em>$1</em>");

    html = html.replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2' target='_blank'>$1</a>");

    return html.trim();
  } catch (error) {
    return `<p style="color:red;">Error al procesar Markdown: ${error.message}</p>`;
  }
}

const textarea = document.getElementById("markdown");
const preview = document.getElementById("preview");

textarea.addEventListener("input", () => {
  const texto = textarea.value;
  const html = aplicarFormato(texto);
  preview.innerHTML = html;
});
