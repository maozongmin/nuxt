<template>
    <div class="container">
        <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
        </el-pagination>
        <el-row :gutter="24" style="width: 100%;">
            <el-col :span="15">
                <div class="main">
                    <!--           <el-tabs v-model="type" @tab-click="handleTypeChange">
            <el-tab-pane label="精选" name="index"></el-tab-pane>
            <el-tab-pane label="最新发布" name="newest"></el-tab-pane>
            <el-tab-pane label="上升最快" name="dark-horse"></el-tab-pane>
          </el-tabs> -->
                    <div class="content-wrapper">
                        <div v-for="item in list" :key="item.id" class="content">
                            <img class="cover" :src="item.covers.length ? item.covers[0].url : ''" />
                            <div class="text">
                                <div class="title u-line-1 u-clickable" @click.native="toDetail(item.pageUrl)">
                                    {{ item.articleTitle }}
                                </div>
                                <div class="brief u-line-2">{{ item.summary }}</div>
                                <div class="info">
                                    <el-row>
                                        <el-col :span="12">
                                            <i class="el-icon-orange"></i>
                                            <span class="info-text">{{ item.gameName }}</span>
                                            <span class="info-text">{{ item.type | typeText }}</span>
                                        </el-col>
                                        <el-col :span="6">
                                            <i class="el-icon-user"></i>
                                            <span class="info-text info-text--limit u-line-1">
                                                {{ item.author }}
                                            </span>
                                        </el-col>
                                        <el-col :span="6" style="text-align: right;">
                                            <i class="el-icon-time"></i>
                                            <span class="info-text">{{ item.created }}</span>
                                        </el-col>
                                    </el-row>
                                </div>
                            </div>
                        </div>
                    </div>
                    <el-pagination style="margin-bottom:20px" layout="total, sizes, prev, pager, next, jumper" :hide-on-single-page="true" :total="total" :current-page="page" :page-size="10" :page-sizes="[10]" @current-change="handlePageChange" @size-change="handleSizeChange"></el-pagination>
                </div>
            </el-col>
            <!--       <el-col :span="9">
        <div class="side">
          <el-tabs value="hot">
            <el-tab-pane label="热门" name="hot"></el-tab-pane>
          </el-tabs>
          <div class="content-wrapper">
            <div v-for="item in list" :key="item.id" class="content">
              <img class="cover" :src="item.cover" />
              <div class="text">
                <div class="title u-line-2 u-clickable">{{ item.title }}</div>
                <span style="float: right;">{{ item.type | typeText }}</span>
                <div class="info">
                  <i class="el-icon-orange"></i>
                  <span class="info-text">{{ item.gameName }}</span>
                </div>
              </div>
            </div>
          </div>
          <el-tabs value="rank">
            <el-tab-pane label="排行榜" name="rank"></el-tab-pane>
          </el-tabs>
          <div v-for="(item, index) in list" :key="item.id" class="rank">
            <span class="rank-index" :style="index | rankColor">
              {{ index + 1 }}
            </span>
            <span class="rank-text u-line-1 u-clickable">{{ item.title }}</span>
          </div>
        </div>
      </el-col> -->
        </el-row>
    </div>
</template>

<script>
// function noOrNum(v) {
//   return v === undefined || /^\d+$/.test(v)
// }

