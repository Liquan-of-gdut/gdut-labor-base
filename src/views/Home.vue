<template>
    <div id="home">
        <div class="banner">
            <div class="replay-box">
                <div class="replay">
                    <img src="@/assets/banner-by-10.jpg" alt="" class="banner-img">
                </div>
            </div>
        </div>
        <!--index-friendship-show显示页脚的友情链接-->
        <div class="section container">
            <!--最新资讯,通知公告-->
            <div class="float-box margin-bottom">
                <div class="news left">
                    <div class="box border-radius">
                        <h2 class="module-title news-header">
                            <a href="#" onclick="return false">基地动态 >></a>
                            <a href="#" class="icon-more"></a>
                        </h2>
                        <div class="news-section">
                            <div class="news-top left">
                                <a target="_blank" href="http://news.gdut.edu.cn/viewarticle.aspx?articleid=129204">
                                    <p class="img-box">
                                        <img src="@/assets/news-img.png">
                                    </p>
                                    <h2 class="title">实验技能竞赛丨关于举办第十一届广州大学城校际实验综合技能邀请赛暨广东工业大学第十三届学生实验综合技能竞赛</h2>
                                    <!--if-->
                                </a>
                            </div>
                            <ul class="news-list right">
                                <!--ms-for:(index,n) in latestList-->
                                <li>
                                    <h2 class="title">
                                        <i class="icon"></i>
                                        <a href="http://news.gdut.edu.cn/viewarticle.aspx?articleid=133097">[资讯]</a>
                                        <span> | </span>
                                        <a target="_blank" href="http://news.gdut.edu.cn/viewarticle.aspx?articleid=133097">实验室建设项目验收通知SYSJS-18029</a>
                                    </h2>
                                    <p class="time">2018-09-07</p>
                                </li>
                                <!--for362249018044-->
                                <li>
                                    <h2 class="title">
                                        <i class="icon"></i>
                                        <a href="http://news.gdut.edu.cn/viewarticle.aspx?articleid=133105">[资讯]</a>
                                        <span> | </span>
                                        <a target="_blank" href="http://news.gdut.edu.cn/viewarticle.aspx?articleid=133105">关于17／18学年实验室信息统计通知</a>
                                    </h2>
                                    <p class="time">2018-09-07</p>
                                </li>
                                <!--for362249018044-->
                                <li>
                                    <h2 class="title">
                                        <i class="icon"></i>
                                        <a href="http://news.gdut.edu.cn/viewarticle.aspx?articleid=132634">[资讯]</a>
                                        <span> | </span>
                                        <a target="_blank" href="http://news.gdut.edu.cn/viewarticle.aspx?articleid=132634">关于遴选推荐2018年度国家虚拟仿真实验教学项目的通知</a>
                                    </h2>
                                    <p class="time">2018-08-11</p>
                                </li>
                                <!--for362249018044-->
                                <!--ms-for-end:-->
                                <li style="display: none;">
                                    <h2 class="title">
                                        <i class="icon"></i>
                                        <a href="http://news.gdut.edu.cn/viewarticle.aspx?articleid=132270">[资讯]</a>
                                        <span> | </span>
                                        <a target="_blank" href="http://news.gdut.edu.cn/viewarticle.aspx?articleid=132270">项目申报通知| 关于做好2019年本科教学实验室建设项目计划申报的通知
                                        </a>
                                    </h2>
                                    <p class="time">2018-07-05</p>
                                </li>
                                <!--for362249018044-->
                                <li>
                                    <h2 class="title">
                                        <i class="icon"></i>
                                        <a href="http://news.gdut.edu.cn/viewarticle.aspx?articleid=130253">[资讯]</a>
                                        <span> | </span>
                                        <a target="_blank" href="http://news.gdut.edu.cn/viewarticle.aspx?articleid=130253">关于举办实验室安全培训的通知</a>
                                    </h2>
                                    <p class="time">2018-05-08</p>
                                </li>
                                <!--for362249018044-->
                                <li>
                                    <h2 class="title">
                                        <i class="icon"></i>
                                        <a href="http://news.gdut.edu.cn/viewarticle.aspx?articleid=130045">[资讯]</a>
                                        <span> | </span>
                                        <a target="_blank" href="http://news.gdut.edu.cn/viewarticle.aspx?articleid=130045">关于广东工业大学第十三届学生实验综合技能竞赛E1项目增加预选赛的通知</a>
                                    </h2>
                                    <p class="time">2018-04-28</p>
                                </li>
                                <!--for362249018044-->
                                <li>
                                    <h2 class="title">
                                        <i class="icon"></i>
                                        <a href="http://news.gdut.edu.cn/viewarticle.aspx?articleid=130049">[资讯]</a>
                                        <span> | </span>
                                        <a target="_blank" href="http://news.gdut.edu.cn/viewarticle.aspx?articleid=130049">第十一届广州大学城校际实验综合技能邀请赛暨广东工业大学第十三届学生实验综合技能竞赛G3项目参赛名单与场次安排</a>
                                    </h2>
                                    <p class="time">2018-04-28</p>
                                </li>
                                <!--for362249018044-->
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="notice right border-radius margin-bottom">
                    <h2 class="module-title notice-header">
                        <a href="#" onclick="return false">实践教学 >></a>
                        <a href="#" class="icon-more"></a>
                    </h2>
                    <div class="notice-section">
                        <ul class="notice-list">
                            <!--ms-for:n in noticeList-->
                            <li>
                                <p class="time">
                                    <span class="first" style="right: 300px;">06-09</span>
                                    <span>2018</span>
                                </p>
                                <h2 class="title">
                                    <a href="#">普通高等学校本科专业设置管理规定</a>
                                </h2>
                            </li>
                            <!--for9516869594366-->
                            <li>
                                <p class="time">
                                    <span class="first" style="right: 300px;">06-09</span>
                                    <span>2018</span>
                                </p>
                                <h2 class="title">
                                    <a href="#">广东工业大学各学院各专业教学计划总表（2004、2005级）</a>
                                </h2>
                            </li>
                            <!--for9516869594366-->
                            <li>
                                <p class="time">
                                    <span class="first" style="right: 300px;">06-05</span>
                                    <span>2018</span>
                                </p>
                                <h2 class="title">
                                    <a href="#">广东工业大学本科专业建设评估方案</a>
                                </h2>
                            </li>
                            <!--for9516869594366-->
                            <li>
                                <p class="time">
                                    <span class="first" style="right: 300px;">06-04</span>
                                    <span>2018</span>
                                </p>
                                <h2 class="title">
                                    <a href="#">广东工业大学本科专业建设评估办法</a>
                                </h2>
                            </li>
                            <!--for9516869594366-->
                            <li>
                                <p class="time">
                                    <span class="first" style="right: 300px;">06-03</span>
                                    <span>2018</span>
                                </p>
                                <h2 class="title">
                                    <a href="#">广东工业大学本科培养方案及教学计划管理办法</a>
                                </h2>
                            </li>
                            <!--for9516869594366-->
                            <li>
                                <p class="time">
                                    <span class="first" style="right: 300px;">06-02</span>
                                    <span>2018</span>
                                </p>
                                <h2 class="title">
                                    <a href="#">广东工业大学优秀教学成果奖奖励办法</a>
                                </h2>
                            </li>
                            <!--for9516869594366-->
                            <!--ms-for-end:-->
                        </ul>
                    </div>
                </div>
            </div>
            <!--焦点关注-->
            <div class="focus border-radius margin-bottom">
                <h2 class="module-title title">
                    <a href="#" onclick="return false">课程建设 >></a>
                    <!-- <a href="#" class="more">更多&gt;</a> -->
                </h2>
                <ul class="focus-list">
                    <!--ms-for:(index,n) in focusList-->
                    <li class="odd">
                        <a href="#" onclick="return false">
                            <p class="summary" ms-html="n.summary"></p>
                            <!-- <p class="img-box">
                            <img onerror="this.src=&#39;../img/default.png&#39;" src="./index_files/1747375871550.png">
                        </p> -->
                            <h2 class="title">《DSP原理与应用》</h2>
                            <p class="summary">
                                本课程讲授数字信号处理算法在TMS320C54x系列DSP芯片上的实现。包括浮点运算转化为定点运算；TMS320C54x系列DSP芯片的应用特征、硬件结构和特性、 指令系统、开发调试环境和工具、汇编语言程序设计、C语言开发以及C语言和汇编语言混合编程；FIR滤波和FFT等数字信号处理算法在TMS320C54x系列DSP芯片的高效率实现， 以及基于C54x特殊硬件结构对算法进行的优化；定时器、中断系统和McBSP等片内外设的运用以及查询、中断和DMA的数据传输方法。授课过程中配合实验,使学生通过结合机器 的练习与操作熟悉软件开发方法,理解各种DSP算法的实现,并了解DSP系统设计和实现方法。
                            </p>
                        </a>
                    </li>
                    <!--for942335416348-->
                    <li class="even">
                        <a onclick="return false" href="#">
                            <p class="summary" ms-html="n.summary"></p>
                            <!-- <p class="img-box">
                            <img onerror="this.src=&#39;../img/default.png&#39;" src="./index_files/0811370517290.png">
                        </p> -->
                            <h2 class="title">《电磁场理论与微波技术》</h2>
                            <p class="summary">电磁场理论是电子工程类专业的主要基础课程之一，它不仅是许多专业课程的重要基础，而且是许多新兴边缘学科的发展基础和生长点。 本课程从电磁场的角度研究物质的基本属性、运动规律及其相互作用。本课程理论严谨、体系完整，其逻辑推理、数学物理分析方法及所研究的电磁场的 运动规律都具有独特之处。微波技术是建立在电磁场理论之上的应用技术，包括电波传播理论、天线辐射与接收理论等。
                            </p>
                        </a>
                    </li>
                    <!--for942335416348-->
                    <li class="odd">
                        <a onclick="return false" href="#">
                            <p class="summary" ms-html="n.summary"></p>
                            <!-- <p class="img-box">
                            <img onerror="this.src=&#39;../img/default.png&#39;" src="./index_files/1118482810093.png">
                        </p> -->
                            <h2 class="title">《射频识别与定位技术》</h2>
                            <p class="summary">本课程介绍了射频识别及其定位技术的工作原理。主要内容包括射频识别及其定位系统的构成，射频识别标签和读取器的设计与应用， 定位的基本方法及原理，RFID的相关通讯协议，物联网的构成及关键技术等内容。
                            </p>
                        </a>
                    </li>
                    <!--for942335416348-->
                    <li class="even margin0">
                        <a onclick="return false" href="#">
                            <p class="summary" ms-html="n.summary"></p>
                            <!-- <p class="img-box">
                            <img onerror="this.src=&#39;../img/default.png&#39;" src="./index_files/0730486246391.png">
                        </p> -->
                            <h2 class="title">《无线通信》</h2>
                            <p class="summary">
                                无线通信课程主要介绍无线通信的基本技术和相关系统，内容涉及无线信道的基础知识、各类无线通信系统中出现的基本概念、重要的无线通信标准、 以及相关技术的发展趋势等。通过对本课程的学习，学生能掌握无线通信系统涉及的原理、技术和架构，为未来参加相关领域的工作打下良好的基础。
                            </p>
                        </a>
                    </li>
                    <!--for942335416348-->
                    <!--ms-for-end:-->
                </ul>
            </div>
            <!--名师风光-->
        </div>
    </div>
</template>

<script>
export default {
  name: 'Home',
  created () {
    console.log('。。。')
  }
  // mounted () {
  //   this.$store.dispatch('watchDomScroll')
  // }
}
</script>

<style src='./Home.styl' lang="stylus"></style>
