import { fromEvent } from "rxjs";
import init from "./sw";

const bodyEvent = fromEvent(document, "DOMContentLoaded");
const bodyAddClass = (className: string) => {
  const body = document.body;
  body.classList.add(className);
};

bodyEvent.subscribe(() => bodyAddClass("render"));
init();