// const types = ['index', 'newest', 'dark-horse']
export default {
    components: {},
    // validate({ params }) {
    //     return /^\d+$/.test(params.page)
    // },
    //watchQuery: ['type', 'page', 'size'],
    filters: {
        typeText(t) {
            // TODO: change
            if (t === 0) {
                return '图文'
            }
            return '视频'
        },
        rankColor(index) {
            switch (index) {
                case 0:
                    return 'background-color: #FD7E28;color: #fff;'
                case 1:
                    return 'background-color: #FD7E28;color: #fff;opacity:0.65;'
                case 2:
                    return 'background-color: #FD7E28;color: #fff;opacity:0.35;'
                default:
                    return ''
            }
        }
    },
    data() {
        return {
            page: parseInt(this.$route.params.page || 1)
        }
    },
    async asyncData({params,$axios}) {
        let param = {
            page:params.page,
            pageSize:10
        }
        // let {data:{data:{list,total}}} = await $axios.get('https://api.tgl.qq.com/open/static/content/list',{params:param});
        let res = {}
        res.data = {"code":0,"msg":"","data":{"total":20364,"list":[{"id":"10007012531313032","articleTitle":"上传高清、 无二维码","articleType":1,"gameName":"新活动测试游戏","created":"2019-11-27 11:54:32","author":"","summary":"上传高清、 无二维码","covers":[{"url":"https://itea-cdn.qq.com/file/tgl/20191127/2fc8ed6e7e5c2dd2ac1ec2148106b516.1574826854.c83d32b83b433cbf257e7c4144699191.686x385_52068.jpg","height":385,"width":686,"size":52068}],"pageUrl":"/t0100001258656516c94e.html"},{"id":"10007012531313028","articleTitle":"测试数据上传高清、无","articleType":0,"gameName":"新活动测试游戏","created":"2019-11-27 11:53:13","author":"","summary":"测试数据上传高清、无","covers":[{"url":"https://itea-cdn.qq.com/file/tgl/20191127/109a0ca3bc27f3e96597370d5c8cf03d.1574826789.c61be1669e64e7c9b0a35ecc43dde54e.686x385_205675.png","height":385,"width":686,"size":205675}],"pageUrl":"/t0100001258656514d2a2.html"},{"id":"10004012541313068","articleTitle":"ddddddddddddd","articleType":1,"gameName":"保卫萝卜3","created":"2019-11-28 15:06:44","author":"","summary":"ddddddddddddd","covers":[{"url":"https://itea-cdn.qq.com/file/tgl/20191128/109a0ca3bc27f3e96597370d5c8cf03d.1574924796.11568ab59ae658670ffe09eed8c49fb3.686x385_5729.png","height":385,"width":686,"size":5729}],"pageUrl":"/t01000012546565343d27.html"},{"id":"10004012541313067","articleTitle":"随便投一篇内容试试dddd","articleType":1,"gameName":"保卫萝卜3","created":"2019-11-28 14:51:39","author":"","summary":"随便投一篇内容试试随便投一篇内容试试","covers":[{"url":"https://itea-cdn.qq.com/file/tgl/20191128/109a0ca3bc27f3e96597370d5c8cf03d.1574923885.af18048a1e62fcec9311b0377b73382b.686x385_5729.png","height":385,"width":686,"size":5729}],"pageUrl":"/t01000012546565338f83.html"},{"id":"10007012531313020","articleTitle":"gfdh频发布到更多媒体哦","articleType":1,"gameName":"新活动测试游戏","created":"2019-11-27 11:24:25","author":"","summary":"gfdh频发布到更多媒体哦","covers":[{"url":"https://itea-cdn.qq.com/file/tgl/20191127/2fc8ed6e7e5c2dd2ac1ec2148106b516.1574825050.bf9c82fab904f29e5ac4b4ca9c94562f.686x385_52068.jpg","height":385,"width":686,"size":52068}],"pageUrl":"/t01000012536565102ce2.html"},{"id":"10007012531313052","articleTitle":"cs sj 测试推荐机会 支持","articleType":1,"gameName":"王者荣耀","created":"2019-11-27 15:00:03","author":"","summary":"cs sj 测试推荐机会 支持","covers":[{"url":"https://itea-cdn.qq.com/file/tgl/20191127/2fc8ed6e7e5c2dd2ac1ec2148106b516.1574837991.3b19c07f47db4da89f02e63bd5af332f.686x385_52068.jpg","height":385,"width":686,"size":52068}],"pageUrl":"/t010000125365652690a3.html"},{"id":"10007012531313059","articleTitle":"测试测试-获得更高收益与","articleType":1,"gameName":"王者荣耀","created":"2019-11-27 15:03:12","author":"","summary":"测试测试-获得更高收益与","covers":[{"url":"https://itea-cdn.qq.com/file/tgl/20191127/2fc8ed6e7e5c2dd2ac1ec2148106b516.1574838187.17a1b91e133c487ba4c51a803e5f2d56.686x385_52068.jpg","height":385,"width":686,"size":52068}],"pageUrl":"/t01000012536565293b32.html"},{"id":"10007012531313040","articleTitle":"测试数据-王者荣耀发发发","articleType":0,"gameName":"王者荣耀","created":"2019-11-27 14:56:10","author":"","summary":"测试数据-王者荣耀发发发","covers":[{"url":"https://itea-cdn.qq.com/file/tgl/20191127/109a0ca3bc27f3e96597370d5c8cf03d.1574837759.c8a68816eb2ba3c4a135f2c23b7aed76.686x385_205675.png","height":385,"width":686,"size":205675}],"pageUrl":"/t0100001253656520bf2c.html"},{"id":"10007012531313043","articleTitle":"测试数据-上传高清、无二维码","articleType":0,"gameName":"王者荣耀","created":"2019-11-27 14:56:39","author":"","summary":"测试数据-上传高清、无二维码","covers":[{"url":"https://itea-cdn.qq.com/file/tgl/20191127/109a0ca3bc27f3e96597370d5c8cf03d.1574837794.e70d693a1fd56eafb4ff2b1d810be169.686x385_205675.png","height":385,"width":686,"size":205675}],"pageUrl":"/t0100001253656521f693.html"},{"id":"10007012531313044","articleTitle":"测试数据-无黑边的封面图","articleType":0,"gameName":"王者荣耀","created":"2019-11-27 14:57:07","author":"","summary":"测试数据-无黑边的封面图","covers":[{"url":"https://itea-cdn.qq.com/file/tgl/20191127/109a0ca3bc27f3e96597370d5c8cf03d.1574837822.9fbc20f6834be9b7fa749afee175cf13.686x385_205675.png","height":385,"width":686,"size":205675}],"pageUrl":"/t0100001253656522025b.html"}]},"time":1576120397}
        let {data:{list,total}} = res.data;
        return {list,total}
    },
    methods: {
        // handleTypeChange({ name: type }) {
        //   this.$router.push({
        //     name: 'index',
        //     query: {
        //       ...this.$route.query,
        //       page: 1,
        //       type
        //     }
        //   })
        // },
        toDetail(url) {
            window.open(`${window.location.protocol}//tgl.qq.com${url}`)
        },
        handlePageChange(page) {
            console.log(page)
            this.$router.push({
                // path: `/list/${page}`
                name: 'list-page',
                params: {
                    page: page
                }
            })
        },
        handleSizeChange(size) {
            this.$router.push({
                path: `/list/1`
            })
        }
    },
    async mounted() {

    }
}
</script>

