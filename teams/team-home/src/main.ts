import "./style.css";
import { loadFragment } from "./fragment";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div id="main">메인입니당</div>
  <div
    id="team-job-recommendation"
    data-fragment="http://localhost:4000/fragments/recommendation"
  ></div>
`;

loadFragment(
  document.querySelector<HTMLDivElement>("#team-job-recommendation")!
);
