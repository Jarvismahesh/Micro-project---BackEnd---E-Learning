package com.lms.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.lms.bean.FileData;
import com.lms.bean.User;
import com.lms.repo.FileRepository;

@Service
public class FileService {

	@Autowired
	private FileRepository dbrepo;
	
	public FileData storeFile(MultipartFile file) throws IOException
	{
		String fileName = StringUtils.cleanPath(file.getOriginalFilename());
		
		FileData dbFile = new FileData(fileName, file.getContentType(),file.getBytes());
		
		return dbrepo.save(dbFile);
		
	}
	
	public List<FileData> getAll() {
		Iterator<FileData> it = dbrepo.findAll().iterator();
		List<FileData> lst = new ArrayList<FileData>();
		while (it.hasNext()) {
			lst.add(it.next());
			
		}
		return lst;
	}
}
