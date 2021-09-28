import { headerComp } from "./components/header/header";

import { titleComp } from "./components/title/title";

import { subtitleComp } from "./components/subtitle/subtitle";
import { loremComp } from "./components/subtitle/lorem";

import { formComp } from "./components/form/form";

import { footerComp } from "./components/footer/footer";

function main() {
  headerComp();

  titleComp();

  subtitleComp();
  loremComp();

  formComp();

  footerComp();
}

main();
