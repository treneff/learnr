const baseURL = 'http://localhost:8080/api/students/';

const StudentService = {
    getStudents() {
        return fetch(baseURL).then((res) => res.json());
    },
};

export default StudentService;