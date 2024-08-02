export interface linkType {
    Name: string
    BLOG?: string
    VLOG?: string
    Github?: string
    PersonalSignature?: string
    AvatarURL?: string
    other?: string
}

export type LinksResponse = {
    success: boolean
    data: linkType[]
}
