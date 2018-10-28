export const getDataList = (idx, subIdx) => {
  let dataList
  switch (idx) {
    case 1:
    dataList = labIntroduction[subIdx]
      break
    case 2:
    dataList = buildIdea[subIdx]
      break
    case 3:
    dataList = organizationManage[subIdx]
      break
    case 4:
    dataList = system[subIdx]
      break
    case 5:
    dataList = teach[subIdx]
      break
    case 6:
    dataList = teacher[subIdx]
      break
    case 7:
    dataList = ensure[subIdx]
      break
    case 8:
      break
    case 9:
      break
    default:
      break
  }
  return dataList
}

const labIntroduction = [
  {
    navSub: `基地简介`,
    title: `广东工业大学实训基地简介`,
    description: `<p>广州国家现代服务业集成电路设计产业化基地（以下简称“广州IC基地”），为国家科技部2010年批准建设，
                  于2012年4月落地成立，是全国十个国家级的集成电路设计高新技术产业化基地之一。</p>
                  <p>自成立以来，广州国家IC基地致力于面向物联网、互联网、大数据、 云计算、智能机器人等产业的芯片设计及
                  产品应用研发服务，系统集成互联网开发等领域创新资源聚集和服务能力建设，建立完善的产业培育与项目孵化
                  体系。截至目前，广州国家IC基地已初步建成了集成电路设计EDA公共服务平台、仿真验证技术实验室、集成电
                  路产品质量监督检验中心、高端应用电子芯片协同创新中心，可为集成电路设计相关企业提供完整的集成电路设
                  计工具及其运行环境支持，先进工艺全流程的集成电路设计服务、MPW流片服务，IP开发、交易、集成等技术咨
                  询服务， 产品检测试验、分析评价、认证计量服务等。</p>
                  <p>同时，广州国家IC基地还注重人才队伍建设，集聚了一批面向物联网、互联网、大数据、云计算、智能机器
                  人等产业的芯片 设计及产品应用研发创新团队和企业。成立以来，广州国家IC基地已累计孵化相关企业/项目157
                  家/项，培育新三板上市企业2家、预备上市企业2家，国家高新技术企业 14家、高新企业培育入库2家，广州市
                  科技小巨人企业认定9家，累计总产值超20亿元。</p>`
  },
  {
    navSub: `学校简介`,
    title: `广东工业大学简介`,
    description: `<p>广东工业大学由原广东工学院、广东机械学院和华南建设学院（东院）于1995年6月合并组建而成。学校已有近60年的办学历史，是一所以工为主、工理经管文法艺结合的、多科性协调发展的省属重点大学，是广东省高水平大学重点建设高校。</p>
                  <p>学校坐落在中国南方名城广州，地理位置优越，校园占地总面积3066.67亩，拥有大学城、东风路、龙洞等多个校区。大学城校区突出工科特色，多个学科相互促进协调发展，创设多个协同创新科研平台。东风路校区突出艺术创意和社工服务氛围的营造，建有设计创意园和成果展示馆。龙洞校区突出管理学与理学氛围的营造，打造环境优美、恬静怡人的花园式校园。</p>
                  <p>目前，学校共设有19个学院、4个公共课教学部(中心)、5个博士后科研流动站、4个省攀峰重点学科一级学科、6个省优势重点学科一级学科、5个省特色重点学科二级学科、7个一级学科博士学位授权点、31个二级学科博士学位授权点、23个一级学科硕士学位授权点、92个二级学科硕士学位授权点，具有工程（17个领域）、工商管理、工程管理、会计、翻译、社会工作、金融、艺术8种硕士专业学位授予权，同时具有同等学力人员申请硕士学位授予权。学校现有85个本科专业，自2014年起，所有本科专业均在广东省普通高等学校第一批本科录取批次招生。机械、信息、材料、化工四个学科为广东省“211工程”三期重点建设学科。2012年以来，工程学科位居ESI世界排名前1%行列。2017年7月，材料科学进入ESI世界排名前1%行列。</p>
                  <p>学校提出“以更加解放的思想、更加开放的姿态、更加创新的体制机制、更加勤奋务实的工作作风，集聚海内外创新人才，多模式构建创新平台，营造创新氛围，培养创新人才”的发展思路，全面实施大学生创新行动计划、研究生拔尖创新人才培育计划、研究生优质生源“千苗计划”、师资队伍建设“百人计划”、“培英育才计划”以及团队平台重大成果培育计划等重大战略。近年来，学校在师资队伍、学术科研、人才培养等方面发展迅速，成效显著。</p>
                  <p>学校高度重视师资队伍建设，师资力量不断增强。学校有职称自主评审权，现有专任教师2000多人，其中正高级职称300多人，副高级职称700多人。2011年以来，学校已引进“百人计划”特聘教授百余名和3名学院院长。其中“长江学者”9人、国家“杰青”9人、国家“优青”5人、教育部“新世纪优秀人才”5人、广东省“领军人才”7人、广东省“珠江学者”23人、广东省“杰青”10人等，同时还聘有外籍院士4人、中国工程院院士4人，已组建并入选广东省“创新团队”9个。高素质师资队伍的建设，为学校人才培养提供了强有力的支撑保证。目前全日制在校生45000余人，其中本科生38000余人，研究生7000余人，并招有不同层次的成人学历教育学生、港澳台生和外国留学生，已形成“学士-硕士-博士”完整的人才培养体系。</p>
                  <p>学校坚持把科研工作紧密结合广东经济和社会发展需求，坚持不懈地走产学研相结合的道路，科研整体实力不断增强。学校建设有国家地方联合工程实验室1个、国家地方联合工程研究中心1个、国家发改委现代服务业产业集聚基地1个、教育部重点实验室1个、教育部国际合作联合实验室1个，广东省实验室1个以及其他省级科研平台77个。2017年，学校国家自然科学基金项目突破130项，位列全国高校第八十位；发明专利申请公开数1929件，位列全国高校第八位。近三年，学校科研成果荣获国家科技进步二等奖1项、省部级科学技术奖一等奖6项、中国专利优秀奖4项、教育部高等学校科学研究优秀成果奖（人文社会科学）1项、广东省哲学社会科学优秀成果奖一等奖3项。此外，学校还与地方政府和工业界联合建立了“广州国家现代服务业集成电路设计产业化基地”、“东莞华南设计创新院”、“佛山广工大数控装备协同创新研究院”、“河源广工大协同创新研究院”等多个跨学科协同创新平台，推进广东国防科技工业技术成果产业化应用推广中心落地，前期投入6亿元资助中心建设。目前学校正努力在精密装备、IC设计、工业设计、制药、软物质等领域构建高水平研发平台，促进产学研和协同创新取得实质性成果。</p>
                  <p>学校致力于培养有国际视野、有坚实基础、有创新能力的人才。现有7个教育部卓越工程师教育培养计划专业，7个国家级特色专业建设点，1个国家级专业综合改革试点专业， 18个省级特色专业，13个广东省名牌专业，5个省级重点专业，16个省级专业综合改革试点专业；3门国家级精品课程（含双语教学示范课程），91门省级精品课程（含双语教学示范课程）；7个国家级工程实践教育中心、2个国家级研究生联合培养示范基地、1个国家级大学生实践教学基地、38个省级大学生实践教学基地；3个国家级实验教学示范中心，1个国家级虚拟仿真实验教学中心，24个省级实验教学示范中心，3个省级虚拟仿真实验教学中心；1个国家级教学团队。学校办学条件良好，现有计算机15271台套，教学、科研仪器设备固定资产总值12.55亿元。校舍建筑面积156万余平方米。图书馆拥有藏书377.3万册、电子图书224.6万册，并采用共享方式，多渠道、大幅度拓展了信息资源使用范围。学校从学生成才观的理念转变抓起，探索性实施了“重基础、强能力、宽视野、多样性、有担当”的培养方案改革，着力探索以培养创新创业精神和实践能力为重点、基于产学研全程结合的人才培养新模式与新思路，同时将人才培养（特别是本科生培养）纳入高水平科技创新平台建设规划之中。</p>
                  <p>学校高度重视对外合作与交流，专门设立出国（境）留学基金和来华留学基金，推进以“学科为主体”的国际合作与交流战略，促进学科和团队与国（境）外高水平大学、科研机构和跨国企业等建立战略合作伙伴关系，搭建合作平台，对接国际一流技术，引进国际一流人才。学校高度重视服务国家“一带一路”发展战略，加强“一带一路”沿线国家人才培养，支持“一带一路”沿线国家学生来华留学与技术培训。学校先后与国（境）外150多所大学和机构建立合作关系，开展合作办学、学生联合培养、师资培养、教学模式改革、合作科研、人才引进和平台建设等多方位合作，推进重点学科建设进入国际前沿，为学校师资队伍国际化、人才培养国际化和科研工作国际化提供良好平台。学校入选国家外专局和教育部“高等学校学科创新引智计划”（“111计划”）。</p>
                  <p>通过一系列创新举措，学生综合素质和创新能力不断提高，学生科技创新活动、文化体育活动取得重大突破。2015年，学校承办了第十四届“挑战杯”全国大学生课外学术科技作品竞赛，摘得两项特等奖、两项一等奖、两项二等奖，并以团体总分全国高校第二、广东高校第一的好成绩捧得“优胜杯”，创造了我校参加“挑战杯”竞赛的历史最好成绩，刷新了我校参加“挑战杯”竞赛的获奖层次和整体成绩的记录。 2016年，在“挑战杯•创青春”广东大学生创业大赛中，我们以金奖数第一、团体总分第一捧得“创青春杯”，创造了我校参加广东省“创青春”大学生创业竞赛的历史最好成绩。2017年，在第十五届“挑战杯”全国大学生课外学术科技作品竞赛中，摘得两项特等奖、一项二等奖、三项三等奖，并以特等奖总数全国第二、团体总分广东高校第一的好成绩捧得“优胜杯”。在全国大学生电子商务大赛暨全国高校“创意、创新、创业”电子商务挑战赛总决赛中获得特等奖和一等奖；在第四届中国大学生方程式汽车大赛中，广工大FSAE车队获得营销报告第一名和总成绩第四名的佳绩；学生荣获美国大学生数学建模竞赛一等奖；学生作品分别荣获德国RED DOT（红点）设计大奖和美国IDEA设计大赛铜奖；2名学生先后荣获第七届、第十届中国青少年科技创新奖等；学校篮球队连续三年荣获全国大超联赛总冠军，2011年荣获第八届亚洲大学篮球锦标赛冠军等；学生舞蹈节目获全国大学生艺术展演一等奖等。</p>
                  <p>学校全面贯彻党的十九大精神，以习近平新时代中国特色社会主义思想为指导，深入贯彻习近平总书记重要讲话精神，坚定不移地走内涵式发展道路，不断提高办学水平与质量，为建成以工为主、与产业深度融合、极具创造活力的特色鲜明的高水平大学而努力奋斗！</p>`
  },
  {
    navSub: `企业资质(缺)`,
    title: `企业资质`,
    description: `<p style="color: red">备注：这里视情况是否上传营业执照</p>`
  },
  {
    navSub: `基地共建协议(缺)`,
    title: `基地共建协议`,
    description: `<p style="color: red">备注：上传共建协议书</p>`
  }
]

