$(document).ready(function(){
	const audioElement = new Audio();
    $('#options').on('change', function() {
        const selectedValue = $('#options').find(":selected").val();
        let imgSrc = '';
	let bcgSrc = '';
        let attribute = '';
        let health = '';
        let attack = '';
	let audioSrc = '';

	audioElement.pause();
        audioElement.currentTime = 0;
        switch(selectedValue) {
            case 'Gandalf The Gray':
                imgSrc = 'Images/Gandalf.png';
		bcgSrc = 'Images/Gandalf_bkg.png';
                attribute = 'Main Attribute: Inteligence';
                health = '30';
                attack = '10';
		audioSrc = 'Audio/Gandalf.mp3';
                break;
            case 'Aragorn The Second':
                imgSrc = 'Images/Aragorn.png';
		bcgSrc = 'Images/Aragorn_bkg.png';
                attribute = 'Main Attribute: Leadership';
                health = '50';
                attack = '25';
		audioSrc = 'Audio/Aragorn.mp3';
                break;
            case 'Legolas Greenleaf':
                imgSrc = 'Images/Legolas.png';
		bcgSrc = 'Images/Legolas_bkg.png';
                attribute = 'Main Attribute: Agility';
                health = '50';
                attack = '20';
		audioSrc = 'Audio/Legolas.mp3'
                break;
            case 'Gimli, son of Glóin':
                imgSrc = 'Images/Gimli.jpg';
		bcgSrc = 'Images/Gimli_bkg.png';
                attribute = 'Main Attribute: Strenght';
                health = '60';
                attack = '30';
		audioSrc = 'Audio/Gimli.mp3'
                break;
            case 'Frodo Baggins':
                imgSrc = 'Images/Frodo.jpg';
		bcgSrc = 'Images/Frodo_bkg.png';
                attribute = 'Main Attribute: Dexterity';
                health = '25';
                attack = '15';
		audioSrc = 'Audio/Frodo.mp3'
                break;
        }
	if (audioSrc) {
            audioElement.src = audioSrc;
            audioElement.play();
        }
        if (bcgSrc) {
    $('body').css({
        'background-image': `url(${bcgSrc})`,
        'background-size': 'cover',
	'height': '100vh',
        'background-position': 'center',
        'background-repeat': 'no-repeat'
    });        }
        $('#selectionValue').html(`
            <div style="text-align: center;">
                <p style="font-size: 24px; font-weight: bold;">${selectedValue}</p>
                <div style="display: flex; justify-content: center; align-items: center;">
                    <img src="${imgSrc}" alt="${selectedValue}" style="width: 25%; height: auto;">
                    <div style="margin-left: 20px;">
                        <p style="font-weight: bold;">${attribute}</p>
                        <p><strong>Health:</strong> ${health}</p>
                        <p><strong>Attack:</strong> ${attack}</p>
                    </div>
                </div>
            </div>
        `);
    });
});