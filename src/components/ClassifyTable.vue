<script></script>
<template>
    <div id="quizBody">
        <div id="quizBody1">

            <div class="d-flex align-items-start" id="quizNavsDiv1">
                <div id="quizNavsDiv1-1">
                    <div class="nav flex-column " id="v-pills-tab" role="tablist" aria-orientation="vertical">

                        <RouterLink to="/studentIndex/purple" class="quizNavsBtn1"><font-awesome-icon
                                :icon="['fas', 'book']" style="color: rgb(136, 66, 136); font-size: 28pt;" /></RouterLink>

                        <RouterLink to="/studentIndex/black" class="quizNavsBtn2"><font-awesome-icon :icon="['fas', 'book']"
                                style="color: rgb(0, 0, 0); font-size: 28pt;" /></RouterLink>

                    </div>

                </div>

                <div class="tab-content quizNavsDiv2" id="v-pills-tabContent">

                    <RouterView />

                </div>

            </div>

        </div>
    </div>
</template>
<style lang="scss">
#quizBody {
    height: 500px;
    position: relative;

    #quizBody1 {
        position: absolute;


        #quizNavsDiv1-1 {
            width: 200px;
            height: 510px;
            border: 5px solid #b0eaff;
            position: relative;
            bottom: 5px;
            display: flex;
            justify-content: center;

            .quizNavsBtn1 {
                position: relative;
                top: 25px;
            }

            .quizNavsBtn2 {
                position: relative;
                top: 40px;
            }

            .quizNavsBtn3 {
                position: relative;
                top: 55px;
            }

        }

        .quizNavsDiv2 {
            position: relative;
            top: 20px;

        }
    }
}
</style>