const buildIdea = [
  {
    navSub: `总体思路`,
    title: `总体建设思路（参考）`,
    description: `<p>*****学院是一所面向制药、冶金、机械等行业的应用型本科院校。应用型本科教育是以培养高素质应用型人才为目标，加强实践性教学环节，注重在实验、实训、实习等实践性课程中培养学生的动手能力与解决生产实际问题的能力，以及技术开发与创新的能力。通过实践教育基地的建设，满足制药工程、应用化学和环境工程本科专业和生物技术高职专业学生的校外实践教学任务；通过建立二级学院与企业共同培养应用型人才的机制与模式，创新实践教学管理模式；通过具体的实践教学，提高学院教师的实践水平，并且提高企业科技人员的教学水平；通过学生的实践教学环节，提高学生的实验动手能力和创新能力。<p>
                  <p>大型仪器公共技术服务平台也将通过实践教育基地建设紧密与学校合作，逐步建成集学生实训、师资培养、教学改革、技术服务和科技创新为一体的现代化实训基地。通过与辽宁科技学院进行合作，大型仪器公共技术服务平台将建设成为立足本溪，辐射全省，走向全国的具有先进技术和区域特色的基地示范人才培训中心。<p>`
  },
  {
    navSub: `建设内容`,
    title: `建设内容(参考)`,
    description: `<p>1、健全组织管理体系</p>
                  <p>通过成立“校企合作委员会”这一组织，实现对学生的管理和实践教学的运行。委员会设主任两名，分别由学校和企业的负责人承担，主要职责是整体实习环节的统筹管理；另外，委员会要设置两名副主任，分别由校企双方担任，主要负责联系实习的具体工作，如实习时间、实习内容、实习班级等；委员会还要设置若干名指导老师，分别由校企双方的老师和科技人员担任，主要负责指导学生实践教学内容，管理学生的纪律、安全等。  </p>
                  <p>2、改革校外实践教育模式    </p>
                  <p>坚持以工作——学习结合为切入点，以任务引领课程为基本取向，以工作本位学习为主要教学形式，实施以任务驱动、项目导向为载体，以工学交替、实践实习为主要形式的教学模式；重视学生校内学习与实际工作的一致性，探索课堂与实习地点的一体化；力求做到理论融于实践，动脑融于动手，做人融于做事，将职业资格考核的内容融入到课程教学之中，实现“所学”与“所用”零距离，真正实现“教、学、做”一体化，适应企业一线的实际工作。通过学校和平台共同制定制药工程、应用化学等专业的药物分析实验和综合实训教学目标和培养方案，共同建设校外实践教育的课程体系和教学内容，通过双方指导老师共同评价学生实践能力的考核方式，完成实践教学任务。    </p>
                  <p>3、加强师资队伍建设    </p>
                  <p>建立一支结构合理、专兼结合、相对稳定、在实践教学过程中能承担完成各项实训任务的专兼实践教学师资队伍。强化专业教师的培养，制定相应的师资培养措施，造就一支双师型师资队伍，通过有计划地安排辽宁科技学院的指导教师到基地进行专业技能培训，提高他们的实践能力；通过有计划地安排基地指导教师到学校听课，由学校的指导老师指导其讲课方法，以提高基地指导教师的讲课水平；对于学校和基地的指导教师给予一定额度的补助费。通过以上三种方式，充分调动教师的积极性，不断提高指导教师队伍的整体水平。    </p>
                  <p>4、建立开放共享的机制    </p>
                  <p>随着经济的发展，辽宁省本溪高新区生物医药产业以及中国药都创新园迅猛发展，特别是受本溪市政府经济发展规划的政策影响，沈阳药科大学、中国医科大学、辽宁中医药大学也将落户于开发区，通过实践教育基地成功运行，也可以对这些高校开放共享，满足这些高校相关专业的学生进行校外实践教学任务。    </p>
                  <p>5、保护高校学生的合法权益    </p>
                  <p>通过制定学生管理细则，加强对学生进行安全、企业保密、知识产权保护等教育，以使实践教学顺利进行。</p>`
  },
  {
    navSub: `建设目标`,
    title: `建设目标(参考)`,
    description: `<p>1. 条件优良</p>
                  <p>通过一年多的建设到2013 年底，与校方共建形成集“一个基地连贯三个中心”于一体的大学生实践教育基地，一个基地指本项目“大型仪器公共技术服务平台实训基地”，三个中心指色谱技术实训中心、光谱技术实训中心、生物技术实训中心，拥有典型的色谱、光谱、生物技术仪器设备，集学生实训、员工培训、教学科研为一体的实训基地，校企共建探索形成设备一流、管理先进的高技能人才培养基地。    </p>
                  <p>2. 保障教学</p>
                  <p>通过建设，本实践基地可为辽宁科技学院相关专业每位学生提供良好的实训条件，可满足“教、学、做”一体化教学的实施及学生校外实训要求，操作性实训占全部实训内容50%以上。对于培训合格的实训生，实践基地颁发资质证书。</p>
                  <p>3. 师资合理</p>
                  <p>依托平台中心工作人员以及大连化物所技术支持团队，推进师资队伍建设，形成一支结构合理、专兼结合、相对稳定，在实训教学过程中能承担完成各项实训工作的高素质教学师资团队，围绕教学目标，实施教学方法和手段改革，将项目教学法、行为导向教学法、任务驱动教学法应用于教学，形成职业基础能力、创新能力与创业能力三合一的工学结合人才培养途径，将工学结合贯穿于人才培养的全过程。</p>
                  <p>4. 服务地方经济</p>
                  <p>随着本溪高新区中国药都的建设和发展，全省大部分的生物医药企业集中在此。作为特色经济，支柱产业之一，本溪医药行业走出了一条依靠科技创新和技术进步促进传统产业发展的科技之路。大型公共仪器服务平台实践教育基地要为地方经济培养高素质的生物医药专业技术人才。</p>
                  <p>5. 校企全面合作</p>
                  <p>本基地将与辽宁科技学院药化学院开展全面合作，共同构建产学研联盟的创新体系。校企合作开发工学结合课程，联合开展企业技术难题的攻关、课题的申报和院校科技成果的转化，推动产学研相结合，形成校企合作良性互动关系。</p>`
  },
  {
    navSub: `建设计划`,
    title: `建设计划（参考）`,
    description: `<p>1. 实践专业</p>
                  <p>基地主要面向辽宁科技学院生物医药与化学工程学院现有的“应用化学”、“制药工程”、“环境工程”三个本科专业和“应用化工技术”、“中药制药”和“生物技术”三个高职专业。</p>
                  <p>2. 实践内容和企业课程</p>
                  <p>计划在基地建立三个中心，分别为色谱分析实训中心、光谱分析实训中心、生物分析实训中心。在这三个中心进行制药工程、应用化学、环境工程、生物技术等专业的技能实习，作为技术实训的基础。</p>
                  <p>（1）色谱分析实训中心，这是基地的核心区域，是本次投资的重点。本中心分高效液相色谱实训区、液相色谱-质谱连用实训区、气相色谱实训区、气相色谱-质谱等四个区。这四个实训区主要是进行学生药品色谱分析的实训与技能考核，以及高效液相色谱的使用，建设时考虑样品前处理，分析方法的建立，从药品分析检测考虑其仪器的完整性与配套性，场地要求、仪器选择、仪器使用上都以药品分析检测中实际分析检测为要求。训练学生掌握药品分析检测技术、色谱分析方法和技术的应用、考核，以及为校企产学研合作，技术攻关，技术转化服务。</p>
                  <p>（2）光谱分析实训中心，以光谱分析实验室为基础，中心将包括核磁共振实训区、荧光光谱实训区、紫外分光光谱实训区、红外光谱实训区、原子吸收光谱实训区等五个区。这五个区这要作为实训人员光谱分析的技能培训区，进行光谱分析的技术的培训、训练、考核场所。</p>
                  <p>（3）生物分析实训中心。本中心包括：电泳凝胶成像分析系统实训区、多功能酶标仪实训区、全自动氨基酸分析仪实训区、荧光pcr扩增仪实训区、荧光显微镜实训区、程序降温仪实训区、流式细胞仪实训区、离心机实训区、快速蛋白液相色谱实训区、冷冻干燥机实训区、二氧化碳培养箱实训区、万级细胞净化室实训区等十多个功能区，进行生物分析技术实习、实训与技能定级。</p>`
  }
]

