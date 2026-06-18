// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
export default defineConfig({
	site: 'https://help.emkit.app',
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
			customCss: ['./src/styles/custom.css'],
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
						{ label: 'Installation', slug: 'getting-started/installation' },
						{ label: 'Tour the Interface', slug: 'getting-started/tour-the-interface' }
					],
				},
				{
					label: 'Guides',
					items: [
						{
							label: 'Your Team',
							items: [
								{ label: 'Overview', slug: 'guides/team' },
								{ label: 'Member Space', slug: 'guides/team/member-space' },
								{ label: 'Member Objectives', slug: 'guides/team/member-objectives' },
							]
						},
						{
							label: 'Notes',
							items: [
								{ label: 'Overview', slug: 'guides/notes' },
								{ label: 'One-on-One', slug: 'guides/notes/one-on-one' },
								{ label: 'Daily Meeting', slug: 'guides/notes/daily-meeting' },
								{ label: 'Custom Notes', slug: 'guides/notes/custom-notes' },
								{ label: 'Meeting Recording', slug: 'guides/notes/meeting-recording' },
							]
						},
						{ label: 'Work Log', slug: 'guides/work-log' },
						{ label: 'Issues', slug: 'guides/issues' },
						{ label: 'Feedbacks', slug: 'guides/feedbacks' },
						{
							label: 'Performance Reviews',
							items: [
								{ label: 'Overview', slug: 'guides/performance-reviews' },
								{ label: 'Review Periods', slug: 'guides/performance-reviews/review-periods' },
								{ label: 'Member Review', slug: 'guides/performance-reviews/member-review' },
								{ label: 'Performance Improvement Plan (PIP)', slug: 'guides/performance-reviews/pip' },
							]
						},
						{
							label: 'Career Path',
							items: [
								{ label: 'Overview', slug: 'guides/career-path' },
								{ label: 'Levels', slug: 'guides/career-path/levels' },
								{ label: 'Skills', slug: 'guides/career-path/skills' },
								{ label: 'Member Rating', slug: 'guides/career-path/member-rating' },
							]
						},
						{ label: 'Analytics', slug: 'guides/analytics' },
						{ label: 'Automations', slug: 'guides/automations' },
						{
							label: 'Integrations',
							items: [
								{ label: 'Overview', slug: 'guides/integrations' },
								{ label: 'GitHub', slug: 'guides/integrations/github' },
								{ label: 'Jira', slug: 'guides/integrations/jira' },
								{ label: 'Slack', slug: 'guides/integrations/slack' },
								{ label: 'Calendar', slug: 'guides/integrations/calendar' },
							]
						},
						{
							label: 'EM Copilot',
							items: [
								{ label: 'Overview', slug: 'guides/copilot' },
								{ label: 'Agents', slug: 'guides/copilot/agents' },
								{ label: 'Skills', slug: 'guides/copilot/skills' },
								{ label: 'Usage & Cost', slug: 'guides/copilot/usage-cost' },
							]
						},
						{ label: 'EM Kit CLI', slug: 'guides/emkit-cli' },
						{ label: 'EM Kit MCP', slug: 'guides/em-kit-mcp' },
						{ label: 'Data Storage', slug: 'guides/data-storage' }
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
