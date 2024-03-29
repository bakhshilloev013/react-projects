import { useEffect } from 'react';
import courses from '../data/courses';
import { Link, useNavigate, useParams } from 'react-router-dom';

const SingleCourse = () => {
    const params = useParams();
    const navigate = useNavigate();
    const course = courses.find((course) => course.slug === params.slug);

    useEffect(() => {
        if (!course) {
            navigate('..', { relative: 'path' });
        }
    }, [course, navigate]);
    return (
        <>
            <h1>{course?.title}</h1>
            <h2>{course?.slug}</h2>
            <h3>{course?.id}</h3>
            {/* Способ №1 вернутся на вкладку со всеми курсами. Используется абсолютная ссылка */}
            {/* <Link to="/courses">All courses</Link> */}

            {/* Способ №2 вернутся на вкладку со всеми курсами. Используется выход на один уровень верх относительно этого path */}
            <Link to=".." relative="path">
                All courses
            </Link>
        </>
    );
};

export default SingleCourse;
