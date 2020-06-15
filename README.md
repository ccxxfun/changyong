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
     curl -sSL http://update.aegis.aliyun.com/download/quartz_uninstall.sh | sudo bash
     sudo rm -rf /usr/local/aegis
     sudo rm /usr/sbin/aliyun-service
     sudo rm /lib/systemd/system/aliyun.service


 #屏蔽阿里云IP
     iptables -I INPUT -s 140.205.201.0/24 -j DROP
     iptables -I INPUT -s 140.205.225.0/24 -j DROP
     service iptables save
     
	 
#  5、卸载腾讯云镜
     curl -sSL https://raw.githubusercontent.com/ccxxfun/changyong/uninstal_qcloud.sh | sudo bash


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

     wget -qO- git.io/superbench.sh | bash

#  10、91yuntest 一键跑分脚本

     wget -N --no-check-certificate https://raw.githubusercontent.com/91yun/91yuntest/master/test.sh && bash test.sh -i "io,bandwidth,chinabw,download,traceroute,backtraceroute,allping" -u

#  11、LemonBench一键跑分脚本

      wget https://github.com/LemonBench/LemonBench/raw/master/LemonBench.sh | bash LemonBench.sh --fast


#  12、nanqinlang回程网络测试testrace

     wget https://raw.githubusercontent.com/nanqinlang-script/testrace/master/testrace.sh
     bash testrace.sh