const organizationManage = [
  {
    navSub: `组织管理框架`,
    title: `组织管理框架(参考)`,
    description: `<p>辽宁科技学院与本溪本草堂药物科技有限公司挂牌成立大型仪器公共技术服务平台实践教育基地，设立了由合作双方领导任职的校企合作委员会办公室，设立主任、副主任和指导教师。主任由双方领导任职，负责全面统筹规划和指导实习教学和实训基地建设工作；副主任负责联系实习业务，包括安排实习时间、实习内容、实习班级、实习指导老师等；指导老师由校企双方人员承担，学校的指导老师主要负责学生的管理，基地的指导老师主要负责学生的实践教学和训练，双方指导老师还要负责学生的成绩考核等任务。通过校企双方共同管理、共同制定章程、共同协商的运行机制，为基地的建设提供了强有力的组织保障，形成了由上至下的严密的组织机构链条。<br></p>
                  <img src="${require('@/assets/organization/org-struct.jpg')}" style="width:690px;height:auto;">`
  }, // 备注：可以在文本中插入图片、及规定大小，格式如上
  {
    navSub: `双方职责和任务`,
    title: `双方职责和任务`,
    description: `<p>1、实践教学与人才培训</p>
                  <p>实践教育基地主要承担：与学院共建学生的实习、实践基地，配合学院安排指导认识实习、综合实训和毕业设计，为学院学生寒暑假的专业实习和社会实践提供人力和物力便利条件；为青年教师的实践能力培养提供条件。</p>
                  <p>辽宁科技学院主要承担：为开展实训工作提供资金、人力和物力方面的保障。</p>
                  <p>2、人才培养方案的制定</p>
                  <p>3、实践教学模式的改革</p>
                  <p>4、实践环节课程标准制定</p>`
  }
]

