# 1、安装BBR

    wget -N --no-check-certificate "https://raw.githubusercontent.com/chiakge/Linux-NetSpeed/master/tcp.sh"
    chmod +x tcp.sh
    ./tcp.sh

#选择安装bbr或者bbrplus或者其他 安装完内核会要求重启。重启完成后 运行

    ./tcp.sh

# 2、加入在线监控

    wget -N --no-check-certificate https://raw.githubusercontent.com/ToyoDAdoubiBackup/doubi/master/status.sh && chmod +x status.sh

#显示客户端管理菜单

    bash status.sh c

#显示服务端管理菜单

    bash status.sh s
    
    
# 3、一键更换Linux软件源脚本
     wget  git.io/superupdate.sh
     bash superupdate.sh


# 4、一键卸载阿里云安全监控/云盾/安骑士
>      curl -sSL http://update.aegis.aliyun.com/download/quartz_uninstall.sh | sudo bash
     sudo rm -rf /usr/local/aegis
     sudo rm /usr/sbin/aliyun-service
     sudo rm /lib/systemd/system/aliyun.service


 #屏蔽阿里云IP
>      iptables -I INPUT -s 140.205.201.0/24 -j DROP
     iptables -I INPUT -s 140.205.225.0/24 -j DROP
     service iptables save
     
	 
#  5、卸载腾讯云镜
>       curl -sSL https://raw.githubusercontent.com/ccxxfun/changyong/uninstal_qcloud.sh | sudo bash


#  6、一键启用SSH密匙登录
>     wget https://raw.githubusercontent.com/Chiakge/SSHKEY_Installer/master/key.sh --no-check-certificate&& bash key.sh [ccxxfun]


