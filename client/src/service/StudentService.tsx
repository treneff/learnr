const baseURL = 'http://localhost:8080/api/students/';

const StudentService = {
    getStudents() {
        return fetch(baseURL).then((res) => res.json());
    },

    getStudentByEmail(email:string) {
        return fetch(baseURL + "?email=" + email).then((res) => res.json());
    },
    };

export default StudentService;