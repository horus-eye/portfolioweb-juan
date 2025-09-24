const skills = {
  frontend: [
    { name: "HTML", icon: "fab fa-html5 text-orange-500" },
    { name: "CSS", icon: "fab fa-css3-alt text-blue-500" },
    { name: "JavaScript", icon: "fab fa-js-square text-yellow-400" },
    { name: "React", icon: "fab fa-react text-cyan-400" },
    { name: "Sass", icon: "fab fa-sass text-pink-500" },
    { name: "Bootstrap", icon: "fab fa-bootstrap text-purple-600" },
    { name: "Tailwind CSS", icon: "img", img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
    { name: "jQuery", icon: "img", img: "https://cdn.worldvectorlogo.com/logos/jquery-1.svg" },
  ],
  backend: [
    { name: "PHP", icon: "fab fa-php text-indigo-400" },
    { name: "Python", icon: "fab fa-python text-blue-400" },
    { name: "Node.js", icon: "fab fa-node-js text-green-400" },
    { name: "Flask", icon: "img", img: "https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg" },
  ],
  tools: [
    { name: "MySQL", icon: "fas fa-database text-cyan-400" },
    { name: "XAMPP", icon: "fas fa-server text-yellow-500" },
    { name: "npm", icon: "fab fa-npm text-red-500" },
    { name: "Git", icon: "fab fa-git-alt text-orange-600" },
    { name: "GitHub", icon: "fab fa-github" },
    { name: "Vercel", icon: "img", img: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg" },
    { name: "Bash", icon: "fas fa-terminal" },
  ]
}

function SkillCard({ skill }) {
  return (
    <div className="skill-card rounded-lg p-4">
      {skill.icon === "img" ? (
        <img src={skill.img} alt={skill.name} className="mx-auto h-12 w-12 mb-2" />
      ) : (
        <i className={`${skill.icon} text-5xl mb-2`}></i>
      )}
      <p className="text-sm">{skill.name}</p>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <h2 className="text-4xl font-bold text-center mb-12 section-divider pb-4">Habilidades</h2>
      <div className="space-y-12">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category}>
            <h3 className="text-2xl font-semibold text-center mb-8 text-gray-300 capitalize">{category}</h3>
            <div className={`grid ${category === 'backend' ? 'grid-cols-2 sm:grid-cols-4 justify-center' : 'grid-cols-3 sm:grid-cols-4 md:grid-cols-8'} gap-6 text-center`}>
              {skillList.map((skill, i) => <SkillCard key={i} skill={skill} />)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
