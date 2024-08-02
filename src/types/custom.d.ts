declare module '*.css' {
    const css: { [key: string]: string }
    export default css
}

declare module '*.scss' {
    const content: unknown
    export default content
}
