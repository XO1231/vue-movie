<template>
  <div class="cityblock">
    <!-- <slot></slot> -->
    {{currentcitys}}
  </div>
</template>

<script>
export default {
  name: "cityblock",

  data() {
    return {};
  },
  props: ["currentcitys"],

  methods: {}
};
</script>

<style lang='scss' scoped>
.cityblock {
  margin-top: 20px;
  width: 90px;
  height: 30px;
  margin-right: 18px;
  text-align: center;
  line-height: 30px;
  font-size: 14px;
  background-color: #33363d;
  color: #ddd;
}
</style>
