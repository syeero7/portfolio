const techstack: Record<string, string> = {}

function set(name: string, url: string) {
  techstack[name] = url
}

export function get(name: string) {
  if (!techstack[name]) throw new Error(`"${name}" is not in the techstack`)
  return techstack[name]
}

export function getAll() {
  return Object.entries(techstack).map((t) => ({ name: t[0], url: t[1] }))
}

function urlDevIcons(path: string) {
  const base = "httpsx://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons"
  return `${base}/${path}.svg`
}

set("HTML", urlDevIcons("html5/html5-original"))
set("CSS", urlDevIcons("css3/css3-original"))
set("JavaScript", urlDevIcons("javascript/javascript-original"))
set("Git", urlDevIcons("git/git-original"))
set("TypeScript", urlDevIcons("typescript/typescript-original"))
set("React", urlDevIcons("react/react-original"))
set("NodeJS", urlDevIcons("nodejs/nodejs-original"))
set("PostgreSQL", urlDevIcons("postgresql/postgresql-original"))
set("Prisma", urlDevIcons("prisma/prisma-original"))
set("Go", urlDevIcons("go/go-original-wordmark"))
