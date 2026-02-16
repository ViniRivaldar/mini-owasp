document.getElementById("startBtn").addEventListener("click", async () => {
  // Pega a aba ativa
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // Envia mensagem para content script
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      // Reload da página
      window.location.reload();
      console.log("[Mini OWASP] Reload iniciado");
    }
  });
});