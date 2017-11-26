// FR TO EN

$(window).on('load',function() {
	$(".loader").fadeOut(900);
});

$(document).ready(function() {

	// Smooth scroll

	$('a[href^="#"]').click(function(){
		var the_id = $(this).attr("href");

		$('html, body').animate({
			scrollTop:$(the_id).offset().top
		}, 'slow');
		return false;
	});

	// Animate 
	$('.big-title h1').addClass('animated bounceInDown');
	$('.big-title h4').addClass('animated bounceInDown');


$('#translate').click(function() {
	var langue = $('#translate').text();

	if(langue == 'EN') {

	// NAVBAR
	$('#about').text('About me');
	$('#creas').text('Works and creations');
	$('#contact').text('Contact me');
	$('#translate').text('FR');

	// HEADER

	$('.big-title h4').html('FRONT-END DEVELOPMENT • GRAPH. CREATIONS<br><i class="fa fa-map-marker" aria-hidden="true"></i> BORDEAUX');

	//FOOTER
	$('.col-contact-left h3').text('My networks');
	$('.col-contact-right h3').text ('Frameworks & libraries used')

	//A PROPOS

	$('.container-qui h4').html('<h4>I am <span class="myname">Thomas Beaupertuis</span>, passionate about the web for some years now. The web integration and the graphic creation are the stuff that I master the best, and that is what I like a lot. I appreciate simple things, that is why this portfolio is so simple.<br> From <span class="tlse">Toulouse</span> to <span class="bdx">Bordeaux</span>, I aquired some skills and realized some projects. Outside the web, I like a lot photography, sports and skateboarding. Scroll to know a little more.</h4>')

	// CREAS

	$('#sitewebs').text('Websites');
	$('#creagraphs').text('Creations of all kinds');
	$('footer p').text('Thomas Beaupertuis • 2017 - 2150 (If we\'re still here)');

	// Snapchat

	$('.container-f-snap-head h1').text('Snapchat filters');
	$('.container-f-snap-head p').html('<p>I realized some snapchat filters in order to improve my skills on Photoshop while incrementing the content for the community of this social network.<br>It also allows me to share my creations to a public. </p>')

	$('.colonne h1').text("Column to the Girondins");
	$('.colonne p').text('Snapchat filter realized on Photoshop for the monument Column of the Girondins (Bordeaux, France) ');

	$('.miroir h1').text("Water mirror");
	$('.miroir p').text('Snapchat filter realized on Photoshop for the popular very frequented the water mirror (Bordeaux, France) ');

	$('.quais h1').text("Quays of Bordeaux");
	$('.quais p').text('Snapchat filter realized on Photoshop for the quays of Bordeaux, place very frequented by the tourist and inhabitants (Bordeaux, France) ');

	$('.university h1').text("University of Bordeaux");
	$('.university p').text('Snapchat filter realized on Photoshop for the University of Bordeaux (Bordeaux, France) ');

	$('.lhay h1').text("L'Haÿ les Roses");
	$('.lhay p').text('Snapchat filter realized on Photoshop for the city of Parisian Region l\' Haÿ les Roses(L\'Haÿ les Roses, France) ');

	$('.stmartial h1').text("Saint Martial d'Artenset ");
	$('.stmartial p').text('Snapchat filter realized on Photoshop for my home village, Saint Martial d\'Artenset (St Martial d\'Artenset, France) ');

	$('.ruestcath h1').text("St Catherine Street");
	$('.ruestcath p').text('Snapchat filter realized on Photoshop for the St Catherine street, longer shopping street in Europe (Bordeaux, France)');

	}
	else if(langue == 'FR') {

	// NAVBAR
	$('#about').text('A propos');
	$('#creas').text('Travaux et réalisations');
	$('#contact').text('Me contacter');
	$('#translate').text('EN');

	// HEADER

	$('.big-title h4').html('DEVELOPPEMENT FRONT-END • CREA. GRAPHIQUE<br><i class="fa fa-map-marker" aria-hidden="true"></i> BORDEAUX');

	//A PROPOS

	$('.container-qui h4').html('<h4> Je m\'appelle <span class="myname">Thomas Beaupertuis</span>, passionné par le web depuis quelques années déjà. L\'intégration et la création graphique sont ce que je maîtrise le mieux, et ce qui me plaît. J\'apprécie les choses simples, d\'où le design sobre de cet espace.<br><br>De <span class="tlse">Toulouse</span> à <span class="bdx">Bordeaux</span>, j\'ai acquis certaines compétences et réalisé certains projets. En dehors du web, j\'aime beaucoup la photographie, le sport et le skateboard. <b>Scroll</b> pour en savoir un peu plus.</h4>')

	// CREAS

	$('#sitewebs').text('Sites web');
	$('#creagraphs').text('Créations en tout genre');

	//FOOTER
	$('.col-contact-left h3').text('Mes réseaux');
	$('.col-contact-right h3').text ('Frameworks & bibliothèques utilisés')

	// Snapchat

	$('.container-f-snap-head h1').text('Filtres Snapchat');
	$('.container-f-snap-head p').html('<p>J\'ai réalisé des filtres Snapchat afin de m\'améliorer sous Photoshop tout en incrémentant le contenu de la communauté de ce réseau social. <br>Cela me permet également de faire connaître certaines de mes créations.</p>')

	$('.colonne h1').text("Colonne aux Girondins");
	$('.colonne p').text('Filtre Snapchat réalisé sous Photoshop pour le monument "Colonne des Girondins". (Bordeaux, France) ');

	$('.miroir h1').text("Le miroir d'eau");
	$('.miroir p').text('Filtre Snapchat réalisé sous Photoshop pour le lieu très fréquenté par les touristes et les habitants, le miroir d\'eau. (Bordeaux, France)');

	$('.quais h1').text("Quais de Bordeaux");
	$('.quais p').text('Filtre Snapchat réalisé sous Photoshop pour les quais de Bordeaux, lieu très fréquenté. (Bordeaux, France)');

	$('.university h1').text("Université de Bordeaux");
	$('.university p').text('Filtre Snapchat réalisé sous Photoshop pour l\'Université de Bordeaux. (Bordeaux, France)');

	$('.lhay h1').text("L'Haÿ les Roses");
	$('.lhay p').text('Filtre Snapchat réalisé sous Photoshop pour la ville de région Parisienne l\'Haÿ les roses. (L\'Haÿ les Roses, France)');

	$('.stmartial h1').text("Saint Martial d'Artenset");
	$('.stmartial p').text('Filtre Snapchat réalisé sous Photoshop pour mon village d\'origine, Saint Martial d\'Artenset. (St Martial d\'Artenset, France)');
	
	$('.ruestcath h1').text("Rue St Catherine");
	$('.ruestcath p').text('Filtre Snapchat réalisé sous Photoshop pour la Rue St Catherine, plus longue rue commerçant d\'Europe. (Bordeaux, France)');
	}

})

});
