<script lang="ts">
	let h1: HTMLHeadingElement;
	function swapRotDirection() {
		h1?.classList.toggle('moused');
	}
</script>

<header>
	<h1 bind:this={h1} on:mouseenter={swapRotDirection}>Katakanize!</h1>
	<p>Convert Latin script to Katakana with ease!</p>
	<p>*Half-assedly with broken Japanese - based on phonetics.</p>
</header>
<main>
	<textarea placeholder="Enter your text here..." />
	<textarea placeholder="...And out comes katakana. ダン" readonly />
	<p class="mutedtext">
		made by
		<a href="https://manczak.net">jakubmanczak</a>
	</p>
</main>