const system = [
  {
    navSub: `机制体制`,
    title: `校企合作委员会章程`,
    description: `<p>第一章 总 则</p>
                  <p>第一条为全面贯彻落实《教育部关于开展“本科教学工程”大学生校外实践教育基地建设工作的通知》（教高函[2012]7号）和《“十二五”期间辽宁省普通高等学校本科教学改革与质量提高工程的实施意见的通知》，通过实践教育基地的建设，转变教育思想观念，改革人才培养模式，加强实践教学环节，提升高校学生的创新精神、实践能力、社会责任感和就业能力。健全实践教育基地的组织管理体系、改革校外实践教育模式、建设专兼结合的指导教师队伍、建立开放共享机制、不断提高本科教育教学质量，大力提升人才培养水平。辽宁科技学院药化学院根据实际情况特制订本委员会章程。</p>
                  <p>第二条 委员会的名称：药化学院-本草堂药物科技有限公司校企合作委员会，简称“校企合作委员会”。</p>
                  <p>第三条 委员会的性质：本委员会是辽宁科技学院药</p>
                  <p>化学院与本草堂药物科技有限公司联系的桥梁与纽带；合作共建大学生校外实践教育基地，完善实践教学条件，推进实践教学模式创新，全面提升大学生的创新实践能力，加快实验教学内容、方法、手段等的改革，探索实验教学管理体制与运行机制，探索资源共享共用、成本共担、过程共管的运行机制。开展大学生创新创业竞赛，培养学生的创新精神、实践能力和团队协作意识，突出大学生创新实践能力的培养和文化素质的提高。</p>
                  <p>第四条 委员会的原则：优势互补、资源共享、互惠互利、共同发展，建成资源整合、教学科研结合、校企合作、开放共享的大学生实践教学平台；形成有利于大学生创新实践能力培养和教师教育教学能力提升的新机制；共同培养应用型人才。</p>
                  <p>第五条 本委员会办公地点：本草堂药物科技有限公司。</p>
                  <p>第二章 组织机构</p>
                  <p>第六条 本委员会设校企委员会主任、副主任和委员。</p>
                  <p>第七条 委员会主任由辽宁科技学院药化学院与本草堂药物科技有限公司相关领导担任，副主任由校企双方具体负责人担任，委员由学校教师及企业技术人员担任。</p>
                  <p>第八条 委员会的主要职责</p>
                  <p>（一） 制定校企合作基地建设目标与任务，制定年度建设</p>
                  <p>计划，明确校企双方的责、权、利；并按年度进行建设工作检查与总结。</p>
                  <p>（二） 确定基地指导教师名单；</p>
                  <p>（三） 制定基地运作模式、实习管理制度和考核评价制度；</p>
                  <p>（四） 制定各类仪器、设备操作规程和安全使用规程，保</p>
                  <p>障实训过程安全高效；</p>
                  <p>（五） 制定《实训实验室工作守则》，保障实践教学场所</p>
                  <p>保持整洁，有序开放；</p>
                  <p>（六） 研究确定色谱技术实训中心、光谱技术实训中心、</p>
                  <p>生物技术实训中心详细的实训项目库；</p>
                  <p>（七）负责组织开展学校与企业在人才培养模式创新、科技合作、实训基地建设、产学一体化、技术咨询、项目申报等方面的合作事项；</p>
                  <p>（八）研究决定基地建设的其他重大事项。</p>
                  <p>第三章 校企合作内容</p>
                  <p>第九条人才培养合作。创新应用化学专业人才培养模式的改革，学校可根据企业需求开展订单培养，按企业的要求培养急需的技能人才；企业可在学校设立奖学金、奖教金，为学校提供实习实训基地或联合培养基地。</p>
                  <p>第十条 校企联合的管理体系构建，通过“校企合作委员会”，实现对学生的管理和实践教学的运行。指导老师由校企双方人员承担，学校的指导老师主要负责学生的管理，基地的指导老师主要负责学生的实践教学和训练，双方指导老师还要负责学生的成绩考核等任务。校企双方采取共同管理、共同制定章程、共同协商的运行机制。</p>
                  <p>第十一条队伍建设合作。企业为学校提供教师锻炼场所和方便条件，为学校选派兼职教师；学校为企业培训在职人员，组织兼职教师培训。建立一支结构合理、专兼结合、相对稳定、在实践教学过程中能承担完成各项实习实训任务的专兼实践教学师资队伍。强化专业教师的培养，制定相应的师资培养措施，造就一支“双师型”师资队伍，通过有计划地安排辽宁科技学院的指导教师到基地进行专业技能培训，提高他们的实践能力；通过有计划地安排基地指导教师到学校听课，由学校的指导老师指导其讲课方法，以提高基地指导教师的讲课水平。通过以上三种方式，充分调动教师的积极性，不断提高指导教师队伍的整体水平。</p>
                  <p>第十二条 顶岗实习、实习就业、实训基地合作。基地要按照委员会制定的年度学生实习计划完成实践教学任务，并安排指导教师，完成对学生的日常管理、教学与考核任务。药化学院每年定期向基地单位派送顶岗实习、实习就业的学生。</p>
                  <p>第十三条合作建立开放共享的机制建设。辽宁省本溪高新区生物医药产业以及中国药都创新园迅猛发展，特别是受本溪市政府经济发展规划的政策影响，沈阳药科大学、中国医科大学、辽宁中医药大学也将落户于开发区，通过实践教育基地成功运行，也可以对这些高校开放共享，满足这些高校相关专业的学生进行校外实践教学任务。</p>
                  <p>第十四条保护高校学生的合法权益</p>
                  <p>通过制定学生管理细则，加强对学生进行安全、企业保密、知识产权保护等教育，以使实践教学顺利进行。</p>
                  <p>第四章校企双方的权利与义务</p>
                  <p>第十五条 企业单位可参与指导学校的专业设置、人才培养方案（教学计划）、课程体系、课程标准和教学改革等教学活动，使学校的教学更切合企业实际需求。</p>
                  <p>第十六条 校企双方需各确定一名高级管理人员作为基地建设与实践教学日常安排与管理。</p>
                  <p>第十七条 校企双方享有下列权利</p>
                  <p>（一）优先取得和利用本委员会的技术信息或资料。</p>
                  <p>（二）参加本委员会组织的各种学术、技术交流活动。</p>
                  <p>（三）优先招收学校毕业生就业</p>
                  <p>（四）优先与学校共同进行人才培养、科研合作。</p>
                  <p>第十八条 校企双方必须履行下列义务：</p>
                  <p>（一）遵守本委员会章程，执行委员会的决议。</p>
                  <p>（二）维护委员会的合法权益。</p>
                  <p>（三）按照大学生实践教育基地建设项目任务书，按进度开展基地的各项建设工作。</p>
                  <p>（四）优先接受学校毕业生就业。</p>
                  <p>（五）及时向委员会反馈本单位的人才需求情况。</p>
                  <p>（六）向辽宁科技学院药化学院推荐兼职教师。</p>
                  <p>接受基地技术人员的理论课程培训。</p>
                  <p>（七）协助辽宁科技学院药化学院中卫职业技术学校开展科研等技术开发活动。</p>
                  <p>（八）开展如专业（或方向）共建、实训中心共建、课程共建等合作项目。</p>
                  <p>第十九条 校企双方如有严重损害双方社会声誉与经济利益现象发生，按照国家有关法律条文和学校及企业的有关规章制度处理。</p>
                  <p>第五章经费来源与管理</p>
                  <p>第二十条 委员会的主要经费来源为辽宁省政府和学校及企业的资助。</p>
                  <p>第二十一条 经费的使用严格按照《辽宁省普通高等学校2011年质量提高工程及卓越工程师教育培养工程专项资金管理暂行办法》执行，由学校基地建设领导小组审核监督，资金主要用于实践教学讲课费、课程建设、实验耗材、专家学术交流及学术报告劳务费。经费使用按照学校的有关财务制度，专款专用。</p>
                  <p>第六章 附则</p>
                  <p>第二十二条委员会专门为基地的运行与建设情况建设网站，校企双方应及时将合作建设情况将随时上传至网站。详情请查阅辽宁科技学院生物医药与化学工程学院网页（http://sjjyjd.lnist.edu.cn/）--辽宁省大学生实践教育基地。</p>
                  <p>第二十三条 辽宁科技学院向企业单位授牌：“辽宁科技学院实践教学基地”。</p>
                  <p>第二十四条 本章程的解释权归药化学院-本草堂药物科技有限公司校企合作委员会。</p>
                  <p>校企合作委员会</p>`
  }
]

