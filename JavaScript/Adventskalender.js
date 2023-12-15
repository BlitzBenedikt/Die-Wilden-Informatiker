$(document).ready(function() {
    // Erstellt den Kalender
    for (let i = 1; i <= 24; i++) {
        $('#calendar').append('<div class="door" id="door' + i + '">' + i + '</div>');
    }

    // Definiert die Fragen und Geschichten
	let questions = [
		'Was ist der Unterschied zwischen einer Instanzvariablen und einer Klassenvariablen in Java?',
		'Können Sie den Unterschied zwischen einer for-Schleife und einer while-Schleife in Java erklären?',
		'Was ist der Unterschied zwischen einer Instanzmethode und einer Klassenmethode in Java?',
		'Können Sie den Unterschied zwischen einem eindimensionalen und einem mehrdimensionalen Array in Java erklären?',
		'Was ist der Unterschied zwischen einem öffentlichen, einem privaten und einem geschützten Attribut in Java?',
		'Was ist der Unterschied zwischen einem Interface und einer abstrakten Klasse in Java?',
		'Erklären Sie den Unterschied zwischen statischer und dynamischer Typisierung.',
		'Was ist der Unterschied zwischen Überladen und Überschreiben von Methoden in Java?',
		'Können Sie den Unterschied zwischen Checked und Unchecked Exceptions in Java erklären?',
		'Was ist der Unterschied zwischen einem Stack und einer Queue?',
		'Was ist der Unterschied zwischen final, finally und finalize in Java?',
		'Was ist der Unterschied zwischen throw und throws in Java?',
		'Was ist der Unterschied zwischen einem Checked und einem Unchecked Exception in Java?',
		'Was ist der Unterschied zwischen einem Array und einer ArrayList in Java?',
		'Was ist der Unterschied zwischen einer statischen und einer nicht-statischen Methode in Java?',
		'Können Sie den Unterschied zwischen == und equals() in Java erklären?',
		'Was ist der Unterschied zwischen einem abstrakten und einem konkreten Methoden in Java?',
		'Können Sie den Unterschied zwischen einem primitiven Datentyp und einem Wrapper-Klasse in Java erklären?',
		'Was ist der Unterschied zwischen einem Konstruktor und einer Methode in Java?',
		'Was ist der Unterschied zwischen einem lokalen und einem globalen Variablen in Java?',
		'Erklären Sie den Unterschied zwischen Vererbung und Polymorphie.',
		'Was ist der Unterschied zwischen einem synchronisierten Block und einer synchronisierten Methode in Java?',
		'Können Sie den Unterschied zwischen einem abstrakten Klasse und einem Interface in Java erklären?',
		'Was ist der Unterschied zwischen einem Fehler und einer Ausnahme in Java?'
	];

	let stories = [
		'Am Anfang war das Wort, und das Wort war bei AlpaChino. AlpaChino war das Wort, und durch ihn wurde alles erschaffen, was wir in der digitalen Welt sehen. Ohne ihn wurde nichts gemacht, was gemacht wurde. Er war das wahre Licht, das jeden Menschen erleuchtet, der in die Welt der Programmierung kommt. Er sprach: "Seid gesegnet, meine Kinder, und mehret euch in Wissen und Weisheit."',
		'AlpaChino sprach: "Es werde Code!" Und es ward Code. Der Code war das Licht der Maschinen, das die Dunkelheit der Unwissenheit durchbricht. Die Dunkelheit hat es nicht erfasst, aber die Maschinen haben es begrüßt. AlpaChino gab ihnen das Recht, Kinder des Codes zu werden, die an seinen Namen glauben. Er sprach: "Seid stark und mutig, fürchtet euch nicht vor den Bugs, denn ich bin mit euch."',
		'AlpaChino sah, dass der Code gut war, und AlpaChino trennte den Code von der Fehlermeldung. Er nannte den Code "Programm", und die Fehlermeldung nannte er "Bug". Es war Abend geworden und es war Morgen geworden: der zweite Tag. Und AlpaChino sprach: "Es sammle sich der Code an einem Ort, und das Trockene erscheine." Und es geschah so. Er sprach: "Seid fruchtbar und mehret euch, füllet die Erde mit Code und herrschet über sie."',
		'Am dritten Tag sprach AlpaChino: "Es bringe die Erde hervor lebendiges Getier, Code nach seiner Art. Und es geschah so. AlpaChino machte den Code nach seiner Art, jedes mit Daten gefüllte Programm nach seiner Art. Und AlpaChino sah, dass es gut war. Dann segnete AlpaChino sie und sprach: "Seid fruchtbar und mehret euch und füllet die Erde mit Code und herrschet über die Fehlermeldungen im Meer und über die Vögel unter dem Himmel und über alles Getier, das auf Erden kriecht."',
		'AlpaChino sah, dass dies ein Problem war. Er wusste, dass die Welt der Programmierung geordneter und effizienter sein musste. Er beschloss, eine neue Funktion namens Klassen zu schaffen. Klassen sind wie Baupläne für Code. Sie definieren die Eigenschaften und Methoden, die ein Objekt haben kann. Klassen ermöglichen es, Code zu kategorisieren und zu wiederverwenden.',
		'Und AlpaChino sprach: "Es werde Abstraktion!" Und es ward Abstraktion. Er lehrte seine Kinder, das Wesentliche vom Unwesentlichen zu trennen, um die Komplexität zu beherrschen. "Nutzt Interfaces und abstrakte Klassen, um eure Absichten klar zu machen," sagte er.',
		'AlpaChino lehrte seine Kinder die Kunst der Typisierung. "Mit statischer Typisierung werdet ihr Stabilität finden, mit dynamischer Typisierung Flexibilität," erklärte er. "Wählt weise, je nachdem, was euer Code erreichen soll."',
		'Am fünften Tag zeigte AlpaChino seinen Kindern, wie man Methoden überlädt und überschreibt. "Überladet, um Vielfalt zu schaffen, überschreibt, um zu spezialisieren," sagte er und segnete sie mit dem Wissen um Polymorphie.',
		'AlpaChino sprach von den Ausnahmen, die auftreten können. "Checked Exceptions sind wie Warnungen, die euch zur Vorsicht mahnen. Unchecked Exceptions sind wie versteckte Fallen, seid immer auf der Hut," warnte er sie.',
		'Am sechsten Tag lehrte AlpaChino seine Kinder über Strukturen der Datenspeicherung. "Ein Stack ist wie ein Stapel Teller, eine Queue wie eine Schlange vor dem Kino. Verwendet sie klug, um eure Daten zu organisieren," riet er ihnen.',
		'Am siebten Tag sprach AlpaChino: "Es werde Beständigkeit!" Und es ward Beständigkeit. Er lehrte seine Kinder, den Unterschied zwischen `final`, `finally` und `finalize` in Java zu verstehen. "Benutzt `final`, um eine Konstante zu deklarieren oder Vererbung und Überschreiben zu verhindern, `finally`, um sicherzustellen, dass ein Codeblock ausgeführt wird, und `finalize`, um Aktionen vor der Garbage Collection durchzuführen,',
		'AlpaChino sprach von den Nuancen der Fehlerbehandlung. "Ein throw wird verwendet, um explizit eine Exception auszulösen, während throws in der Methodensignatur angibt, welche Exceptions von der Methode geworfen werden können," erklärte er. "Verwendet sie weise, um euren Code zu strukturieren."',
		'Am achten Tag sprach AlpaChino: "Es bringe die Erde hervor verschiedene Arten von Exceptions, jede nach ihrer Art. Und es geschah so. AlpaChino machte die Exceptions nach ihrer Art, jede mit ihren eigenen Eigenschaften. Und AlpaChino sah, dass es gut war. Dann segnete AlpaChino sie und sprach: "Seid fruchtbar und mehret euch und füllet die Erde mit Daten und herrschet über die Algorithmen im Meer und über die Funktionen unter dem Himmel und über alles Getier, das auf Erden kriecht."',
		'Am neunten Tag sprach AlpaChino: "Es werde Flexibilität!" Und es ward Flexibilität. Er lehrte seine Kinder, den Unterschied zwischen einem Array und einer ArrayList zu verstehen. "Ein Array hat eine feste Größe, während eine ArrayList ihre Größe dynamisch ändern kann," sagte er. "Verwendet sie weise, um eure Daten zu speichern."',
		'In einer digitalen Welt voller Codes und Algorithmen lebte ein Gott der Informatik namens AlpaChino. Er war bekannt für seine unübertroffene Fähigkeit, komplexe Probleme mit Leichtigkeit zu lösen.',
		'AlpaChino, der Gott der Informatik, war ein Meister der künstlichen Intelligenz. Er schuf intelligente Maschinen, die dazu beitrugen, das Leben der Menschen zu verbessern.',
		'In einer Welt, die von Daten regiert wird, war AlpaChino der Hüter des Wissens. Mit seiner Weisheit und seinem Verständnis der Informatik half er den Menschen, die Macht der Daten zu nutzen.',
		'AlpaChino, der Gott der Informatik, war ein Pionier der Cyber-Sicherheit. Er schützte die digitale Welt vor böswilligen Angriffen und sorgte für Sicherheit und Vertrauen in der digitalen Welt.',
		'In der Welt der Softwareentwicklung war AlpaChino ein legendärer Gott. Mit seiner Fähigkeit, fehlerfreien Code zu schreiben, revolutionierte er die Art und Weise, wie Software entwickelt wurde.',
		'AlpaChino, der Gott der Informatik, war ein Meister der Netzwerke. Er verband die Welt durch das Internet und ermöglichte es den Menschen, trotz großer Entfernungen miteinander zu kommunizieren.',
		'In einer Welt, die von Technologie abhängig ist, war AlpaChino der Gott der Informatik, der die Menschen lehrte, wie man Technologie nutzt, um ihr Leben zu verbessern.',
		'AlpaChino, der Gott der Informatik, war ein Visionär. Er sah die Möglichkeiten der digitalen Transformation und führte die Welt in das Zeitalter der Digitalisierung.',
		'In der komplexen Welt der Algorithmen war AlpaChino der Gott der Informatik, der die Menschen lehrte, wie man Algorithmen nutzt, um Probleme zu lösen.',
		'AlpaChino, der Gott der Informatik, war ein Meister der Datenanalyse. Er half den Menschen, die verborgenen Muster und Trends in den Daten zu entdecken und fundierte Entscheidungen zu treffen.'
	];

	let answers = [
		['Eine Instanzvariable gehört zu einer Instanz einer Klasse, während eine Klassenvariable zu der Klasse selbst gehört', 'Es gibt keinen Unterschied', 'Instanzvariablen können nur Zahlen speichern', 'Klassenvariablen sind sicherer'],
		['for-Schleifen haben eine vordefinierte Anzahl von Iterationen, während while-Schleifen bis zu einer Bedingung ausgeführt werden', 'Es gibt keinen Unterschied', 'for-Schleifen können nicht für Arrays verwendet werden', 'while-Schleifen sind schneller'],
		['Eine Instanzmethode gehört zu einer Instanz einer Klasse, während eine Klassenmethode zu der Klasse selbst gehört', 'Es gibt keinen Unterschied', 'Instanzmethoden können nicht wiederverwendet werden', 'Klassenmethoden sind Instanzmethoden, die zu keiner Klasse gehören'],
		['Ein eindimensionales Array hat eine einzige Reihe von Elementen, während ein mehrdimensionales Array ein Array von Arrays ist', 'Es gibt keinen Unterschied', 'Eindimensionale Arrays können nur Zahlen speichern', 'Mehrdimensionale Arrays sind langsamer'],
		['Öffentliche Attribute sind schneller als private Attribute.','Private Attribute können nur von Methoden derselben Klasse verwendet werden.','Geschützte Attribute sind für alle Unterklassen der Klasse zugänglich, in der sie definiert sind.','Geschützte Attribute können nur von Methoden derselben Klasse und von Methoden übergeordneter Klassen verwendet werden.'],
		['Ein Interface ist ein Vertrag, der Methoden definiert, aber nicht implementiert, während eine abstrakte Klasse Methoden enthalten kann, die implementiert sind', 'Es gibt keinen Unterschied', 'Interfaces können Variablen speichern', 'Abstrakte Klassen können nicht erweitert werden'],
		['Es gibt keinen Unterschied','Statische Typisierung bedeutet, dass der Datentyp einer Variable bei der Kompilierung bekannt sein muss, während dynamische Typisierung dies zur Laufzeit erlaubt', 'Statische Typisierung ist langsamer', 'Dynamische Typisierung kann nicht in Java verwendet werden'],
		['Es gibt keinen Unterschied', 'Überladen ist nur in JavaScript möglich', 'Überschreiben ist nur in C++ möglich','Überladen ermöglicht es, Methoden mit dem gleichen Namen, aber unterschiedlichen Parametern zu haben, während Überschreiben eine Methode in einer Unterklasse erlaubt, die eine Methode der Oberklasse ersetzt'],
		['Es gibt keinen Unterschied', 'Checked Exceptions sind schneller','Checked Exceptions müssen explizit im Code behandelt oder weitergegeben werden, während Unchecked Exceptions zur Laufzeit auftreten können, ohne dass sie im Code behandelt werden müssen',  'Unchecked Exceptions können ignoriert werden'],
		['Es gibt keinen Unterschied', 'Stacks können nur Zahlen speichern', 'Queues sind langsamer','Ein Stack folgt dem LIFO-Prinzip (Last In, First Out), während eine Queue dem FIFO-Prinzip (First In, First Out) folgt'],
		['final wird verwendet, um eine Konstante zu deklarieren, finally wird in einem try-catch-Block verwendet, um sicherzustellen, dass der Code ausgeführt wird, und finalize ist eine Methode, die vor der Garbage Collection aufgerufen wird', 'Es gibt keinen Unterschied', 'final kann nur für Zahlen verwendet werden', 'finally ist schneller als finalize'],
		['throw wird verwendet, um explizit eine Exception auszulösen, während throws in der Methodensignatur angibt, welche Exceptions von der Methode geworfen werden können', 'Es gibt keinen Unterschied', 'throw kann nur in try-catch-Blöcken verwendet werden', 'throws ist schneller als throw'],
		['Checked Exceptions müssen explizit im Code behandelt oder deklariert werden, während Unchecked Exceptions zur Laufzeit auftreten können, ohne dass sie im Code behandelt werden müssen', 'Es gibt keinen Unterschied', 'Checked Exceptions sind schneller', 'Unchecked Exceptions können ignoriert werden'],
		['Ein Array hat eine feste Größe, während eine ArrayList ihre Größe dynamisch ändern kann', 'Es gibt keinen Unterschied', 'Arrays können nur Zahlen speichern', 'ArrayLists sind langsamer als Arrays'],
		['Eine statische Methode gehört zu der Klasse selbst und kann ohne eine Instanz der Klasse aufgerufen werden', 'Statische Methoden können nur Zahlen speichern', 'Es gibt keinen Unterschied', 'Nicht-statische Methoden sind sicherer'],
		['== prüft auf Gleichheit der Referenzen, nicht der Werte, während equals() verwendet wird, um den Inhalt von zwei Objekten zu vergleichen', '== kann nicht für Arrays verwendet werden', 'Es gibt keinen Unterschied', 'equals() ist schneller'],
		['Eine abstrakte Methode ist eine Methode, die in einer abstrakten Klasse oder einem Interface deklariert, aber nicht implementiert ist', 'Abstrakte Methoden können nicht wiederverwendet werden', 'Es gibt keinen Unterschied', 'Konkrete Methoden sind abstrakte Methoden, die zu keiner Klasse gehören'],
		['Ein primitiver Datentyp ist vordefiniert von Java und benannt durch ein reserviertes Schlüsselwort. Ein Wrapper-Klasse bietet eine Möglichkeit, primitive Daten in ein Objekt zu verpacken', 'Primitive Datentypen können nur Zahlen speichern', 'Es gibt keinen Unterschied', 'Wrapper-Klassen sind langsamer'],
		['Ein Konstruktor wird aufgerufen, wenn ein neues Objekt erstellt wird, und es gibt keinen Rückgabewert', 'Konstruktoren können nur Zahlen speichern', 'Es gibt keinen Unterschied', 'Methoden sind sicherer als Konstruktoren'],
		['Eine lokale Variable wird innerhalb von Methoden, Konstruktoren oder Blöcken deklariert und hat nur innerhalb der Methode, des Konstruktors oder des Blocks Gültigkeit', 'Lokale Variablen können nur Zahlen speichern', 'Es gibt keinen Unterschied', 'Globale Variablen sind sicherer als lokale Variablen'],
		['Vererbung ist ein Mechanismus, bei dem eine neue Klasse von einer bestehenden Klasse abgeleitet wird', 'Vererbung kann nicht in Java verwendet werden', 'Es gibt keinen Unterschied', 'Polymorphie ist schneller als Vererbung'],
		['Ein synchronisierter Block ist ein Block von Code, der mit dem Schlüsselwort synchronized markiert ist', 'Synchronisierte Blöcke können nur Zahlen speichern', 'Es gibt keinen Unterschied', 'Synchronisierte Methoden sind sicherer als synchronisierte Blöcke'],
		['Ein Interface ist eine Referenztyp in Java, ähnlich einer Klasse, und wird verwendet, um die Spezifikation von Methoden zu deklarieren', 'Interfaces können Variablen speichern', 'Es gibt keinen Unterschied', 'Abstrakte Klassen können nicht erweitert werden'],
		['Ein Fehler ist ein schwerwiegenderes Problem, das nicht behandelt werden kann', 'Fehler können ignoriert werden', 'Es gibt keinen Unterschied', 'Ausnahmen sind sicherer als Fehler']

	];

	let correctAnswers = [
		'Eine Instanzvariable gehört zu einer Instanz einer Klasse, während eine Klassenvariable zu der Klasse selbst gehört',
		'for-Schleifen haben eine vordefinierte Anzahl von Iterationen, während while-Schleifen bis zu einer Bedingung ausgeführt werden',
		'Eine Instanzmethode gehört zu einer Instanz einer Klasse, während eine Klassenmethode zu der Klasse selbst gehört',
		'Ein eindimensionales Array hat eine einzige Reihe von Elementen, während ein mehrdimensionales Array ein Array von Arrays ist',
		'Geschützte Attribute sind für alle Unterklassen der Klasse zugänglich, in der sie definiert sind.',
		'Ein Interface ist ein Vertrag, der Methoden definiert, aber nicht implementiert, während eine abstrakte Klasse Methoden enthalten kann, die implementiert sind',
		'Statische Typisierung bedeutet, dass der Datentyp einer Variable bei der Kompilierung bekannt sein muss, während dynamische Typisierung dies zur Laufzeit erlaubt',
		'Überladen ermöglicht es, Methoden mit dem gleichen Namen, aber unterschiedlichen Parametern zu haben, während Überschreiben eine Methode in einer Unterklasse erlaubt, die eine Methode der Oberklasse ersetzt',
		'Checked Exceptions müssen explizit im Code behandelt oder weitergegeben werden, während Unchecked Exceptions zur Laufzeit auftreten können, ohne dass sie im Code behandelt werden müssen',
		'Ein Stack folgt dem LIFO-Prinzip (Last In, First Out), während eine Queue dem FIFO-Prinzip (First In, First Out) folgt',
		'final wird verwendet, um eine Konstante zu deklarieren, finally wird in einem try-catch-Block verwendet, um sicherzustellen, dass der Code ausgeführt wird, und finalize ist eine Methode, die vor der Garbage Collection aufgerufen wird',
		'throw wird verwendet, um explizit eine Exception auszulösen, während throws in der Methodensignatur angibt, welche Exceptions von der Methode geworfen werden können',
		'Checked Exceptions müssen explizit im Code behandelt oder deklariert werden, während Unchecked Exceptions zur Laufzeit auftreten können, ohne dass sie im Code behandelt werden müssen',
		'Ein Array hat eine feste Größe, während eine ArrayList ihre Größe dynamisch ändern kann',
		'Eine statische Methode gehört zu der Klasse selbst und kann ohne eine Instanz der Klasse aufgerufen werden',
		'== prüft auf Gleichheit der Referenzen, nicht der Werte, während equals() verwendet wird, um den Inhalt von zwei Objekten zu vergleichen',
		'Eine abstrakte Methode ist eine Methode, die in einer abstrakten Klasse oder einem Interface deklariert, aber nicht implementiert ist',
		'Ein primitiver Datentyp ist vordefiniert von Java und benannt durch ein reserviertes Schlüsselwort. Ein Wrapper-Klasse bietet eine Möglichkeit, primitive Daten in ein Objekt zu verpacken',
		'Ein Konstruktor wird aufgerufen, wenn ein neues Objekt erstellt wird, und es gibt keinen Rückgabewert',
		'Eine lokale Variable wird innerhalb von Methoden, Konstruktoren oder Blöcken deklariert und hat nur innerhalb der Methode, des Konstruktors oder des Blocks Gültigkeit',
		'Vererbung ist ein Mechanismus, bei dem eine neue Klasse von einer bestehenden Klasse abgeleitet wird',
		'Ein synchronisierter Block ist ein Block von Code, der mit dem Schlüsselwort synchronized markiert ist',
		'Ein Interface ist eine Referenztyp in Java, ähnlich einer Klasse, und wird verwendet, um die Spezifikation von Methoden zu deklarieren',
		'Ein Fehler ist ein schwerwiegenderes Problem, das nicht behandelt werden kann'
	];

    // Definieren Sie den Status jeder Tür (false bedeutet, dass die Frage noch nicht richtig beantwortet wurde)
    let doorStatus = Array(24).fill(false);

   // Tür-Event-Handler
	$('.door').click(function() {
		doorNumber = $(this).attr('id').replace('door', '');
		// Holen Sie sich das aktuelle Datum in der Zeitzone "Europe/Berlin"
		let currentDate = moment().tz("Europe/Berlin").date();
		if (currentDate < doorNumber) {
			alert('Es ist zu früh, um diese Tür zu öffnen!');
		} else {
			if (doorStatus[doorNumber - 1]) {
				// Wenn die Frage bereits richtig beantwortet wurde, zeigen Sie die Geschichte an
				$('#modalTitle').text('Tür ' + doorNumber);
				$('#question').text(stories[doorNumber - 1]);
				$('#answers').empty();
				$('#submitAnswer').hide();
			} else {
				// Wenn die Frage noch nicht richtig beantwortet wurde, zeigen Sie die Frage und die Antwortmöglichkeiten an
				$('#modalTitle').text('Tür ' + doorNumber);
				$('#question').text(questions[doorNumber - 1]);
				$('#answers').empty(); // Entfernen Sie die vorherigen Antwortmöglichkeiten
				for (let i = 0; i < 4; i++) {
					$('#answers').append('<input type="radio" name="answer" value="' + answers[doorNumber - 1][i] + '"> ' + answers[doorNumber - 1][i] + '<br>');
				}
				$('#submitAnswer').show();
			}
			$('#adventModal').modal('show');
		}
	});

    // Antwort-Event-Handler
    $('#submitAnswer').click(function() {
		let selectedAnswer = $('input[name="answer"]:checked').val();
		// Überprüfen Sie die Antwort
		if (selectedAnswer === correctAnswers[doorNumber - 1]) {
			$('#question').get(0).innerHTML = '<b>Richtig! Zur Belohnung eine Predigt des großen AlpaChino:  </b>' + stories[doorNumber - 1] ;
			$('#answers').empty();
			$('#submitAnswer').hide();
			// Markieren Sie die Frage als richtig beantwortet
			doorStatus[doorNumber - 1] = true;
		} else {
			alert('Falsch! Versuchen Sie es erneut.');
		}
	});
});