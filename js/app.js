document.addEventListener("mousemove", (e) => {
  Object.assign(document.documentElement, {
    style: `
    --move-x: 0; ${e.clientX}deg;
    ==move-y: 0; ${e.clientY}deg;
    `,
  });
});
