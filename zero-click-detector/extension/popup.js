document.getElementById("checkBtn").addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const url = tab.url;

  // Send URL to your Flask backend
  fetch("http://127.0.0.1:5000/check_url", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ url: url })
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById("urlResult").textContent = "Status: " + data.status;
  })
  .catch(error => {
    document.getElementById("urlResult").textContent = "Error contacting server.";
    console.error(error);
  });
});
