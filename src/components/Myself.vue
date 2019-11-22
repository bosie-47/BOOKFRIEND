<template >
    <div class="container">
        <div class="tine">
            <span><button>返回</button></span>
            <span>Myself</span>
        </div>
        <div class="information">
            <div class="leftist"><!--信息栏左栏-->
                <dl>
                    <dd><h3>{{account}}</h3></dd>
                    <dd><h5>{{ID}}</h5></dd>
                    <dd><p>信誉度</p></dd>
                    <dd><p style="color: lightgray">我的收藏</p> </dd>
                </dl>
            </div>
            <div class="rightist"><!--信息栏右边-->
                <div id="picture">
                    <img v-bind：src="url"/>
                </div>
                <div>{{add}}</div>
            </div>
        </div>
        <div id="personages"><a href="url"><p>个人记录</p></a></div>
        <div id="bookshelf" style="height: 3rem;">
            <p>Bookshelf list</p>
            <!--此处为书架书记及照片，还没有做-->
        </div>
        <div id="pilot">
            <div><button>搜索</button></div>
            <div><button>一起写</button></div>
            <div><button>聊天</button></div>
            <div><button>我的</button></div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Myself",
        el: '.leftist',
        data: function() {
return {
            account: '家园工作室',
            ID:'54321',
            url:'',
            add:'3栋',

        };
}
    }

</script>

<style scoped>
    .container{
        display: flex;
        flex-direction: column;

    }
    .tine{                      /*顶栏*/
        height:0.4rem;
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
    }
    .information{
        height: 2.16rem;
        display: inline-flex;
        justify-content: space-around;
    }
    #bookshelf,#personages{
        display: inline-flex;

    }
    #pilot{         /*底栏*/
        border: 0.01rem solid lightgray;
        display: inline-flex;
        justify-content: space-around;
        align-items: center;
        height: 0.4rem;
    }
    button{
        border: 0;
        background: white
    }

</style>