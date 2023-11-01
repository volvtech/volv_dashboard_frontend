import API_END_POINTS from 'src/web/config/integrations';
import {API_URL_VERSION_1} from './src/config/env'

export const articleAPI = {
    getArticleListAPI: () => ({
        tokenize: true,
        fetcherParmas: {
            method: 'GET',
            url: API_END_POINTS.getArticleListAPI,
            version: API_URL_VERSION_1,
        }
    })
}