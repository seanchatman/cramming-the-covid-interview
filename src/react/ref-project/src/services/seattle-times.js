const RSS_URL = `https://codepen.io/picks/feed/`;

export function getRSS() {
  console.log(`getRSS`);
  return fetch(RSS_URL, {
    mode: "no-cors",
  })
    .then((response) => response.text())
    .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
    .then((data) => console.log(data));
}
