interface Recommendation {
  name: string;
  url: string;
}

export async function setupRecommendations(root: HTMLDivElement) {
  const recommendations: Recommendation[] = await window
    .fetch("http://localhost:4000/api/recommendations.json")
    .then((res) => res.json());

  root.innerHTML = recommendations
    .map(
      ({ name, url }) =>
        `<div><a href="${url}" target="_blank">${name}</a></div>`
    )
    .join("");
}