const teach = [
  {
    navSub: `实践教学资源`,
    title: `***实训中心`,
    description: `<img src="${require('@/assets/teach/teach-lab.jpg')}">`
  },
  {
    navSub: `实践教学体系`,
    title: `实践教学体系`,
    description: `<p>实践教学体系分为</p>
                  <p>一、认识实习</p>
                  <p>（一）、认识实习面向专业：学院全体应用化学专业本科生；</p>
                  <p>（二）、认识实习主要内容：</p>
                  <p>1、中国药都平台整体介绍</p>
                  <p>2、平台详细介绍PPT</p>
                  <p>3、实验室安全教育</p>
                  <p>4、CNAS以及检测流程介绍</p>
                  <p>5、生物中心以及主要仪器现场介</p>
                  <p>6、色谱中心以及主要仪器的现场讲解</p>
                  <p>7、光谱中心以及主要仪器的现场讲解</p>
                  <p>8、实验相关仪器的讲解</p>
                  <p>二、生产实习</p>
                  <p>（一）、生产实习面向专业：学院全体应用化学专业本科生；</p>
                  <p>（二）、生产实习主要内容：</p>
                  <p>1、高锰酸钾摩尔吸光系数的测定、</p>
                  <p>2、邻二氮菲分光光度法测定微量铁、</p>
                  <p>3、邻二氮菲法分光光度法测定微量铁的条件实验、</p>
                  <p>4、分光光度法测定铬和钴的混合物、</p>
                  <p>5、分光光度法测定邻二氮菲合亚铁的络合比、</p>
                  <p>6、原子吸收分光光度法测定水中重金属、</p>
                  <p>7、酸度计的使用与溶液的pH值测定、</p>
                  <p>8、气相色谱定性定量分析、</p>
                  <p>9、高效液相色谱法分析萘和联苯</p>
                  <p>三、课程实验教学</p>
                  <p>（一）、课程实验教学面向专业：学院全体应用化学专业本科生；</p>
                  <p>（二）、课程实验教学主要内容：</p>
                  <p>1、液相色谱演示实验</p>
                  <p>2、红外演示实验</p>
                  <p>3、核磁共振演示实验</p>
                  <p>4、质谱演示实验</p>`
  }
]

