<script>
    let clazz = "";
    export { clazz as class }
</script>
<div class={"p-5 flex flex-col justify-center items-start gap-5 rounded-md " + clazz}>
    <slot/>
</div>