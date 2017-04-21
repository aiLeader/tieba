package com.yc.tieba.mapper;

import com.yc.tieba.entity.Admin;

public interface AdminMapper {
	Admin login(Admin admin);

	boolean updatePwd(Admin admin);

	Admin selectPwd(Admin admin);
}
