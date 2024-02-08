package com.lms.bean;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

@Entity
@Table(name="tbl_data")
public class FileData {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long fileId;
	
	private String fileName;
	private String fileType;
	@Lob
	private byte[] data;
	
	
	
	public FileData() {
		super();
	}

	public FileData(String fileName, String fileType, byte[] data) {
		super();

		this.fileName = fileName;
		this.fileType = fileType;
		this.data = data;
	}

	public Long getFileId() {
		return fileId;
	}

	public void setFileId(Long fileId) {
		this.fileId = fileId;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public String getFileType() {
		return fileType;
	}

	public void setFileType(String fileType) {
		this.fileType = fileType;
	}

	public byte[] getData() {
		return data;
	}

	public void setData(byte[] data) {
		this.data = data;
	}
	
	
	
}
