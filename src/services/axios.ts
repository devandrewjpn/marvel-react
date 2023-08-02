import axios from 'axios'

const apiKey = '08bfc07e5af8c63dcc5c879a66931f85'

axios
    .get('URL_DA_API', {
        headers: {
            'api-key': apiKey,
        },
    })
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
        console.error(error)
    })
