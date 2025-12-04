const host = 'http://localhost:3000'

const api = {
  getCourses: async () => {
    const response = await fetch(`${host}/course/all`)
    return response.json()
  },
  getLessons: async (courseId) => {
    const response = await fetch(`${host}/lesson/${courseId}`)
    return response.json()
  },
  getExercises: async (lessonId) => {
    const response = await fetch(`${host}/exercise/${lessonId}`)
    return response.json()
  },
  createCourse: async (data) => {
    const response = await fetch(`${host}/course/new`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    return response.json()
  },
  createLesson: async (data) => {
    const response = await fetch(`${host}/lesson/new`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    return response.json()
  },
  createExercise: async (data) => {
    const response = await fetch(`${host}/exercise/new`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    return response.json()
  },
  updateExercise: async (data, exerciseId) => {
    const response = await fetch(`${host}/exercise/${exerciseId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    return response.json()
  },
  deleteExercise: async (exerciseId) => {
    const response = await fetch(`${host}/exercise/${exerciseId}`, {
      method: 'DELETE',
    })
    return response.json()
  },
}

export default api