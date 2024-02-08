package com.lms.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lms.bean.FileData;

@Repository
public interface FileRepository extends JpaRepository<FileData, Long> {

}
