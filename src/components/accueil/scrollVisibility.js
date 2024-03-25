export const handleScroll = () => {
  const content = document.getElementById("content");
  const scrollPosition = window.scrollY;

  const seuil = 200;
  if (scrollPosition > seuil) {
    content.style.visibility = "visible";
  } else {
    content.style.visibility = "hidden";
  }
};
