<script lang="ts">
    import "../app.css";
    import { onMount, afterUpdate } from "svelte";
    import GlobalLoading from "@/components/global/GlobalLoading.svelte";
    import GlobalProgressBar from "@/components/global/GlobalProgressBar.svelte";
    import Navigator from "@/components/Navigator.svelte";
    import Banner from "@/components/global/Banner.svelte";
	import { useSelectHTMLElementById } from '@/utils/dom.helper';
	import { ensure } from '@/functional/functor/either';
	import { compose } from 'ramda';
    import { showNavigator } from '@/global/navigator';
    import { BannerStatus, currentStatus } from '@/global/banner';

    let bannerStatus:BannerStatus | null = null;
    currentStatus.subscribe((val)=>bannerStatus=val);

	const selector = compose(useSelectHTMLElementById<HTMLElement>());

	onMount(() => {
		window.addEventListener('scroll', () => {
			const banner = ensure(selector('banner'))();
			if ( scrollY > banner.offsetHeight || !bannerStatus?.display ) {
				showNavigator.set(true);
			}else {
				showNavigator.set(false);
			}
		});
	});

    afterUpdate(()=>{
        if ( !bannerStatus?.display ){
            showNavigator.set(true);
        }else{
            showNavigator.set(false);
        }
    })
</script>

<Banner/>
<Navigator/>
<slot />
<GlobalLoading/>
<GlobalProgressBar/>