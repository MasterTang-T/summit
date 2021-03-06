import axios from 'axios';
const NODE_ENV = process.env.NODE_ENV;
const BASE_URL = NODE_ENV === 'production' ? 'http://geos.officemate.cn/' : 'http://172.168.10.164:9020';
const service = axios.create({
	baseURL: BASE_URL,
	timeout: 5000,
})

service.interceptors.response.use(response => {
	const { data } = response;
	return data
})


export default service