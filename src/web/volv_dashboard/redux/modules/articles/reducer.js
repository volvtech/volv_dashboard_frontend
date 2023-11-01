import { articlesConstant } from "./creator";

const articleInitialState = {
    artile_data: {}
}


const MAPPED_REDUCER = {
    [articlesConstant.GET_ARTICLES_LIST_DATA]: (state, {payload}) => {
        if(payload?.isLoading) {
            return {
                ...state,
                articleData: {
                    ...state.articleData
                }
            }
        }
    }
}

function articleReducer(state=articleInitialState, action) {
    const handler = MAPPED_REDUCER[action.type];
    return handler ? handler(state, action): state;
}

export default articleReducer;
