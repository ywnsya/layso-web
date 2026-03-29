$(function () {
  const projects = [
    {
      name: "LayCore",
      desc: "面向中后台系统的模块化工程底座，提供权限、日志与配置中心能力。"
    },
    {
      name: "LayFlow",
      desc: "轻量流程编排引擎，支持业务规则可视化与可观测部署。"
    },
    {
      name: "LayInsight",
      desc: "行业数据分析套件，提供统一数据模型与实时看板能力。"
    }
  ];

  projects.forEach((project) => {
    $("#project-list").append(`
      <article class="card">
        <h3>${project.name}</h3>
        <p>${project.desc}</p>
      </article>
    `);
  });

  $("#year").text(new Date().getFullYear());

  $("a[href^='#']").on("click", function (event) {
    const target = $(this.getAttribute("href"));

    if (target.length) {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: target.offset().top - 65
        },
        350
      );
    }
  });
});
