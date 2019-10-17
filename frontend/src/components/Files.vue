<template>
  <div class="hello">
    <p>I love vue.</p>
    <br/>
    <p>Title</p>
    <input type="text" placeholder="Hello" v-model="title">
    <p>Content</p>
    <input type="text" placeholder="From the other side" v-model="content">
    <br><br>
    <input 
      type="submit" 
      value="Add" 
      @click="addFile({ title: title, content: content })" 
      :disabled="!title || !content">

    <hr/>
    <h3>Files on Database</h3>
    <p v-if="files.length === 0">No Files</p>
    <div class="file" v-for="(file, index) in files" :key="index">
        <p class="file-index">[{{index}}]</p>
        <p class="file-title" v-html="file.title"></p>
        <p class="file-content" v-html="file.content"></p>
        <input type="submit" @click="deleteFile(file.pk)" value="Delete" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: "Files",
  data() {
    return {
      title: "",
      content: "",
    };
  },
  computed: mapState({
    files: state => state.files.files
  }),
  methods: mapActions('files', [
    'addFile',
    'deleteFile'
  ]),
  created() {
    this.$store.dispatch('files/getFiles')
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
hr {
  max-width: 65%;
}
.file {
  margin: 0 auto;
  max-width: 30%;
  text-align: left;
  border-bottom: 1px solid #ccc;
  padding: 1rem;
}
.file-index {
  color: #ccc;
  font-size: 0.8rem;
  /* margin-bottom: 0; */
}
img {
  width: 250px;
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>
