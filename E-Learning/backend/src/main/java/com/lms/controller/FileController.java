package com.lms.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.lms.bean.FileData;
import com.lms.service.FileService;

@RestController
@CrossOrigin("http://localhost:4200")
public class FileController {

	@Autowired
	private FileService service;

	FileData data;
	
	
	@PostMapping("/uploadpdf")
	public void uploadpdf(@RequestParam("file") MultipartFile file) throws IOException
	{
		data = service.storeFile(file);
		
	}
	
	@GetMapping("/ViewFiles")
	public List<FileData> getAll() {
		List<FileData> doc;
		doc =service.getAll();
		return doc;
	}
	
	
}
