package com.yc.tieba.service.impl;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yc.tieba.entity.Admin;
import com.yc.tieba.mapper.AdminMapper;
import com.yc.tieba.service.AdminService;
import com.yc.tieba.util.Encrypt;

@Service("adminService")
public class AdminSericeImpl implements AdminService {
	
	@Autowired
	private AdminMapper adminMapper;
	
	@Override
	public Admin login(Admin admin) {
		admin.setApassword(Encrypt.md5AndSha(admin.getApassword()));
		return adminMapper.login(admin);
	}

	@Override
	public boolean updatePwd(Admin admin) {
		admin.setApassword(Encrypt.md5AndSha(admin.getApassword()));
		return adminMapper.updatePwd(admin);
	}

	@Override
	public Admin selectPwd(Admin admin) {
		return adminMapper.selectPwd(admin);
	}

}
