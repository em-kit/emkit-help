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
				light: './src/assets/logo.png',
				dark: './src/assets/logo.png',
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
					label: 'Guides',
					items: [
						{ label: 'One-on-One', slug: 'guides/one-on-one' },
						{ label: 'Daily Meeting Notes', slug: 'guides/daily-meeting-notes' },
						{
							label: 'Performance Reviews',
							items: [
								{ label: 'Overview', slug: 'guides/performance-reviews' },
								{ label: 'Review Periods', slug: 'guides/performance-reviews/review-periods' },
								{ label: 'Member Review', slug: 'guides/performance-reviews/member-review' }
							]
						},
						{ label: 'Work Log', slug: 'guides/work-log' },
						{ label: 'Tasks', slug: 'guides/tasks' },
						{ label: 'Feedbacks', slug: 'guides/feedbacks' },
						{ label: 'Analytics', slug: 'guides/analytics' }
					],
				},
				{
					label: 'Command Line Tool',
					items: [
						{ label: 'EM Kit CLI', slug: 'command-line-tool-emkit-cli' }
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
