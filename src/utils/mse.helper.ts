const useFetchArrayBuffer = (url: string, bufferLoader: (ab: ArrayBuffer) => void) => {
	return () => {
		const xhr = new XMLHttpRequest();
		xhr.open('get', url);
		xhr.responseType = 'arraybuffer';
		xhr.onload = () => {
			bufferLoader(xhr.response);
			console.log('onload...');
		};
		xhr.send();
	};
};

const getBufferLoader = (sb: SourceBuffer) => sb.appendBuffer.bind(sb);

const useGetSourceBuffer = (ms: MediaSource) => ms.addSourceBuffer.bind(ms);

const addSourceBufferEventListener = (sb: SourceBuffer) => sb.addEventListener.bind(sb);

const useEndOfStreamCallBack = (video: HTMLMediaElement, ms: MediaSource) => () => {
	ms.endOfStream();
	video.play();
};

/**
 * @deprecated
 */
export const useMSE = (mimeCodec: string, url: string, video: HTMLMediaElement) => {
	const ms = new MediaSource();
	video.src = URL.createObjectURL(ms);
	const sb = useGetSourceBuffer(ms)(mimeCodec);
	const cb = useEndOfStreamCallBack(video, ms);
	addSourceBufferEventListener(sb)('updateend', cb);

	const t = useFetchArrayBuffer(url, getBufferLoader(useGetSourceBuffer(ms)(mimeCodec)));

	ms.addEventListener('sourceopen', t);
};