const teacher = [
  {
    navSub: `基地负责人`,
    title: `***教授个人履历`,
    description: `<img src="${require("@/assets/teacher/photo-fuzeren.jpg")}" style="width:133px;height:auto;">
                  <p>个人情况：</p>
                  <p>姓名：  闫竞   性别：  女  籍贯：  内蒙古赤峰市 出生日期：1982.6.8 </p>
                  <p>联系方法:</p>
                  <p>   电话:     18841491825             邮编:117004</p>
                  <p>   地址:     本溪经济开发区研发中心A1-1本溪本草堂药物科技有限公司</p>
                  <p>                 E-mail:    yanjingyu82@sina.com</p>
                  <p>教育情况：</p>
                  <p>      2006．9－2011．1   中国科学院大连化学物理研究所 分析化学专业 获理学博士学位</p>
                  <p>      2003．9－2006．7   沈阳药科大学 天然药物化学专业 获理学硕士学位</p>
                  <p>                    2003．9－2006．7   沈阳药科大学  制药工程专业  获工学学士学位</p>
                  <p>工作经历：</p>
                  <p>        2011．1 中国科学院大连化学物理研究所  助理研究员</p>
                  <p>                           本溪本草堂药物科技有限公司   总经理</p>
                  <p>主要工作：</p>
                  <p>负责大型仪器公共技术服务平台的运行工作。</p>
                  <p>荣获奖励：</p>
                  <p>    荣获“第十届本溪十大杰出青年”荣誉称号</p>
                  <p>发表文章</p>
                  <p>1. Jingyu Yan, Xiuling Li, Sanyan Cheng, Yanxiong Ke and Xinmiao Liang, Facile synthesis of titania–zirconia monodisperse microspheres and application for phosphopeptides enrichment, Chem. Comm. 2009, 2919-2931.</p>
                  <p>2. Jingyu Yan, Xiuling Li, Long Yu, Yu Jin, Xiuli Zhang, Xingya Xue, Yanxiong Ke and Xinmiao Liang, Selective enrichment of glycopeptides /phosphopeptides using porous titania microspheres，Chem. Comm. 2010,5488-5490</p>
                  <p>3.               Huihui Wan, Jingyu Yan, Long Yu, Xiuli Zhang, Xingya Xue, Xiuling Li, Xinmiao Liang, Zirconia Layer Coated Mesoporous Silica Microspheres Used for Highly Specific Phosphopeptide Enrichment, Talanta, 2010, Accepted</p>
                  <p>专利</p>
                  <p>1. 梁鑫淼，闫竞宇，柯燕雄，李秀玲，张秀莉，薛兴亚，利用金属氧化物</p>
                  <p>富集糖肽以及同时富集糖肽和磷酸化肽的方法，发明专利，200910220155.5</p>`
  },
  {
    navSub: `基地师资队伍`,
    title: `基地师资队伍建设`,
    description: `<p>本溪本草堂药物科技有限公司依托中国科学院大连化学物理研究所梁鑫淼团队作为技术支持团队。公司的工作人员均毕业于国内著名的药学学府的药学相关专业以及分析检测专业，可从事涵盖光谱、色谱、生物分析等方面的分析检测工作。本团队由30多名工作人员组成。其中，博士2名，硕6名。梯度分布的人力资源既能分析检测简单的药物样品，又能创建复杂样品分析方法。这基本上满足了实训基地对于师资队伍建设的要求。这是一致年轻、技术专业，又充满活力的技术团队，拥有扎实的理论基础和专业的技术能力，能手把手地进行实训，满足实训人员的对于教师的需求。工作人员均工作在药品分析检测第一线，经验丰富，能力出众，能满足实训人员专业技能培训，提高实训人员的技术能力。实训基地人员配备合理，结构、层次符合基地发展的长远需要，并且能很好地满足学生实验实训的指导需要。</p>
                  <p>基地教师培训机制完备，每年定期组织岗前培训，并结合相关制度进行考核评估；并且注重相互之间的交流和学习，积极参加国家和地方组织的各项专业技术培训，多次组织安排基地工作人员前往中科院大连化物所和华东理工大学药学院学习和深造，逐步形成了完善的培训机制，为基地的人才培养以及梯队建设打下了坚实的基础。同时，这也为实训基地开展实训工作提供了有力的技术支持和师资保障。</p>`
  },
  {
    navSub: `学校负责人`,
    title: `****教授简介`,
    description: `<p>*****，教授，1963年出生，毕业于辽宁师范大学化学专业。任辽宁科技学院生物医药与化学工程学院院长。从事应用化学，应用化工技术等专业的理论与实践教学工作，积极从事教育教学改革与科学研究工作，承担并参与省部级、校级多项教育教学改革研究课题，有丰富的教育教学改革的经历。在科研方面，从事有机合成研究，承担并参与辽宁省、本溪市多项纵向科研课题，发表论文多篇，编写《硼化合物生产与应用》、国家“十一五”规划教材《有机化学》等。曾获宝钢优秀教师奖，辽宁省普通高校实验室建设及仪器设备管理工作先进个人，辽宁科技学院优秀共产党员、辽宁科技学院巾帼创优标兵等荣誉。</p>`
  },
  {
    navSub: `学校师资队伍`,
    title: `学校师资队伍概况`,
    description: `<p>****现有专任教师45人，其中，教授5人，副教授17人，博士5人，硕士29人。</p>`
  }
];

