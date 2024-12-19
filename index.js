async function sayHello() {
  let [tab] = await chrome.tabs.query({ active: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      alert("I am HealU");
    },
  });
}

document.getElementById("clickMe").addEventListener("click", sayHello);
