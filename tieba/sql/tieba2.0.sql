drop table admin;
drop table types;
drop table typeadmin;
drop table comments;
drop table store;
drop table concern;
drop table secret;
drop table note;
drop table users;
drop sequence admin_id;
drop sequence  types_id;
drop sequence  typeadmin_id;
drop sequence users_id;
drop sequence note_id;
drop sequence comments_id;

select nid,ntitle,ncontent,note.tid,note.userid,ntimes,nnum,naccess,ngood,nstatus,nstates,nremark ,uname,tname  from note inner join users on note.userid=users.userid inner join types on note.tid=types.tid and note.tid = '101'

--管理�?
create table admin(
  aid varchar2(5) primary key,
  aname varchar2(20) unique not null,
  apassword varchar2(40) default '6f9b0a55df8ac28564cb9f63a10be8af6ab3f7c2',
  asex  CHAR(3) DEFAULT '�?  CONSTRAINT admin_asex CHECK(asex IN('�?,'�?)),
  aemail varchar2(40) unique,
  apic varchar2(100)
);

create sequence admin_id start with 1000;--管理员ID序列


--用户(板块管理员，普通用�?

create table users(
	userid varchar2(5) primary key,
	uname varchar2(20) unique not null,
    password varchar2(40) default '6f9b0a55df8ac28564cb9f63a10be8af6ab3f7c2',
    birthday varchar2(20),
    sex  CHAR(3) DEFAULT '�?  CONSTRAINT users_sex CHECK(sex IN('�?,'�?)),
    telephone varchar2(20) unique,
    email varchar2(40) unique,
    address  varchar2(40),
    picPath varchar2(100),
    signs varchar2(50),--签名
    num number DEFAULT 0,--经验�?
    regDate date,--注册日期
    status NUMBER DEFAULT 0 CONSTRAINT users_status CHECK(status IN(0,1,2)),--是否被禁言 1禁言 2删除
    previl NUMBER DEFAULT 0 CONSTRAINT users_previl CHECK(previl IN(0,1)), --权限�?用户,1板块管理员）
    uremark varchar2(20)
);

create sequence users_id start with 1000;--用户ID
insert into users(userid,uname,password,birthday,sex,telephone,email,address,picPath,signs,num,regDate) values(users_id.nextval||'','莱因哈特',default,'2017-03-13','�?,'12345678911','154131546@qq.com','湖南省衡阳市',null,'努巴尼是个好地方',0,sysdate);
select * from users;
delete from users where userid='1040'

insert into users
select users_id.nextval||'',dbms_random.string('l',4),'6f9b0a55df8ac28564cb9f63a10be8af6ab3f7c2',
to_char(add_months(sysdate, dbms_random.value(12*18, 12*50) * -1), 'yyyy-MM-dd'),
decode(ceil(dbms_random.value(0, 2)), 1, '�?, '�?),
'180'||ceil(dbms_random.value(10000000,99999999)),
dbms_random.string('l',dbms_random.value(5, 12))||'@qq.com',
decode(ceil(dbms_random.value(0, 6)), 1, '湖南', 2, '湖北', 3, '广东', 4, '广西', 5, '北京', '上海'),'',
dbms_random.string('l',11),0,sysdate,0,0,'' from dual connect by level <= 10; 


create table typeadmin(
    taid varchar2(5) primary key,--板块
    userid varchar2(5) constraint fk_typeadmin_userid references users(userid),--用户
    taremark varchar2(20)
);

create  sequence typeadmin_id start with 10000;--版块ID

--板块信息�?
create table types(
    tid varchar2(5) primary key,   --版块id
    tname varchar2(50) unique not null,  --版名
    tnum  number,  --版块帖子数量
    tdesc varchar2(100),  --版块格言
    tstate number DEFAULT 1 CONSTRAINT types_tstate CHECK(tstate IN(0,1,-1)),  --版块状�?是否可用 1可用 -1不可�?
    tremark varchar2(20)
);

insert into types(tid,tname,tnum,tdesc,tstate) values(typeadmin_id.nextval,'nekopara',1,'巧克力香兰子',1);
create sequence types_id start with 100;
insert into types(tid,tname,tnum,tdesc,tstate) values(types_id.nextval,'新浪新闻',0,'新鲜�?,1);
select * from types where tstate in(1,-1);
update types set tstate = 0 where tid='105';
delete from types where tid=102;

insert into TYPES
select types_id.nextval,
dbms_random.string('l',dbms_random.value(5, 10)),0,
dbms_random.string('l',dbms_random.value(5, 20)),1,'' from dual connect by level <= 10;




create sequence note_id start with 10000;--帖子信息ID
--帖子信息�?
create table note(
    nid varchar2(5) primary key,
    ntitle varchar2(50), --帖子标题
    ncontent varchar2(300), --帖子内容
    tid varchar2(5) constraint fk_note_tid references types(tid),    --属于哪个版块   外键
    userid varchar2(5) constraint fk_note_userid references users(userid), --发帖�?  外键
    ntimes date,  --发帖时间
    nnum number,--评论数量
  naccess number,--帖子访问�?
  ngood number,--帖子点赞数量
    nstatus  NUMBER DEFAULT 1 CONSTRAINT note_nstatus CHECK(nstatus IN(0,1)),--是否删除 0删除
    nstates NUMBER DEFAULT 1 CONSTRAINT note_nstates CHECK(nstates IN(0,1)),--是否锁帖（是否能够评论）0锁帖
    nremark varchar2(20)
);

--insert into note(nid,ntitle,ncontent,tid,userid,ntimes,nnum,naccess,ngood,nstatus,nstates) values(note_id.nextval,'巧克力赛�?','我最喜欢巧克力不服来�?','10000','1000',sysdate,3,1,0,1,1);

insert into  note 
select note_id.nextval,dbms_random.string('l',6) ,
dbms_random.string('l',6),'101','1001',
sysdate,0,0,0,1,1,'' from dual connect by level<=10;
select n.*,rownum from NOTE n where rownum <=5 order by nnum desc;--根据评论数量排序

select * from note;
update note set ntitle='唯爱王源',ncontent='茫茫人海中遇见你 如同阳光照进心底 最美的时光有你相依' where nid='10021';
update note set ntitle='王源表情�?,ncontent='茫茫人海中遇见你 如同阳光照进心底 最美的时光有你相依' where nid='10005';
update note set ntitle='超少年密�?,ncontent='茫茫人海中遇见你 如同阳光照进心底 最美的时光有你相依' where nid='10006';
update note set ntitle='最美的时光 因为遇见�?,ncontent='茫茫人海中遇见你 如同阳光照进心底 最美的时光有你相依' where nid='10007';
update note set ntitle='王源天黑�?,ncontent='茫茫人海中遇见你 如同阳光照进心底 最美的时光有你相依' where nid='10008';
update note set nstatus =1 where nstatus=0;
--查询用户的所有帖�?
select n.ntitle,n.ncontent,n.ngood,n.ntimes,u.uname from note n join users u on n.userid = u.userid where u.userid='1001';




create sequence comments_id start with 10000;--评论ID
--评论�?
create table comments(
    cid varchar2(5) primary key,
    nid varchar2(5) constraint fk_comments_nid references note(nid),--评论哪个帖子 外键
    userid varchar2(5) constraint fk_comments_userid references users(userid),--用户评论 外键
    pcid varchar2(5), --判断是插�?
    ccontent varchar2(200),--评论内容
    ctime varchar2(20),  --评论时间
    cgood number,--点赞数量
    cstatus NUMBER DEFAULT 1 CONSTRAINT comments_cstatus CHECK(cstatus IN(0,1)),--是否删除 0删除
    cstates NUMBER DEFAULT 0 CONSTRAINT comments_cstates CHECK(cstates IN(0,1)),--私密状�?1私密
    cremark varchar2(20)
);
insert into comments(cid,nid,userid,ccontent,ctime,cgood,cstatus,cstates) values(comments_id.nextval,'10000','1000','aaa',to_char(sysdate'yyyy--mm-dd hh24:mi:ss'),0,1,0);
insert into  comments 
select comments_id.nextval||'','10001','1001','',
dbms_random.string('l',6),
sysdate,0,1,0,'' from dual connect by level<=10;
select * from comments where nid = 10020 order by ctime desc;

--收藏�?
drop table store;
create table store(
    storeuserid varchar2(5) constraint fk_store_userid references users(userid),--用户id 外键 
    nid varchar2(5) constraint fk_store_nid references note(nid),--帖子id  外键
    sttimes date,
    status NUMBER DEFAULT 1 CONSTRAINT store_status CHECK(status IN(0,1)),--是否删除   0删除
    stremark varchar2(20)
);
insert into store values('1001','10021',sysdate,1,'');
insert into store values('1001','10020',sysdate,1,'');
--显示用户收藏的帖�?
select n.nid,n.userid,n.ntitle,n.ncontent,n.ntimes,n.ngood,s.storeuserid,s.sttimes  from store s join note n on s.nid=n.nid join users u on s.storeuserid=u.userid where storeuserid='1001' union

select * from store;

--关注�?

create table concern(
    userida varchar2(5) constraint fk_concern_userida references users(userid),--关注�?
    useridb varchar2(5) constraint fk_concern_useridb references users(userid),--被关注人
    cotimes date,--关注时间
    cstatus NUMBER DEFAULT 0 CONSTRAINT concern_cstatus CHECK(cstatus IN(0,1)),--是否取消关注  1取消关注
    coremark varchar2(20)
);

--私信�?

create table secret(
    userida varchar2(5) constraint fk_secret_userida references users(userid),--发送人
    useridb varchar2(5) constraint fk_secret_useridb references users(userid),--接收�?
    stimes date,--私信时间
    sstatus NUMBER DEFAULT 0 CONSTRAINT secret_sstatus CHECK(sstatus IN(0,1)),--是否为系统推送消�? 1系统推�?
    sstate NUMBER DEFAULT 1 CONSTRAINT secret_sstate CHECK(sstate IN(0,1)),--是否删除，已�?
    sremark varchar2(20)
);


select * from note;
select * from TYPES where tid=101;

select tid from types where   tstate in (0,1)   and ( tid  ='bb'  or  tname   = 'bb'    )
