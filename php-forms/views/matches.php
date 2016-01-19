<h1>Possible Matches</h1>
<ul>
	<?php foreach($matches as $match): ?>
	<li>
		<!-- ?= echoes the result of the expression -->
		<!--htmlentities makes it plain text-->
		<?= htmlentities($match['primary_city']) ?>
		<?= htmlentities($match['state']) ?>
		<?= htmlentities($match['zip']) ?>
		<?= htmlentities($match['country']) ?>
	</li>
	<?php endforeach; ?>
</ul>