const ensure = [
  {
    navSub: `经费投入保障`,
    title: `经费投入保障`,
    description: `<p>学校经费投入情况：(1)2004年升本以来，学校共投入600多万元资金，用于药化学院实验中心的仪器设备更新和实验室基本设施建设。(2)学校每年下拨实验材料费约8万元，用于日常实践教学运作，专款专用。(3)学校设有专项仪器设备维护基金，由实验室与设备管理处负责管理和使用。</p>
                  <p>本溪本草堂药业科技有限公司经费投入情况：（1）公司每年投入100万元，用于员工的薪水、待遇。（2）公司每年投入50万元，用于设备的日常维护。（3）公司每年投入5万元，用于聘请外单位的教授进行学术交流等。</p>`
  }
  // {
  //   navSub: ``,
  //   title: ``,
  //   description: ``
  // },
  // {
  //   navSub: ``,
  //   title: ``,
  //   description: ``
  // }
]

// const labIntroduction = [
//   {
//     navSub: ``,
//     title: ``,
//     description: ``
//   },
//   {
//     navSub: ``,
//     title: ``,
//     description: ``
//   },
//   {
//     navSub: ``,
//     title: ``,
//     description: ``
//   },
//   {
//     navSub: ``,
//     title: ``,
//     description: ``
//   },
//   {
//     navSub: ``,
//     title: ``,
//     description: ``
//   },
//   {
//     navSub: ``,
//     title: ``,
//     description: ``
//   }
// ]

// const labIntroduction = [
//   {
//     navSub: ``,
//     title: ``,
//     description: ``
//   }
// ]