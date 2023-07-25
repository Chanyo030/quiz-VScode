<script></script>
<template>
    <div class="manageAddDiv">
        <div class="mb-3" id="manageAddDiv1">
            <label for="exampleFormControlInput1" class="form-label">編號</label>
            <input type="email" class="form-control" id="manageAddInput" placeholder="&emsp;&ensp;ID">

            <font-awesome-icon id="manageAddIcon" :icon="['fas', 'id-card-clip']" />
        </div>

        <div class="mb-3" id="manageAddDiv2">
            <label for="exampleFormControlInput1" class="form-label">姓名</label>
            <input type="email" class="form-control" id="manageAddInput" placeholder="&emsp;&ensp;Name">

            <font-awesome-icon id="manageAddIcon" :icon="['fas', 'user']" />
        </div>

        <div class="mb-3" id="manageAddDiv3">
            <label for="exampleFormControlInput1" class="form-label">密碼</label>
            <input type="email" class="form-control" id="manageAddInput" placeholder="&emsp;&ensp;∗∗∗∗∗∗∗∗∗">

            <font-awesome-icon id="manageAddIcon" :icon="['fas', 'lock']" />

        </div>

        <div class="mb-3" id="manageAddDiv4">
            <label for="exampleFormControlInput1" class="form-label">確認密碼</label>
            <input type="email" class="form-control" id="manageAddInput">

            <font-awesome-icon id="manageAddIcon" :icon="['fas', 'lock']" />

        </div>

    </div>
</template>
<style lang="scss">
.manageAddDiv {
    width: 50ex;
    height: 325px;
    position: relative;
    margin: auto;
}

#manageAddDiv2 {
    position: relative;
    bottom: 30px;
}

#manageAddDiv3 {
    position: relative;
    bottom: 60px;
}

#manageAddDiv4 {
    position: relative;
    bottom: 90px;
}

.manageAddAndUpdateBtnDiv {
    position: relative;
    bottom: 60px;
    display: flex;
    justify-content: center;

    #manageAddAndUpdateBtn1 {
        position: relative;
        right: 10px;
    }

    #manageAddAndUpdateBtn2 {
        position: relative;
        left: 10px;
    }
}

#manageAddInput {
    padding-left: 30px;
}

#manageAddIcon {
    position: relative;
    bottom: 30px;
    left: 12px;
}
</style>