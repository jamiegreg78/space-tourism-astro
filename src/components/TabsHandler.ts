let activeTab: string | null =
	(document.querySelector(".tab[data-tab-active='true']") as HTMLElement)?.dataset.tab || null;

function showContent() {
	if (activeTab !== null) {
		const tabs = document.querySelectorAll("[data-tab-content]");

		for (let i = 0; i < tabs.length; i++) {
			const tab = tabs[i] as HTMLElement;
			if (tab.dataset.tabContent === activeTab) {
				tab.setAttribute("data-tab-content-active", "true");
			} else {
				tab.removeAttribute("data-tab-content-active");
			}
		}
	}
}

function selectTab(tab: HTMLElement) {
	if (tab.dataset.tab !== undefined) {
		activeTab = tab.dataset.tab;
		showContent();

		const tabs = document.querySelectorAll("[data-tab]");

		for (let i = 0; i < tabs.length; i++) {
			const tab = tabs[i] as HTMLElement;
			if (tab.dataset.tab === activeTab) {
				tab.setAttribute("data-tab-active", "true");
			} else {
				tab.removeAttribute("data-tab-active");
			}
		}
	}
}

function addEventListeners() {
	const tabs = document.querySelectorAll("[data-tab]");

	for (let i = 0; i < tabs.length; i++) {
		const tab = tabs[i] as HTMLElement;
		tab.addEventListener("click", () => selectTab(tab));
	}
}
addEventListeners();
showContent();
