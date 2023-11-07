<!DOCTYPE html>
<html>
<head>
	<title>Ukol 1 - Stranka 2</title>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">
	<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
</head>
<body>
	<?php
		if(isset($_GET['answer'])) {
			if($_GET['answer'] == 'yes') {
				?>
				<div class='alert alert-success'>
					Ano
				</div>
				<?php
			} else if($_GET['answer'] == 'no') {
				?>
				<div class='alert alert-danger'>
					Ne
				</div>
				<?php
			} 
			
			else {
				header("Location: index.php");	
			}
		} 
		
		else {
			header("Location: index.php");
		}
	?>
	
</body>

<script type="text/javascript">
	$(document).ready(function(){
		setTimeout(function() { 
	    	$('.alert').hide();
    	}, 5000);
	});
</script>

</html>