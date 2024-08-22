const apiUrls = () => {
    const baseUrl = 'http://localhost:8000/';

    return {
        customerFetch: `${baseUrl}/customer/fetch`
    }
}

export default apiUrls;