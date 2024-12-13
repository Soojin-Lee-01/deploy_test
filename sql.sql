show TABLES;
show DATABASES;

use sesac;

CREATE TABLE visitor (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    comment MEDIUMTEXT
);

desc visitor;

-- data 삽입
INSERT INTO visitor(name, comment) VALUES ("홍길동", "내가 왔다");
INSERT INTO visitor VALUES (null, "이찬혁", "으라차차");
INSERT INTO visitor VALUES (null, "삭제 예정", "으라차차");

-- data 조회
select * from visitor;

-- data 수정
update visitor set comment = "야호" where id = 2;

-- data 삭제
delete from visitor WHERE id = 3;

############ DCL
-- MySQL 사용자 생성
CREATE USER 'soo'@'%' IDENTIFIED BY '1234';

-- 권한 부여
GRANT ALL PRIVILEGES ON *.* TO 'soo'@'%' WITH GRANT OPTION;

-- 새로운 설정 적용
ALTER USER 'soo'@'%' IDENTIFIED WITH mysql_native_password BY '1234';
FLUSH PRIVILEGES;

SELECT * FROM mysql.user;

show GRANTS for 'soo'@'%';