package com.wfarooq.backend.infrastructure.storage;

import org.springframework.web.multipart.MultipartFile;

public interface FileStorageService {

    String uploadFile (MultipartFile file);
    boolean deleteFile (String imgUrl);
}
