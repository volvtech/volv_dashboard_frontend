export const articlesConstant = {
    GET_ARTICLES_LIST_DATA: '@@articles/GET_ARTICLES_LIST_DATA',
    GET_ARTICLE_DETAIL_DATA: '@@articles/GET_ARTICLE_DETAIL_DATA',
    SET_ARTICLE_DATA: '@@articles/SET_ARTICLE_DATA',
}

export const articlesActions = {
    getArticlesListData: () => ({
        type: articlesConstant.GET_ARTICLES_LIST_DATA,
    }),
    getArticleDetailData: (payload = {}) => ({
        type: articlesConstant.GET_ARTICLE_DETAIL_DATA.TRIGGER,
        payload,
    }),
    setArticleData: (payload = {}) => ({
        type: articlesConstant.SET_ARTICLE_DATA.TRIGGER,
        payload,
    }),
}