import { initHeader } from "./components/header";
import { initFooter } from "./components/footer";
import { initText } from "./components/text";
import { initForm } from "./components/form";
import { initHomePage } from "./pages/home";
import { initItem } from "./components/item";
import { state } from "./state";
function main() {
	initHeader();
	initFooter();
	initText();
	initForm();
	initItem();
	const container = document.querySelector(".root");
	initHomePage(container);
	state.initState();
}
main();
