function copyButton(className, label, getText) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = className;
  button.textContent = label;
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(getText());
      button.textContent = "Copied!";
    } catch {
      button.textContent = "Select and copy";
    }
    setTimeout(() => (button.textContent = label), 2000);
  });
  return button;
}

// Add a Copy button to every prompt and command.
document.querySelectorAll("pre.prompt, pre.command").forEach((pre) => {
  const button = copyButton("copy", "Copy", () => pre.textContent.trim());
  const wrapper = document.createElement("div");
  wrapper.className = "copyable";
  pre.replaceWith(wrapper);
  wrapper.append(pre, button);
});
