import courses from "../data/courses";
import { Link, useParams } from "react-router-dom";

const SingleCourse = () => {
    const params = useParams();
    const course = courses.find((course) => course.slug === params.slug);
    return (
        <>
            <h1>{course.title}</h1>
            <h2>{course.slug}</h2>
            <h3>{course.id}</h3>
            {/* Способ №1 вернутся на вкладку со всеми курсами. Использует абсолютная ссылка */}
            {/* <Link to="/courses">All courses</Link> */}

            {/* Способ №2 вернутся на вкладку со всеми курсами. Используется выход на один уровень верх относительно этого path */}
            <Link to=".." relative="path">All courses</Link>
        </>
    );
};

export default SingleCourse;
