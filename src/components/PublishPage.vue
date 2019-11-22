<template>
    <div id="body">
        <div id ="container">
            <div id ="choose" style="justify-content: space-between">
                <div> <button>返回</button></div><!--页面左上角的返回键，做不出来-->
                <div><button class="publish">发布</button></div>
            </div>
            <div id ="page">
                <div id="box">
                    <div id ="edit">
                        <textarea style="border: 0;width: 3.75rem"  placeholder="分享借用故事，说说借书过程中发生的有趣事吧。"></textarea>
                    </div>
                    <div id="add"> </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "PublishPage"
    }
</script>

<style scoped>
    #body {
        display: flex;
        justify-content: center;
    }

    #container {
        display: flex;
        flex-direction: column;
        width: 3.65rem;
    }
    #choose{
        width:3.65rem;
        height:0.5rem;
        border: 0.01rem solid black;
        display: inline-flex;
        justify-content: space-around;
        align-items: center;
    }

    #page{
        width: 3.65rem;
        height:5.57rem;
    }
    #box{
        padding-top: 0.05rem;
        width: 3.65rem;
        height:2.5rem;
        border: 0.01rem solid black;
        flex-direction: column;
        justify-content: center;
    }

    .publish{
        width: 0.5rem;
        height:0.3rem;
        border: 0.01rem solid black;
        border-radius: 10%;
        background: cornflowerblue;
        font-size: 0.15rem;
        color: white;
    }
    .publish:hover{
         background-color: dodgerblue;
     }
    #edit {
        padding-top: 0;
        width: 3.2rem;
        height:1.8rem;
        display: flex;
    }
    #add {
        border: 0.01rem solid;
        width: 0.5rem;
        height: 0.5rem;
        color: #ccc;
        transition: color .25s;
        position: relative;
        margin: 0.1rem;
    }

    #add::before{
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        width: 0.4rem;
        margin-left: -0.2rem;
        margin-top: -0.025rem;
        border-top: 0.05rem solid;
    }
    #add::after {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        height: 0.4rem;
        margin-left: -0.025rem;
        margin-top: -0.2rem;
        border-left: 0.05rem solid;
    }
    #add:hover {
        color: gray;
    }
    button{
        width: 0.5rem;
        height:0.3rem;
        border: 0;
        background: white;
    }

</style>