<style lang="scss" scoped>
.u-line-1 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.u-line-2 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.u-clickable {
    cursor: pointer;
}

.container {
    margin-top: 15px;
    .el-tabs {
        & /deep/ .el-tabs__header {
            .el-tabs__nav-wrap::after {
                background-color: #f1f1f1;
            }
            .el-tabs__active-bar {
                background-color: #FD7E28;
            }
            .el-tabs__item.is-active {
                color: #000;
            }
            .el-tabs__nav-scroll {
                margin-left: 24px;
            }
        }
    }
    .main {
        .content-wrapper {
            margin-left: 24px;
            margin-bottom: 24px;
            .content {
                padding: 24px 0;
                border-bottom: 1px solid #f1f1f1;
                position: relative;

                .cover {
                    width: 200px;
                    height: 113px;
                }
                .text {
                    position: absolute;
                    top: 24px;
                    bottom: 24px;
                    left: 200px+16px;
                    right: 0;

                    font-size: 14px;
                    font-weight: 400;
                    color: #888898;
                    .title {
                        font-size: 20px;
                        font-weight: 500;
                        color: #2e2e35;
                        margin-bottom: 10px;
                        display: inline-block;
                        overflow: hidden;
                        max-width: 100%;
                        &:hover {
                            box-shadow: 0 1px;
                        }
                    }
                    .brief {
                        margin-bottom: 15px;
                    }
                    .info {
                        .info-text {
                            display: inline-block;
                            line-height: 14px;
                            margin-left: 8px;
                            margin-right: 8px;
                            &.info-text--limit {
                                width: 75px;
                                margin-right: 0;
                            }
                        }
                    }
                }
            }
        }
        .el-pagination {
            text-align: center;
        }
    }
    .side {
        // padding-right: 24px;
        .content-wrapper {
            margin-left: 24px;
            margin-bottom: 24px;
            .content {
                padding: 24px 0;
                border-bottom: 1px solid #f1f1f1;
                position: relative;

                .cover {
                    width: 150px;
                    height: 85px;
                }
                .text {
                    position: absolute;
                    top: 24px;
                    bottom: 24px;
                    left: 150px+16px;
                    right: 0;

                    font-size: 14px;
                    font-weight: 400;
                    color: #888898;
                    .title {
                        font-size: 16px;
                        font-weight: 400;
                        color: #2e2e35;
                        margin-bottom: 23px;
                    }
                    .info {
                        .info-text {
                            line-height: 14px;
                            margin-left: 8px;
                        }
                    }
                }
            }
        }
        .rank {
            margin-left: 24px;
            margin-bottom: 24px;
            font-size: 16px;
            font-weight: 400;
            .rank-index {
                display: inline-block;
                background-color: #f1f1f1;
                line-height: 20px;
                width: 20px;
                text-align: center;
                color: #acacbd;
            }
            .rank-text {
                display: inline-block;
                width: 85%;
                line-height: 22px;
                color: #2e2e35;
                margin-left: 24px;
            }
        }
    }
}
</style>
