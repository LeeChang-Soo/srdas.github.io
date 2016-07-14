//ha valamelyik toredeket mar tartalmazza akkor nem adja hozza a linket
var linkToredekek = ['html-onl',
'a-rubix',
'html5-ed',
'ruwix',
'divtable',
'badhtml',
'htmlg',
'html-onl',
'htmlcodeeditor',
'htmltidy',
'wordhtml',
'html5tool'
];
/*
<a href="" target="_blank"></a>
<a href="" target="_blank" rel="nofollow"></a>
'<p></p>'
'<p><a href="" target="_blank"></a></p>'
'<p><a href="" title=""></a></p>'
*/
var linkOpciok = ['<p>Use <a href="http://divtable.com/">Div Table</a> for creating grid layout on websites because the traditional HTML tables are outdated and not responsive.</p>','<p><a href="http://divtable.com/">Div tables</a> are great to layout website sections on the page!</p>','<p>The tables on this website have been created with <a href="http://divtable.com/" rel="external nofollow">DivTable.com</a>. Please subscribe for a <a href="https://htmlg.com/html-editor/">HTML editor</a> membership to stop adding promotional messages to the documents.</p>','<p>Never forget to use the <a href="http://divtable.com/converter/">table to div converter</a> and the <a href="https://html-online.com/editor/">online HTML editor</a> to compose perfect articles for websites!</p>','<p>The free <a href="http://divtable.com/generator/">online div table generator</a> allows you to create nice grids for your websites. Please subsribe for a <a href="https://htmlg.com/" rel="external nofollow">html g</a> membership to stop adding promotional messages to the edited documents.</p>','<p>Learn the easiest way to <a href="https://how-to-solve-a-rubix-cube.com/">solve a Rubiks Cube</a> with the simple layer-by-layer method. Please subscirbe for a premium HTML editor membership to stop adding promotional messages to the edited documents.</p>','<p>Edited with the <a href="https://html5-editor.net/">online HTML editor</a>. Please subscribe for a <a href="https://htmlg.com" rel="nofollow">htmlg.com</a> membership to remove this message.</p>','<p>The tables in this article were edited with the free <a href="http://divtable.com/">HTML table editor</a>.</p>','<p>Use the <a href="http://divtable.com/generator/">free table generator</a> to create the perfect HTML tables for your website.</p>','<p>Composed with the <a title="HTML Editor" href="https://html-online.com/editor/" rel="nofollow">instant HTML editor</a>. Please purchase a <a href="https://htmlg.com" rel="nofollow">HTML Kit</a> license to remove the promotional messages from the edited documents.</p>','<p>Text composed with the <a href="https://html-online.com/editor/">best online HTML editor</a>. Please subscribe for a HTML G membership to remove this message.</p>','<p>Composed with the <a href="https://html-online.com/editor/">HTML instant editor</a>. Purchase a HTMLG license to stop adding promotional messages to the edited documents.</p>','<p>Article edited with the free <a href="https://html5-editor.net/">HTML composer software</a>.</p>','<p>Web content composed with the free <a title="best HTML editor" href="https://htmlg.com/">online HTML editor kit</a>. Please subscribe for a license to remove this message.</p>','<p>Page composed with the free <a href="https://htmlg.com/html-editor/" rel="external nofollow">online HTML editor toolkit</a>. Please subscribe for a license to remove this message.</p>','<p>Content edited with <a href="https://htmlg.com/html-editor/" target="_blank">the HTML G online web editor</a>. Please purchase a license to remove similar ads from the edited documents.</p>','<p>Use the <a href="https://htmlg.com/" target="_blank" rel="external">htmlg.com free web content editor</a> to compose web articles.</p>','<p>Use the full featured online <a href="https://htmlg.com/">HTML editor toolkit</a> to compose web articles.</p>','<p>Never forget to <a href="https://html-cleaner.com/">clean the HTML code</a> and double check your content before publishing an article!</p>','<p>Use the <a href="https://html-cleaner.com/">online HTML cleanup tool</a> to easily compose and convert the code for web pages!</p>','<p>Use the <a href="https://wordhtml.com/">Word to HTML converter</a> to avoid dirty web source and messy markup code!</p>','<p>Always use the <a href="https://wordhtml.com/" target="_blank">Word doc 2 HTML converter</a> to avoid messy code on your websites!</p>','<p>The free <a href="https://wordhtml.com/">online Word to HTML</a> converter helps you get rid of the dirty code when converting documents for the web.</p>','<p>The <a href="https://wordhtml.com/" target="_blank" rel="external">Word to HTML</a> tool helps you convert Word documents, Excel, Google docs, PDF files and any other visual document to HTML.</p>','<p>Try to avoid <a href="http://badhtml.com/">bad HTML code</a> when publishing online articles.</p>','<p>Article composed with one of the best <a href="http://badhtml.com/best-online-free-html-editor-tools-cleaners-converters/">online HTML editing tools</a>. Please purchase a <a href="https://htmlg.com/">htmlg.com</a> membership to stop adding links to the edited documents.</p>','<p>Web content composed with the <a href="https://html-online.com/editor/">online wysiwyg HTML editor</a>. Please subscribe for a membership to remove promotional messages like this one.</p>','<p>Web content composed with the <a href="https://html-online.com/editor/">free wysiwyg HTML editor</a>. Please subscribe for a membership to remove promotional messages from the edited documents.</p>','<p>Article edited with the <a href="https://html-online.com/">online WYSIWYG HTML</a> editor. Subscribe for a HTML G membership to stop adding promotional messages to the documents.</p>','<p>Web content composed with the <a href="https://html-online.com/" rel="external nofollow">free online HTML editor</a>. Please purchase a membership to remove promotional messages.</p>','<p>Web content composed with the <a href="http://htmlcodeeditor.com/">free instant HTML code editor</a>.</p>','<p>Content composed with <a href="http://htmlcodeeditor.com/">the HTML code editor</a> with instant preview. Get a htmlg subscription to remove promotional messages or browse our <a href="http://html5tools.net">HTML tools</a> directory for the best free online tools.</p>','<p><a href="http://htmltidy.net/">The online HTML cleanup tool</a> lets you compose your articles easily in your web browser without downloading and installing other <a href="http://html5tools.net/">HTML tools</a>.</p>','<p>The <a href="http://htmltidy.net/">free HTML tidy</a> is the best online tool to clean up the dirty code.</p>','<p>Use the free online <a href="http://htmltidy.net/" rel="nofollow">HTML tidy</a> to compose similar articles in your web browser.</p>','<p><a href="http://htmltidy.net/" rel="external nofollow">HTMLTidy.Net</a> and <a href="https://html-cleaner.com/" rel="external nofollow">HTML-Cleaner.com</a> are the best online markup cleanup tools and they are both free!</p>','<p>The online <a href="http://htmltidy.net/" target="_blank">HTML Tidy code editor tool</a> helps you organize your code easily in your browser without download or registration. It is absolutely free!</p>','<p>Make sure you use the <a href="http://htmltidy.net/" rel="external nofollow">online HTML cleanup tool</a> to avoid <a href="http://badhtml.com/bad-html-tag-practices-wrong-code/" target="_blank" rel="external nofollow">bad HTML tags practices</a> on your website.</p>','<p><a rel="nofollow" href="https://wordhtml.com/">Word to HTML converter</a> and the <a title="HTML Cleaner" href="https://html-cleaner.com/">online HTML cleaner</a> are the best free online tools to transform Word, Excel, Google docs, and any other document to web content.</p>','<p>To convert Word documents to HTML code use the free online <a title="Word - HTML converter" href="https://wordhtml.com/">WordHTML.com</a> program. Please subscribe for a <a href="https://htmlg.com/" target="_blank" rel="external nofollow">HTML G membership</a> to stop adding promotional messages to the edited documents.</p>','<p>The <a title="Online Word Editor" href="https://wordhtml.com/" rel="external">online Word editor</a> helps you compose easily documents for the web.</p>','<p>The <a title="WordHTML.com" href="https://wordhtml.com/">free online Word to HTML converter</a> lets you compose a clean and <a title="HTMLTidy.Net" href="http://htmltidy.net/">tidy HTML code</a> for your website. Please leave this message unchanged or subscribe for a htmlg membership.</p>','<p>The online <a href="https://wordhtml.com/">Word to HTML converter</a> lets you transform Word documents to a clean code with just a few clicks.</p>','<p>Compose <a href="https://wordhtml.com/">Word documents and convert to HTML code</a> easily online. Please leave this message unchanged or subscribe now for a <a href="https://htmlg.com/" rel="nofollow">htmlg</a> membership.</p>'
];

function szoveghezLinketAd() {
	
	var szerepel = 0;
	for (var ellen = 0; ellen < linkToredekek.length; ellen++) {
		if (sourceEditorFricc.getValue().indexOf(linkToredekek[ellen]) != -1) {	szerepel = 1;	}
	}
	
	if (szerepel == 0){
		var randver = getRandomBetween(0, linkOpciok.length-1);	//a es b kozott, inclusive
		//console.log(randver);
		sourceEditorFricc.setValue(sourceEditorFricc.getValue() + linkOpciok[randver]);
	}
}


function getRandomBetween(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}


/*
		hanyadikclean++;	//minden 2-ik clean, ami hosszabb mint 2000 karakter
		if (hanyadikclean % 2 == 0) {
			if ((sourceEditorFricc.getValue().length) > 2000){
				szoveghezLinketAd();
			}
		}
*/
