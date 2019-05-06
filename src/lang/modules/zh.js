export default {
  route: {
    dashboard: '首页',
    // 工作模块
    workCenter: '工作台',
    companyProfit: '公司盈利',
    productDetails: '产品详情',
    sellLog: '销售记录',
    purchaseRequest: '采购申请',
    outStorageRequest: '销售申请',
    indentRequest: '订单查询',
    productBadRequest: '商品损毁报告',
    employeeInfo: '员工信息',
    // 服务中心模块
    serviceCenter: '服务中心',
    restRequest: '休假申请',
    cancellTheLeave: '销假申请',
    expenseRequest: '出差报销',
    // 个人中心模块
    personalDetail: '个人中心',
    myHoliday: '我的休假',
    myFlow: '我的流程',
    myCheck: '我的考勤',
    myInfo: '我的信息',
    user: '用户',
    product: '产品',
    service: '服务',
    serviceMonitoring: '服务监控',
    app: 'App 统计',
    userAttributes: '用户属性',
    deviceAttributes: '设备属性',
    businessAttributes: '业务属性',
    userLogin: '用户登录时间',
    cycleDevChange: '设备更换周期',
    numDevChange: '设备更换次数',
    devModel: '设备型号',
    userMobileArea: '手机号归属地',
    osUsernum: '操作系统',
    devVersion: '手机版本',
    avgTimeLogin: '平均在线时长',
    psChannelCount: '渠道',
    psAdressCount: '地址',
    psBkcodeCount: '银行编码',
    psIdtfnoCount: '身份编码',
    serviceInvokeMonitor: '服务成功率',
    serviceErrorInfo: '服务错误信息',
    taskException: '任务异常',
    h5UrlUsersCount: '用户数量统计',
    behaviorAnalysis: '行为分析',
    pageAnalysis: '页面分析',
    linkAnalysis: '链路分析',
    eventAnalysis: '事件分析',
    retainedAnalysis: '留存分析',
    hotspotAnalysis: '热点分析',
    equipmentAnalysis: '设备分析',
    templateManage: '模板管理',
    performanceAnalysis: '性能分析',
    crashLogs: '崩溃日志',
    networkTime: '网络时间',
    pageRenderingTime: '页面渲染时间',
    performanceIndicators: '性能指标',
    dictionaryManage: '字典管理',
    pageDictionary: '页面字典',
    systemDictionary: '系统字典',
    bankDictionary: '银行字典',
    tradeStatistics: '交易统计',
    depositsToBuy: '存款购买',
    accountService: '开户服务',
    balanceQuery: '余额查询'
  },
  // 商品详情模块
  productDetails: {
    request: '请输入商品名称/ID',
    productName: '商品名称/ID'
  },
  // 商品销售记录模块
  sellLog: {
    productName: '商品名称/ID',
    request: '请输入商品名称/ID'
  },
  // 流程模块
  myFlow: {
    flowName: '流程名称'
  },
  // 我的休假
  myHoliday: {
    pageTitle: '我的休假',
    holidayType: '休假类型'
  },
  // 我的考勤
  myCheck: {
    checkType: '考勤类型'
  },
  navbar: {
    logOut: '退出登录',
    personal: '个人中心'
  },
  login: {
    // title: 'TinyWeb 管理系统',
    title: '商场综合管理系统',
    logIn: '登录',
    username: '账号',
    password: '密码'
  },
  table: {
    search: '搜索',
    reset: '重置',
    add: '添加',
    edit: '编辑',
    export: '导出',
    delete: '删除',
    cancel: '取 消',
    confirm: '确 定',
    upload: '上 传',
    operation: '操作',
    detail: '详情',
    modify: '修改',
    query: '查询'
  },
  errorLog: {
    tips: '请点击右上角bug小图标',
    description: '现在的管理后台基本都是spa的形式了，它增强了用户体验，但同时也会增加页面出问题的可能性，可能一个小小的疏忽就导致整个页面的死锁。好在 Vue 官网提供了一个方法来捕获处理异常，你可以在其中进行错误处理或者异常上报。',
    documentation: '文档介绍'
  },
  excel: {
    export: '导出',
    selectedExport: '导出已选择项',
    placeholder: '请输入文件名(默认excel-list)'
  },
  tagsView: {
    close: '关闭',
    closeOthers: '关闭其它',
    closeAll: '关闭所有'
  },
  views: {
    date: '日期',
    bindBankNum: '绑卡银行数',
    num: '用户数量',
    nums: '注册用户数',
    cardNum: '绑卡数量',
    devChangeDay: '设备更换天数',
    devChangeNum: '设备更换次数',
    deviceModel: '设备型号',
    devVersion: '设备版本',
    android: 'Android总数',
    ios: 'iOS总数',
    other: '其他',
    province: '省',
    city: '市',
    area: '区',
    channel: '渠道',
    sex: '性别',
    weChat: '微信',
    qq: 'QQ',
    app: 'APP',
    applet: '小程序',
    public: '公众号',
    time: '时间',
    avgTime: '用户平均在线时长',
    bankNo: '银行编号',
    registTime: '首次注册日期',
    lastLoginTime: '最后登入日期',
    ubaMsg: '对应指标',
    issuccess: '成功/失败',
    count: '计数',
    sumCuapam: '金额统计',
    crcycd: '币种',
    bkcode: '银行编码',
    idtfno: '身份编码',
    serviceName: '服务名称',
    invokeDay: '调用日期',
    successRate: '成功率',
    failureRate: '失败率',
    total: '总数量',
    success: '成功数量',
    fail: '失败数量',
    errorMsg: '错误信息',
    Num: '错误数量',
    method: '方法',
    params: '参数',
    exception: '异常',
    createTime: '创建时间',
    updateTime: '更新时间',
    diviceID: '设备Id',
    pageGuid: '流程Id',
    pageId: '页面id',
    Channel: '渠道',
    isJailbreak: '是否越狱',
    appVersion: 'App版本号',
    appResourceVersion: 'App资源版本号',
    latitude: '纬度',
    longitude: '经度',
    pageName: '页面名称',
    pageType: '页面类型',
    pageTime: '页面时间',
    appTime: 'App时间',
    system: '系统',
    systemVersion: '系统版本',
    errorType: '错误类型',
    root: '是否Root',
    mobile: '手机',
    mobileVersion: '手机版本',
    crashLogs: '崩溃日志',
    crashDate: '崩溃日期',
    userNum: '用户数量',
    avgStandTime: '用户平均停留时间',
    clickNum: '页面点击次数',
    jumpTimes: '跳转次数',
    pageJump: '页面跳转 次数 | 占比',
    deviceJump: '设备跳转 次数 | 占比',
    sumTimes: '停留总时长',
    avgTimes: '平均停留时长',
    pageViewTimes: '页面访问次数',
    pageViewPercent: '页面访问占比',
    deviceViewNum: '页面受访设备数',
    deviceViewPercent: '页面受访占比',
    towards: '走向',
    respone: '响应报文',
    leaveNum: '离开次数',
    leaveNumProportion: '离开率',
    man: '男用户数 | 占比',
    woman: '女用户数 | 占比',
    mystery: '未知用户数 | 占比',
    response: '返回报文',
    link: '链路',
    deviceNum: '设备数量',
    operation: '操作',
    templateName: '模板名称',
    templateInstructions: '模板说明',
    instructions: '说明',
    pageSelection: '页面选择',
    linkRelation: '链路关系',
    index: '序号',
    checkMsg: '查看报文',
    checkLog: '查看日志',
    codeType: '代码类型',
    code: '编码',
    codeName: '代码名称',
    codeDescription: '代码说明',
    codeSorting: '代码排序',
    LegalPersonCode: '法人代号',
    bankCode: '银行代码',
    bankName: '银行名称',
    recordId: '记录ID',
    pageAddress: '页面URL',
    userId: '用户号',
    userName: '用户名称',
    statisticDate: '统计日期',
    status: '入驻状态',
    divtPageName: '页面名称/URL',
    eventDetails: '事件详情'
  },
  appView: {
    text: '日活跃设备统计',
    date: '日期',
    name: '设备量'
  },
  date: {
    start: '开始时间',
    end: '结束时间',
    history: '昨日统计',
    area: '选择地区',
    today: '今天',
    week: '最近一周',
    month: '最近一个月',
    months: '最近三个月'
  },
  user: {
    sex: '性别分布',
    age: '年龄分布',
    area: '注册地区分布',
    channel: '注册渠道分布',
    login: '登录时间分布',
    avgTime: '平均在线时长',
    mobileArea: '用户手机号归属地区'
  },
  equipment: {
    message: '更换信息统计',
    model: '型号分布',
    os: '操作系统'
  },
  business: {
    cardNum: '绑卡人数分布',
    bankNum: '绑卡银行分布',
    message: '用户信息统计'
  },
  control: {
    uiType: '控件ID',
    uiLabel: '控件标记',
    uiValue: '控件值',
    uiClickTimes: '控件点击次数'
  },
  retained: {
    initDate: '初始登入日期',
    sumDevice: '登入设备总数',
    oneDay: '第一天',
    twoDay: '第二天',
    threeDay: '第三天',
    fourDay: '第四天',
    fiveDay: '第五天',
    sixDay: '第六天',
    sevenDay: '第七天'
  },
  networkTime: {
    request: '请求名称/URL',
    filter: '筛选条件',
    requestUrl: '请求URL',
    requestName: '请求名称',
    requestGuid: '请求GUID',
    avgTime: '请求平均耗时',
    maxTime: '请求最长耗时',
    minTime: '请求最短耗时',
    requestDate: '请求日期'
  },
  pageRenderingTime: {
    pageGuid: '页面GUID',
    avgPageTime: '页面渲染平均时间',
    maxPageTime: '页面渲染最长时间',
    minPageTime: '页面渲染最短时间',
    avgCssTime: 'css加载平均时间',
    maxCssTime: 'css加载最长时间',
    minCssTime: 'css加载最短时间',
    avgJsTime: 'js加载平均时间',
    maxJsTime: 'js加载最长时间',
    minJsTime: 'js加载最短时间'
  },
  performanceIndicators: {
    fps: '平均帧率',
    memory: '平均内存占用',
    cpu: '平均CPU占用',
    rateFlow: '流量均值'
  },
  please: {
    pageName: '请输入页面名称',
    template: '请选择模板',
    serviceName: '请输入服务名称',
    errorMsg: '请输入错误信息',
    name: '请输入名称',
    instructions: '请输入说明',
    selection: '请选择',
    templateName: '请输入模板名称',
    userPhone: '请输入用户手机号',
    userName: '请输入用户名称',
    LegalPersonCode: '请输入法人代号',
    request: '请输入请求名称/URL'
  },
  prompt: {
    delete: '是否删除此模板?',
    prompt: '提示'
  },
  title: {
    errorMsgTable: '错误信息详情',
    errorMsgChart: '错误信息趋势图'
  },
  dictionary: {
    recordId: '请输入记录ID',
    pageAddress: '请输入页面URL',
    pageName: '请输入页面名称/URL',
    LegalPersonCode: '请输入法人代号',
    bankCode: '请输入银行代码',
    bankName: '请输入银行名称',
    codeType: '请输入代码类型',
    code: '请输入编码',
    codeName: '请输入代码名称',
    codeDescription: '请输入代码说明',
    codeSorting: '请输入代码排序'
  },
  urlInformation: {
    links: '链路图',
    father: '父页面',
    child: '子页面'
  },
  transactions: {
    transactions: '交易笔数',
    amount: '交易金额',
    clinchNum: '成交笔数',
    clinchAmount: '成交金额',
    numSuccess: '交易成功笔数',
    failMoney: '失败金额',
    numFail: '交易失败笔数',
    successAmount: '交易成功金额',
    failAmount: '交易失败金额'
  },
  depositsToBuy: {
    platform: '交易统计_平台',
    channel: '交易统计_渠道',
    location: '交易统计_位置',
    bank: '交易统计_银行',
    user: '交易统计_用户',
    gather: '交易统计_汇总',
    area: '地区',
    userPhone: '用户手机'
  },
  accountService: {
    platform: '情况统计_平台',
    channel: '情况统计_渠道',
    location: '情况统计_位置',
    bank: '情况统计_银行',
    user: '情况统计_用户',
    gather: '情况统计_汇总',
    successfulAccount: '开户成功笔数',
    failedAccount: '开户失败笔数'
  },
  product: {
    dataSummary: '交易数据汇总统计',
    failureReason: '交易失败原因统计'
  }
};
