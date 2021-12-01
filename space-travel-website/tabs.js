const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');
tabList.addEventListener('keydown', changeTabFocus)

tabs.forEach((tab) => {
  tab.addEventListener('click', changeTabPanel);
})

let tabFocus = 0;
function changeTabFocus(e) {
  const keydownLeft = 37;
  const keydownRight = 39;
  if (e.keyCode == keydownLeft || keydownRight) {
    tabs[tabFocus].setAttribute('tabIndex', -1)
    tabs[tabFocus].setAttribute('aria-selected', false)
  }

  // if the right key is pushed, move to the next tab on the right
  if (e.keyCode == keydownLeft) {
    tabFocus--;
    if (tabFocus < 0) tabFocus = tabs.length - 1
  } else if (e.keyCode == keydownRight) {
    tabFocus++;
    if (tabFocus >= tabs.length) tabFocus = 0
  }

  tabs[tabFocus].setAttribute("tabindex", 0)
  tabs[tabFocus].setAttribute('aria-selected', true)
  tabs[tabFocus].focus();
}

function changeTabPanel(e) {
  const targetTab = e.target;
  const targetPanel = targetTab.getAttribute("aria-controls");
  const targetImage = targetTab.getAttribute("data-img");

  const tabContainer = targetTab.parentNode;
  const mainContainer = tabContainer.parentNode;

  // MySolution, not really effective
  // Array.from(tabContainer.children).forEach(tab => tab.setAttribute("aria-selected", false))
  tabContainer
    .querySelector('[aria-selected="true"]')
    .setAttribute("aria-selected", false)
  targetTab.setAttribute("aria-selected", true)

  hideContent(mainContainer, '[role="tabpanel"]');
  showContent(mainContainer, targetPanel)

  hideContent(mainContainer, 'picture');
  showContent(mainContainer, targetImage)
}

function hideContent(parent, content) {
  parent
    .querySelectorAll(content)
    .forEach(item => item.setAttribute("hidden", true))
}

function showContent(parent, content) {
  parent.querySelector([`#${content}`]).removeAttribute('hidden');
}
