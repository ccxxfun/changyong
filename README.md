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
     bash superupdate.sh cn
     bash superupdate.sh 163
     bash superupdate.sh aliyun
     bash superupdate.sh aws


# 4、一键卸载阿里云安全监控/云盾/安骑士
     第一、关闭开机启动
     service aegis stop #停止服务
     chkconfig --del aegis # 删除服务
     第二、卸载安骑士
     wget http://update.aegis.aliyun.com/download/uninstall.sh
     sh uninstall.sh
     wget http://update.aegis.aliyun.com/download/quartz_uninstall.sh
     sh quartz_uninstall.sh

     pkill aliyun-service
     rm -fr /etc/init.d/agentwatch /usr/sbin/aliyun-service
     rm -rf /usr/local/aegis*

     第三、屏蔽阿里云盾的IP地址
     iptables -I INPUT -s 140.205.201.0/28 -j DROP
     iptables -I INPUT -s 140.205.201.16/29 -j DROP
     iptables -I INPUT -s 140.205.201.32/28 -j DROP
     iptables -I INPUT -s 140.205.225.192/29 -j DROP
     iptables -I INPUT -s 140.205.225.200/30 -j DROP
     iptables -I INPUT -s 140.205.225.184/29 -j DROP
     iptables -I INPUT -s 140.205.225.183/32 -j DROP
     iptables -I INPUT -s 140.205.225.206/32 -j DROP
     iptables -I INPUT -s 140.205.225.205/32 -j DROP
     iptables -I INPUT -s 140.205.225.195/32 -j DROP
     iptables -I INPUT -s 140.205.225.204/32 -j DROP

#  5、卸载腾讯云镜
     wget -qO- https://raw.githubusercontent.com/littleplus/TencentAgentRemove/master/remove.sh | bash


#  6、一键启用SSH密匙登录
     wget https://raw.githubusercontent.com/Chiakge/SSHKEY_Installer/master/key.sh --no-check-certificate&& bash key.sh [ccxxfun]


#  7、快速安装Telegram机器人rssbot
https://github.com/iovxw/rssbot
     
     wget https://github.com/iovxw/rssbot/releases/download/v2.0.0-alpha.5/rssbot-amd64-linux
     chmod +x rssbot-amd64-linux
     nohup ./rssbot-amd64-linux <跟上bot密匙在botfather申请>


#  8、秋水逸冰Teddysun UnixBench跑分测试脚本

     wget -qO- bench.sh | bash


#  9、oldking SuperBench.sh 跑分脚本

     wget -qO- sb.oldking.net | bash


#  10、91yuntest 一键跑分脚本

     wget -N --no-check-certificate https://raw.githubusercontent.com/91yun/91yuntest/master/test.sh && bash test.sh -i "io,bandwidth,chinabw,download,traceroute,backtraceroute,allping" -u


#  11、LemonBench一键跑分脚本

      wget https://github.com/LemonBench/LemonBench/raw/master/LemonBench.sh | bash LemonBench.sh --fast


#  12、besttrace回程网络测试

     wget -qO- git.io/besttrace | bash
     
 #  13、Superspeed.sh三大运营商全面测速

     bash <(curl -Lso- https://git.io/superspeed)
  

