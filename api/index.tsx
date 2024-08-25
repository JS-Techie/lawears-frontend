const apiUrls = () => {
    const host = 'http://localhost:8000';
    const versionPrefix = '/api/v1';
    const baseUrl = host +  versionPrefix;

    return {
        query: `${baseUrl}/query`,
        auth:  `${baseUrl}/auth`
    }
}

export default apiUrls;