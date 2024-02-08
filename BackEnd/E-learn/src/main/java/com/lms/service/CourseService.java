package com.lms.service;

import java.io.IOException;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.multipart.MultipartFile;

import com.lms.bean.Course;
import com.lms.repo.CourseRepository;

@Service
public class CourseService {

	@Autowired
	private CourseRepository courseRep;
	
	 
	public List<Course> getAllCourse() {
		Iterator<Course> it=courseRep.findAll().iterator();
		List<Course> lst = new ArrayList<Course>();
		while (it.hasNext()) {
			lst.add(it.next());	
		}
		return lst;
		
	}

	public boolean insertAndUpdateCourse(Course course) {
		courseRep.save(course);
		return true;
	}	


	public boolean deleteCourse(@PathVariable("course_id") long id) {
		courseRep.deleteById(id);
		return true;
	}




}
