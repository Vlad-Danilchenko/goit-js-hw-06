// console.log(titleRef);

const listItem = document.querySelectorAll(".item");
console.log(`Number of categories: ${listItem.length}`);
listItem.forEach((item) => {
  const titleRef = item.querySelector("h2");
  console.log(`Category: ${titleRef.textContent}`);
  const elements = item.querySelectorAll("li").length;
  console.log(`Elements: ${elements}`);
});
