import { LinksResponse } from '@/types/linkType/linkType'
import instance from '../axios'

export async function getLinksData(): Promise<LinksResponse> {
    return instance.get('/getLinks')
}
