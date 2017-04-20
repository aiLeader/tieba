package com.yc.tieba.entity;

public class Admin {
	private String aid;
	private String aname;
	private String apassword;
	private String asex;
	private String aemail;
	private String aphone;
	private String apic;
	public Admin() {
		// TODO Auto-generated constructor stub
	}
	
	public Admin(String aid, String apassword) {
		super();
		this.aid = aid;
		this.apassword = apassword;
	}

	public Admin(String aid, String aname, String apassword, String asex, String aemail, String aphone, String apic) {
		super();
		this.aid = aid;
		this.aname = aname;
		this.apassword = apassword;
		this.asex = asex;
		this.aemail = aemail;
		this.aphone = aphone;
		this.apic = apic;
	}

	public String getAphone() {
		return aphone;
	}

	public void setAphone(String aphone) {
		this.aphone = aphone;
	}

	public String getAid() {
		return aid;
	}
	public void setAid(String aid) {
		this.aid = aid;
	}
	public String getAname() {
		return aname;
	}
	public void setAname(String aname) {
		this.aname = aname;
	}
	public String getApassword() {
		return apassword;
	}
	public void setApassword(String apassword) {
		this.apassword = apassword;
	}
	public String getAsex() {
		return asex;
	}
	public void setAsex(String asex) {
		this.asex = asex;
	}
	public String getAemail() {
		return aemail;
	}
	public void setAemail(String aemail) {
		this.aemail = aemail;
	}
	public String getApic() {
		return apic;
	}
	public void setApic(String apic) {
		this.apic = apic;
	}

	@Override
	public String toString() {
		return "Admin [aid=" + aid + ", aname=" + aname + ", apassword=" + apassword + ", asex=" + asex + ", aemail="
				+ aemail + ", aphone=" + aphone + ", apic=" + apic + "]";
	}
	
}
