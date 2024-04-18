import { useEffect } from 'react';

declare global {
	interface Window {
		botpressWebChat: any;
	}
}

const Bot = () => {
	useEffect(() => {
		const botId = import.meta.env.VITE_BOTID;
		const clientId = import.meta.env.VITE_CLIENTID;
		const webhookId = import.meta.env.VITE_WEBHOOKID;

		const script = document.createElement('script');
		script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
		script.async = true;

		document.body.appendChild(script);

		script.onload = () => {
			window.botpressWebChat.init({
				botId: botId,
				clientId: clientId,
				hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
				messagingUrl: 'https://messaging.botpress.cloud',
				botName: 'Clara',
				webhookId: webhookId,
				lazySocket: true,
				useSessionStorage: true,
				enableConversationDeletion: true,
				hideWidget: true,
				disableAnimations: false,
				stylesheet: 'https://webchat-styler-css.botpress.app/prod/532519c5-4',
			});
			console.log('Botpress script loaded successfully');
		};

		script.onerror = error => {
			console.error('Error loading Botpress script:', error);
		};
	}, []);

	return <div id='webchat' />;
};

export default Bot;
