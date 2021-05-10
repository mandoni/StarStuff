import axios from "axios";
const baseUrl = 'http://localhost:4000/'
//const baseUrl = 'http://ec2co-ecsel-1hnjmvddgcdcu-1748092567.us-east-1.elb.amazonaws.com:4000/'
//const API = axios.create({baseUrl: 'http://ec2co-ecsel-1hnjmvddgcdcu-1748092567.us-east-1.elb.amazonaws.com:4000'});
////"proxy": "http://ec2co-ecsel-1hnjmvddgcdcu-1748092567.us-east-1.elb.amazonaws.com:4000",
export default {
    postDocument(url = baseUrl + 'postDocument/') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url + id)
        }
    }
}
