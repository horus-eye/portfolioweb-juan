
const projects = [
  {
    title: "Gestión de Gastos",
    description: "Una aplicación para realizar un seguimiento de los gastos e ingresos personales.",
    technologies: "HTML. CSS, JavaScript, JQuery, PHP, MySQL, BOOTSTRAP.",
    img: "assets/img/gastos.png",
    link: "https://thebestpractices.wuaze.com/",
    github: ""
  },
  {
    title: "Dashban-task",
    description: "Una sencilla de tareas en tipo tablero kanban que puede tener estado to-do , in progress y done",
    technologies: "React + vite, React-Boostrap, Css, NodeJs , Expressjs, Postgresql.",
    img: "assets/img/to_do_app.png",
    link: "https://horus-eye.github.io/dashban-tasks/",
    github: "https://github.com/horus-eye/dashban-tasks"
  },
  {
    title: "Trivia Game",
    description: "Un divertido e interactivo juego de trivia para poner a prueba tus conocimientos.",
    technologies: "HTML. CSS, JavaScript Y BOOTSTRAP.",
    img: "assets/img/trivia.png",
    link: "https://horus-eye.github.io/trivia-game-app",
    github: "https://github.com/horus-eye/trivia-game-app"
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-16">
      <h2 className="text-4xl font-bold text-center mb-12 section-divider pb-4">Mis Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <div key={i} className="project-card rounded-xl p-6 shadow-lg text-center">
            <img src={project.img} className="w-full h-48 object-cover mb-4" alt={project.title} />
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-6">{project.description}</p>
            <p className="font-bold text-sm mb-4">Tecnologias: {project.technologies}</p>
            <div className="flex justify-center space-x-4">
              <a href={project.link} target="_blank" className="btn-primary">Demo</a>
              {project.github && <a href={project.github} target="_blank" className="btn-primary">GitHub</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
