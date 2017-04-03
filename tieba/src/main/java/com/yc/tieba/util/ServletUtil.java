package com.yc.tieba.util;

import java.io.File;

public class ServletUtil {
	public static final String USERINFO ="users";
	public static final String LOGIN_USER="loginUser";
	public static final String USER_LIST="userList";
	public static final String ERROR_MESSAGE="errorMsg";
	
	public static String UPLOAD_DIR;
	public static final String VIRTUAL_UPLOAD_DIR = "/upload/";
	
	public static String DEPLOY_NAME;
	
	public static File getUploadFile(String fileName){
		File file = new File(UPLOAD_DIR,fileName); //上传文件
		if(!file.getParentFile().exists()){//文件父目录
			file.getParentFile().mkdirs();
		}
		return file;
	}
}
