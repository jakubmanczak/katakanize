import { config } from './config';

export const chartableSets = ['Universal'];
export const chartableSelection = 0;

export function handleTransliteration(content: string) {
	let chartable = config.chartables[chartableSelection];
	Object.keys(chartable).forEach((e) => {
		let el = e as keyof typeof chartable;
		content = content.toLocaleLowerCase();
		chartable[el].forEach((elf) => {
			content = content.replaceAll(elf, el);
		});
	});
	return content;
}
