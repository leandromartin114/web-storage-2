import { initHeader } from "./components/header";
import { initFooter } from "./components/footer";
import { initText } from "./components/text";
import { initForm } from "./components/form";
import { initHomePage } from "./pages/home";
function main() {
	initHeader();
	initFooter();
	initText();
	initForm();
	const container = document.querySelector(".root");
	initHomePage(container);
}
main();
