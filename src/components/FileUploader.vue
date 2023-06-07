<script setup>
import * as LR from "@uploadcare/blocks";
import { onMounted } from "vue";

LR.registerBlocks(LR);

onMounted(() => {
    document.documentElement.style.setProperty(
        "--public-key",
        import.meta.env.VITE_PUBLIC_KEY_UPLOADCARE
    );
});
</script>

<template>
    <lr-file-uploader-inline
        css-src="https://esm.sh/@uploadcare/blocks@0.22.3/web/file-uploader-regular.min.css"
        ctx-name="my-uploader"
        class="my-config"
    >
        <lr-data-output
            @lr-data-output="$emit('upload')"
            use-event
            hidden
            class="my-config"
        ></lr-data-output>
    </lr-file-uploader-inline>
</template>

<style>
.my-config {
    --cfg-pubkey: var(--public-key);
    --cfg-img-only: 0;
    --cfg-multiple: 0;
    --cfg-max-local-file-size-bytes: 5242880;
    --cfg-multiple-max: 1;
    --cfg-use-cloud-image-editor: 1;
    --cfg-source-list: "local, camera";
    --cfg-confirm-upload: 1;
    --cfg-show-empty-list: 1;
    --darkmode: 0;
    --h-accent: 0;
    --s-accent: 64%;
    --l-accent: 42%;
    --h-background: 0;
    --s-background: 0%;
    --l-background: 100%;
}
</style>
