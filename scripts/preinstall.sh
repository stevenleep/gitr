#! /bin/bash

cat << EOF
>>>> 正在执行 PreInstall.sh 文件
     需要经历 3个 步骤：

     1. 增强 GitConfig 配置文件
     2. 增强 GitHook 配置
     3. 执行你自己的脚本
     
<<<<
EOF


# ref https://git-scm.com/docs/git-config/2.6.7
echo "============== 增强Git内置配置 ======================="
git config --local include.path ../.workspace/.gitconfig
echo "============== GIT配置增强成功 ======================="


# ref https://git-scm.com/docs/githooks
# ref https://github.com/git/git/blob/6675f501f6b987dbdb0dbeb1d2efeb5a27fc41a7/Documentation/config.txt#L621-L636
echo "============== GIT HooksPath ================="
# git config core.hooksPath ../.workspace/githooks
echo "============== GIT HooksPath Successful ======"