import { setupRecommendations } from "./recommendations";

document.querySelector<HTMLDivElement>(
  "#job-fragment-recommendation"
)!.innerHTML = `
<h2>추천 채용공고</h2>
<div class="recommendations"></div>
`;

setupRecommendations(
  document.querySelector<HTMLDivElement>(".recommendations")!
);
