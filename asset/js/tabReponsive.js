$("#horizontalTab").easyResponsiveTabs({
  //Types: default, vertical, accordion
  type: "default",

  //auto or any width like 600px
  width: "auto",

  // 100% fit in a container
  fit: true,

  // Start closed if in accordion view
  closed: "accordion",

  // Callback function if tab is switched
  activate: function () {},
});
