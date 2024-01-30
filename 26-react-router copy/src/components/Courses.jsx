import courses from "../data/courses";
import SingleCourse from "./SingleCourse";

const Courses = () => {
  return (
    <>
        <h1>Courses</h1>
        <div>
            {courses.map(course => <SingleCourse key={course.id} course={course} />)}
        </div>
    </>
  )
}

export default Courses