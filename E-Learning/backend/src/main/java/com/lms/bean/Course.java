package com.lms.bean;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import jakarta.persistence.OneToOne;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.Table;

@Entity
@Table(name = "tbl_course")
public class Course {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "course_id") // Course Id
	private long courseId;

	@Column(name = "course_name",nullable = false) // Course Name
	private String courseName;

	@Column(name = "category",nullable = false) // Course Category
	private String courseCategory;

	@PrimaryKeyJoinColumn(name = "file_id") // FileId - Foreign Key
	@OneToOne
	private FileData fileId;
	
	public Course() {
		super();
	}

	public Course(long courseId, String courseName, String courseCategory, FileData fileId) {
		super();
		this.courseId = courseId;
		this.courseName = courseName;
		this.courseCategory = courseCategory;
		this.fileId = fileId;
	}

	public long getCourseId() {
		return courseId;
	}

	public void setCourseId(long courseId) {
		this.courseId = courseId;
	}

	public String getCourseName() {
		return courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}

	public String getCourseCategory() {
		return courseCategory;
	}

	public void setCourseCategory(String courseCategory) {
		this.courseCategory = courseCategory;
	}

	public FileData getFileId() {
		return fileId;
	}

	public void setFileId(FileData fileId) {
		this.fileId = fileId;
	}



}
