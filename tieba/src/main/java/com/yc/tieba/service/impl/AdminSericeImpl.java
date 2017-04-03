package com.yc.tieba.service.impl;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yc.tieba.entity.Admin;
import com.yc.tieba.mapper.AdminMapper;
import com.yc.tieba.service.AdminService;

//@Service("adminService")
public class AdminSericeImpl implements AdminService {
	@Autowired
	private AdminMapper adminMapper;

	/*@Override
	public int modifyAdmin(Admin admin) {
		// TODO Auto-generated method stub
		return 0;
	}*/

	

}
