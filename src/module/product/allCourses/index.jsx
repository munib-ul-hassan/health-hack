import React from 'react'
import { AllCoursesBanner } from './banner';
import { CourseSection } from './courseSection';
import { CoursesAdvertisementBanner } from './allCoursesBanner';
import { AllCourseSection } from './allCoursesSection';

export const AllCourses = () => {
  return (
    <div>
      <AllCoursesBanner/>
      <CourseSection/>
      <CoursesAdvertisementBanner/>
      <AllCourseSection/>
    </div>
  )
};
