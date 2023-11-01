export const fetcherConstants = {
    API: '@fetcher/API',
}

export const fetcherAction = ({
    tokenize,
    label,
    fetcherParams,
    headers = {},
    onSuccess = null,
    onFailure = null,
    meta = {},
}) => ({
    type: fetcherConstants.API,
    payload: {
        label, 
        fetcherParams,
        headers,
        onSuccess,
        onFailure,
    },
    meta: {
        tokenize,
        ...meta,
    },
});
