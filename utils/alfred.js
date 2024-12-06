


export const CONTENTS = {
    help: () => {
        COMMANDS.map((command) => `<div class="command">
        <p class="command-name">${command.command}</p>
        <p class="command-description">${command.description}</p>
        </div>`).join("") + `<br />
        <div class="command">
        Type one of the above commads to get started`
    },

    about: () => {
        `Hi! I'm Harsh Dawar, a ${getAge("2002/01/16")} year old software developer from India.
        <br /><br />
        I'm currently pursuing my B.E. from TIET Patiala. I'm passionate about building things for the web and I love to learn new things.`
    },

    education: () => {
        `I am currently pursuing my B.E. in Computer Science from Thapar Institute of Engineering and Technology, Patiala. and I am a graduate from D.A.V. Public School, Gurgaon`
    },

    skills: () => {
        `I have experience working with the following technologies:
        <br /><br />
        <b>Programming Languages:</b>C/C++, JavaScript, TypeScript, Python
        <br /><br />
        <b>Frontend:</b> ReactJS, NextJS, HTML, CSS, Tailwind
        <br /><br />
        <b>Database:</b> Oracle,MySQL, MongoDB
        <br /><br />
        <b>Others:</b> Git, Linux, AWS, Docker`
    },
    error: (input) => {
        `<div class="error">sh: Unkonown command: ${input}</div><div class="help-command">See \`help\` for a list of available commands</div>`
    },
    
}

