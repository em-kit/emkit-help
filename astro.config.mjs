// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import './src/styles/custom.css';

export default defineConfig({
	site: 'https://help.emkit.com',
	vite: {
		ssr: {
			external: ['prismjs'],
		},
	},
	integrations: [
		starlight({
			components: {
				PageFrame: './src/components/PageFrame.astro',
			},
			title: 'Help Center',
			logo: {
				light: './src/assets/logo.svg',
				dark: './src/assets/logo-dark.svg',
			},
			social: [
				{ icon: 'youtube', label: 'Youtube', href: 'https://www.youtube.com/@emkit' }
			],
			favicon: 'favicon.ico',
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Welcome', slug: 'index' },
						{ label: 'What is EM Kit?', slug: 'getting-started/what-is-emkit' },
						{ label: 'Configure your team', slug: 'getting-started/configure-team' },
						{ label: 'Tour the Interface', slug: 'getting-started/tour-the-interface' }
					],
				},
				
				{
					label: 'Terms & Policy',
					items: [
						{ label: 'Privacy Policy', slug: 'terms-policy/privacy-policy' },
						{ label: 'Terms of Service', slug: 'terms-policy/terms-of-service' },
					],
				}
			],
		}),
	],
});
