import { config } from './config';

export function handleTransliteration(content: string) {
	Object.keys(config.chartable).forEach((e) => {
		let el = e as keyof typeof config.chartable;
		content = content.toLocaleLowerCase();
		config.chartable[el].forEach((elf) => {
			content = content.replaceAll(elf, el);
		});
	});
	return content;
}
