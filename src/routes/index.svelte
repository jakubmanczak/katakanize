<script lang="ts">
	import { handleTransliteration, chartableSets, chartableSelection } from '../master';

	let h1: HTMLHeadingElement;
	let input: HTMLSpanElement;
	let output: HTMLSpanElement;
	let copyinput: HTMLInputElement;
	function swapRotDirection() {
		h1?.classList.toggle('moused');
	}

	function handleInput() {
		let transliteration: string = input.textContent ? input.textContent : '';
		transliteration = handleTransliteration(transliteration);
		output.textContent = transliteration;
		copyinput.value = transliteration;
	}
	function handleCopying() {
		copyinput.select();
		copyinput.setSelectionRange(0, 99999);
		navigator.clipboard.writeText(copyinput.value);
		alert('copied "' + copyinput.value + '"');
	}
</script>

<header>
	<h1 bind:this={h1} on:mouseenter={swapRotDirection}>Katakanize!</h1>
	<p>Convert Latin script to Katakana with ease!</p>
	<p>*Half-assedly with broken Japanese - based on phonetics.</p>
</header>
<main>
	<span bind:this={input} on:input={handleInput} contenteditable />
	<span bind:this={output} class="contentoutput" />
	<input bind:this={copyinput} type="text" style="display: none;" />
	<button on:click={handleCopying}>copy to clipboard</button>
	<p class="mutedtext">
		made by
		<a href="https://manczak.net">jakubmanczak</a>
	</p>
</main>
