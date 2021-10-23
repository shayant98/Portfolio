export default interface IProject {
    title: string
    github?: string
    url?: string
    description: string
    technologies: string[],
    image: string
    android?:string
    ios?:string
}