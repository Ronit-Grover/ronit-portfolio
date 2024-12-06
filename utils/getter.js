const commands = [
  {
    command: "about",
    description: "About Me",
  },
  {
    command: "education",
    description: "My Education",
  },
  {
    command: "skills",
    description: "My tech skills",
  },
  {
    command: "projects",
    description: "My Projects",
  },
  {
    command: "contact",
    description: "Contact Me",
  },
  {
    command: "resume",
    description: "View my resume",
  },
  {
    command: "clear",
    description: "Clear the terminal screen",
  },
]

export const getProjects = async () => {
  const res = await fetch("/api/projects")

  if (res.ok) {
    const data = await res.json()
    const projectHTML =
      `<h3 class="text-purple">My Projects</h3>` +
      data
        .map((project) => {
          let projectDetails = `<div class="mb-4">`

          // Project Title
          projectDetails += `<div class="project__name">${project.name}</div>`

          // Project Description
          projectDetails += `<div class="text-gray-600">${project.description}</div>`

          // GitHub and Website Links
          if (project.url || project.github) {
            projectDetails += `<div class="mt-2">`

            if (project.url) {
              projectDetails += `<a class="external-link" href="${project.url}" target="_blank">Website</a> | `
            }

            if (project.github) {
              projectDetails += `<a  class="external-link" href="${project.github}" target="_blank">GitHub</a>`
            }

            projectDetails += `</div>`
          }

          projectDetails += `</div>`
          return projectDetails
        })
        .join("")

    return projectHTML
  } else {
    const ErrorHTML = `<div class="error">Error fetching projects from API</div>`
    return ErrorHTML
  }
}

export const getContacts = async () => {
  const res = await fetch("/api/contacts")

  if (res.ok) {
    const data = await res.json()
    return data
      .map(
        (contact) => `<div class="contact">
          <p class="contact-platform">${contact.platform}</p>
          <a class="external-link" href="${contact.url}" target="_blank">
          <b>${contact.username}</b></a>
          </div>`
      )
      .join("")
  } else {
    throw new Error(`Error fetching contacts: ${res.status} ${res.statusText}`)
  }
}

export const getAbout = () => {
  return `Greetings! I'm Ronit Grover, a ${getAge(
    "2001/12/11"
  )} year old software developer hailing from India.
  <br />
 With a strong foundation in Computer Science Engineering from Manipal University Jaipur (GPA: 8.24/10), I am currently working full-time as an Assistant Systems Engineer at Tata Consultancy Services. My role involves leveraging technologies like Java, Spring Boot, and JavaScript to develop and execute impactful software projects.
<br />
In addition to my professional role, I have gained diverse experience through internships at Bharti Airtel, Thales, and Juggernot AI, contributing to automation, digitization, and cybersecurity initiatives. As a certified ethical hacker, I am deeply passionate about cybersecurity and continually strive to expand my knowledge and expertise.
  <br />
  Feel welcome to contact me if you're interested in creating connections or exploring collaboration opportunities. Let's explore possibilities together!`
}

export const getSkills = () => {
  return `I have experience working with the following technologies:
  <br />
  <b class="skill-group">Programming Languages:</b>Python, Java, C++, Shell
  <br />
  <b class="skill-group">Web Programming:</b>HTML, CSS, JavaScript, ReactJS, AngularJS
  <br />
  <b class="skill-group">Tools:</b>SpringBoot, Kali, Docker, Kubernetes, Jenkins, Git, Figma
  <br />
  <b class="skill-group">Cloud/Database:</b> Oracle, GCP, MySQL, JDBC
  <br />
  <b class="skill-group">Operating Systems:</b> Windows, Linux, MacOS`
}

export const getEducation = () => {
  return `I graduated from <a href="https://jaipur.manipal.edu/" class="external-link" target="_blank">Manipal University Jaipur (MUJ)</a> with a CGPA of 8.24 in Computer Science. Prior to this, I completed my schooling at <a href="http://dav14gurgaon.com/" class="external-link" target="_blank">D.A.V. Public School</a>, Gurgaon, achieving 88% in Class 12 and 91.4% in Class 10.`
}

export const error = (input) => {
  return `<div class="error">sh: Unkonown command: ${input}</div><div>See <span class="help-command">\`help\`</span> for a list of available commands</div>`
}

export const getHelp = () => {
  return (
    commands
      .map(
        (
          command
        ) => `<div style="display: flex; justify-content: space-between;">
      <p class="help-command" style="font-size: 16px">${command.command}</p>
      <p>${command.description}</p>
    </div>`
      )
      .join("") +
    `<br />
    <div >Type one of the above to view. For eg. <span class="help-command">about</span></div>`
  )
}

export const redirectResume = () => {
  window.open("https://drive.google.com/file/d/1KbzPdryFcQPhxebO_SR6Y0NZLvoZDU0S/view?usp=sharing", "_blank")
  return ""
}

export const COMMANDS = {
  projects: getProjects,
  contact: getContacts,
  about: getAbout,
  skills: getSkills,
  education: getEducation,
  resume: redirectResume,
  error: error,
}

const getAge = (date) => {
  const today = new Date()
  const bday = new Date(date)

  let age = today.getFullYear() - bday.getFullYear()
  const m = today.getMonth() - bday.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < bday.getDate())) {
    age--
  }
  return age
}
