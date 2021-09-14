export function useParseHTML() {
  const parseContent = (content) => {
    const div = document.createElement("div");
    div.innerHTML = content;
    console.log(div.innerHtml);
    return div.innerText;
  };

  return { parseContent };
}
