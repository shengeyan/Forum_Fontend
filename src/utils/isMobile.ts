export const isMobile = (): boolean => {
    return (
        /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
        window.innerWidth <= 768
    )
}
