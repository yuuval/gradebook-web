//TODO const URL = ""

export async function addSubject(subject, token) {
    const response = await fetch(`${URL}/gradebook/subject/add`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(subject)
    })

    if (!response.ok) {
        return Promise.reject(response)
    }
    const data = await response.json()
    return data
}

export async function updateSubject(subject, token) {
    const response = await fetch(`${URL}/gradebook/subject/update/${subject.id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
            "authorization": `Bearer ${token}`
        },
        body: JSON.stringify(subject)
    })

    if (!response.ok) {
        return Promise.reject(response)
    }

    const data = await response.json()
    return data
}

export async function deleteSubject(id, token) {
    const response = await fetch(`${URL}/gradebook/subject/delete/${id}`, {
        method: "DELETE",
        headers: {
            "content-type": "application/json",
            "authorization": `Bearer ${token}`
        }
    })

    if (!response.ok) {
        return Promise.reject(response)
    }
}
export async function getSubject() {
    const response = await fetch(`${URL}/gradebook/subject?_sort=id&_order=asc`, {
        method: "GET",
        headers: {
            "content-type": "application/json",
        },
    })

    if (!response.ok) {
        return Promise.reject(response)
    }
    const data = await response.json()
    return data
}
export async function addGrade(grade, token) {
    const response = await fetch(`${URL}/gradebook/grade/add`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(grade)
    })

    if (!response.ok) {
        return Promise.reject(response)
    }
    const data = await response.json()
    return data
}

export async function updateGrade(grade, token) {
    const response = await fetch(`${URL}/gradebook//grade/update/${grade.id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
            "authorization": `Bearer ${token}`
        },
        body: JSON.stringify(grade)
    })

    if (!response.ok) {
        return Promise.reject(response)
    }

    const data = await response.json()
    return data
}

export async function deleteGrade(id, token) {
    const response = await fetch(`${URL}/gradebook/grade/delete/${id}`, {
        method: "DELETE",
        headers: {
            "content-type": "application/json",
            "authorization": `Bearer ${token}`
        }
    })

    if (!response.ok) {
        return Promise.reject(response)
    }
}
export async function getGrade() {
    const response = await fetch(`${URL}/gradebook/grade?_sort=id&_order=asc`, {
        method: "GET",
        headers: {
            "content-type": "application/json",
        },
    })

    if (!response.ok) {
        return Promise.reject(response)
    }
    const data = await response.json()
    return data
}

export async function loginTeacher({ email, password }) {
    const response = await fetch(`${URL}/gradebook/teacher/login`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ email, password })
    })

    if (!response.ok) {
        return Promise.reject(response)
    }

    const data = await response.json()
    return data
}

export async function registerTeacher({ email, password }) {
    const response = await fetch(`${URL}/gradebook/teacher/register`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ email, password })
    })

    if (!response.ok) {
        return Promise.reject(response)
    }

    const data = await response.json()
    return data
}

export async function loginStudent({ email, password }) {
    const response = await fetch(`${URL}/gradebook/student/login`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ email, password })
    })

    if (!response.ok) {
        return Promise.reject(response)
    }

    const data = await response.json()
    return data
}

export async function registerStudent({ email, password }) {
    const response = await fetch(`${URL}/gradebook/student/register`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ email, password })
    })

    if (!response.ok) {
        return Promise.reject(response)
    }

    const data = await response.json()
    return data
}