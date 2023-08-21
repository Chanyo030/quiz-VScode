<script>
import Footer from "../../../components/Footer.vue";
import Header from "../../../components/Header.vue";
export default {

    components: {
        Footer,
        Header,
    },

    data() {
        return {
            images: [],
            titleText:"新增題本",
        };
    },
    methods: {
        getImages(e) {
            const files = e.target.files;
            const reader = new FileReader();
            for (let i = 0; i < files.length; i++) {
                const file = files[i];

                reader.onload = (e) => {
                    this.images.push({
                        id: i,
                        url: e.target.result,
                    });
                };

                reader.readAsDataURL(file);
            }
        },
        goBack(){
            this.$router.push("/manage")
        }
    
    },
};
</script>

<template>
    <div class="sticky-footer">

        <Header v-model:secondTitle="titleText" @home="goBack"/>

        <div class="quizBook">
            <div class="photo">
                <input class="form-control" type="file" id="imgInput" @change="getImages" multiple>

                <div class="image-container">
                    <div class="imgDiv" v-for="image in images" :key="image.id">
                        <img :src="image.url" alt="Image" />
                    </div>
                </div>

            </div>


            <div class="input-group  mb-3" id="book">
                <button class="btn btn-outline-secondary" type="button">題本</button>
                <select class="form-select" id="inputGroupSelect03">
                    <option selected>選擇</option>
                    <option value="purple">purple</option>
                    <option value="black">black</option>
                </select>
            </div>
        </div>


        <Footer></Footer>

    </div>
</template>
  
<style lang="scss">
.quizBook {
    display: flex;
    justify-content: center;

    .photo {
        position: relative;
        top: 20px;
        right: 200px;


        #imgInput {
            width: 50%;
            position: relative;
            left: 2%;
            top: 2px;

        }

        .image-container {
            width: 700px;
            height: 400px;
            border: 2px solid black;
            overflow-x: auto;
            overflow-y: auto;
            display: flex;
            position: relative;
            left: 2%;
            top: 10px;
        }
    }

    .imgDiv {
        position: relative;
        top: 3px;
        left: 2px;

        .image-container img {

            width: 300px;
            height: 200px;
            object-fit: cover;
            margin: 10px;
            max-width: 10%
        }
    }

    #book {
        width: 300px;
        height: 20px;
        position: relative;
        top: 70px;
        right: 150px;
    }

}
</style>
  