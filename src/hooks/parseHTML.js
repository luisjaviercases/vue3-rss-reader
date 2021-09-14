export function useParseHTML() {
  const parseContent = (content) => {
    const div = document.createElement("div");
    div.innerHTML = content;
    return div.innerText;
  };

  return { parseContent };
}
