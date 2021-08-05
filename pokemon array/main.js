const search = document.getElementById("search");
const matchList = document.getElementById("match-list");

//Search states.json and filter pokemon
const searchPoke = async (searchText) => {
  const res = await fetch("poke.json");
  const poke = await res.json();

  //Get matches to current text input
  let matches = poke.filter((poke) => {
    const regex = new RegExp(`^${searchText}`, "gi");
    return poke.name.match(regex) || poke.id.match(regex);
  });

  if (searchText.length === 0) {
    matches = [];
  }

  outputHtml(matches);
};

// Show results in HTML
const outputHtml = (matches) => {
  if (matches.length > 0) {
    const html = matches
      .map(
        (match) => `
    <div class="card card-body mb-1">
    <h4>${match.name} (${match.id}) <span class="text-primary">${match.subtypes}</span></4>
      <small>Energy Type: ${match.types}, Rarity: ${match.rarity}, Card Type: ${match.supertype}, Card Text: ${match.attacks.text}</small>
  </div>
`
      )
      .join("");

    matchList.innerHTML = html;
  }
};

search.addEventListener("input", () => searchPoke(search.value));
