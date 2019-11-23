<template >
    <div class="container">
        <div class="tine">
            <h2 style="color: gray;font-weight:initial">Myself</h2>
        </div>
        <div class="information">
            <div class="leftist"><!--信息栏左栏-->
                <dl>
                    <dd><p style="color:dimgray;font-size: 0.2rem;">{{username}}</p></dd>
                    <dd><p style="font-weight: initial;color: dimgray">{{student_id}}</p></dd>
                    <dd><p style="font-weight: lighter;color: dimgray">信誉度</p></dd>
                    <dd><a href="url"><p style="color: lightgray;font-size: smaller;font-weight: lighter">我的收藏</p> </a></dd>
                </dl>
            </div>
            <div class="rightist"><!--信息栏右边-->
                <div>
                    <img id="p1" src="..\img\picture.png"/>
                </div>
                    <span><img id="p2" src="..\img\address.png"/> </span>
                    <span>{{address}}</span>
            </div>
        </div>
        <div id="personages"><a href="url"><p style="color: dimgray;font-weight: lighter;font-size: 0.15rem">个人记录</p></a></div>
        <div id="bookshelf" style="height: 3.1rem;">
            <p style="color:dimgray;font-size: larger" >Bookshelf list</p>
            <!--此处为书架书记及照片，还没有做-->
        </div>
        <div id="pilot">
            <div><button>
                <div><img id="book" src="..\img\book.png"/></div>
                <div>找书</div>
            </button></div>
            <div><button>
                <div><img id="pen" src=""/> </div>
                <div>书圈</div>
            </button></div>
            <div><button>
                <div><img id="chat" src="..\img\chat.png"/></div>
                <div>消息</div>
            </button></div>
            <div><button>
                <div><img id="me" src=""/></div>
                <div>我的</div>
            </button></div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Myself",
        el: '.leftist',
        data: function() {
return {
            username: 'd',
            student_id:'dhhhhhhhhh',
            address:'3栋',

        };
}
    }

</script>

<style scoped>
    .container{
        display: flex;
        flex-direction: column;
        background-image: url('..\img\background.png');
        background-size: 3.75rem 7.67rem;
    }
    .tine{                      /*顶栏*/
        height:0.4rem;
        align-items: center;
    }
    .information {
        margin-top: 0.17rem;
        display: inline-flex;
        justify-content: space-around;
        justify-items: flex-start;
    }

    #bookshelf,#personages{
        display: inline-flex;

    }
    #pilot{         /*底栏*/
        border: 0.01rem solid lightgray;
        border-radius: 5%;
        display: inline-flex;
        justify-content: space-around;
        align-items: center;
        height: 0.6rem;
    }
    button{
        border: 0;
        color: cornflowerblue;
        background: none transparent scroll repeat 0% 0%;
    }
    button:hover{
        color: sandybrown;
    }
    #p1{
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
    }
    #p2{
        width: auto;
        height: auto;
    }
    #book{
        width: auto;
        height:auto;
    }
    #chat{
        width: 0.26rem;
        height: 0.24rem;
    }
    a{
        text-decoration: none;
    }


</style>