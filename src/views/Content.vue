<template>
  <div id="content" class="content">
    <div class="bread-nav">
      <span>当前位置： </span>
      <span> 首页 > </span>
      <span>{{`${this.$route.params.nav} > `}}</span>
      <span>{{ this.$route.params.navSub }}</span>
    </div>
    <div class="left-nav">
      <h2 class="title">基地概况</h2>
      <ul class="navSub-list">
        <li class="navSub-item" v-for="(item, idx) in navSubList" :key="idx">
          {{item}}
        </li>
      </ul>
    </div>
    <div class="detail">
      <h2 class="title">广东工业大学实训基地简介</h2>
      <div class="description">
        <p style="color:#3E3E3E;font-family:&quot;font-size:15px;text-align:justify;">
          <span style="font-size:18px;">&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;广州国家现代服务业集成电路设计产业化基地（以下简称“广州IC基地”），为国家科技部2010年批准建设，
            于2012年4月落地成立，是全国十个国家级的集成电路设计高新技术产业化基地之一。<br>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;自成立以来，广州国家IC基地致力于面向物联网、互联网、大数据、
            云计算、智能机器人等产业的芯片设计及产品应用研发服务，系统集成互联网开发等领域创新资源聚集和服务能力建设，建立完善的产业培育与项目孵化体系。
            截至目前，广州国家IC基地已初步建成了集成电路设计EDA公共服务平台、仿真验证技术实验室、集成电路产品质量监督检验中心、高端应用电子芯片协同创新中心，
            可为集成电路设计相关企业提供完整的集成电路设计工具及其运行环境支持，先进工艺全流程的集成电路设计服务、MPW流片服务，IP开发、交易、集成等技术咨询服务，
            产品检测试验、分析评价、认证计量服务等。<br>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;同时，广州国家IC基地还注重人才队伍建设，集聚了一批面向物联网、互联网、大数据、云计算、智能机器人等产业的芯片
            设计及产品应用研发创新团队和企业。成立以来，广州国家IC基地已累计孵化相关企业/项目157家/项，培育新三板上市企业2家、预备上市企业2家，国家高新技术企业
            14家、高新企业培育入库2家，广州市科技小巨人企业认定9家，累计总产值超20亿元。
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Content',
  data: () => ({
    navSubList: ['基地简介', '学校简介', '企业资质', '基地共建协议']
  }),
  watch: {
    '$route': function () {
      console.log('当前位置：', `${this.$route.params.nav} > ${this.$route.params.navSub}`)
    }
  }
}
</script>

<style src='./Content.styl' lang="stylus"></style>
