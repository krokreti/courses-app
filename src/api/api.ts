const {VUE_APP_URL} = process.env;
const URL = 'https://courses-app-1b601-default-rtdb.firebaseio.com/';

export async function getCourses() {
    // const request = await fetch(VUE_APP_URL + 'courses');
    const request = await fetch(URL + 'courses.json');
    return await request.json();
}

export async function getDetailedCourse(id: number) {
    // const request = await fetch(VUE_APP_URL + 'courses/' + id );
    const request = await fetch(URL + 'courses/' + id + '.json');
    return await request.json();
}