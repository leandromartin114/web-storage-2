import { initHeader } from "./components/header";
import { initFooter } from "./components/footer";
import { initTitle } from "./components/title";
import { initForm } from "./components/form";
import { initHomePage } from "./pages/home";
function main() {
	initHeader();
	initFooter();
	initTitle();
	initForm();
	const container = document.querySelector(".root");
	initHomePage(container);
}
main();
