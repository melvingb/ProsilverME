//initialise the docking boxes manager
var manager = new dbxManager(
	'main',					// session ID [/-_a-zA-Z0-9/]
	'yes',					// enable box-ID based dynamic groups ['yes'|'no']
	'yes',					// hide source box while dragging ['yes'|'no']
	'button'				// toggle button element type ['link'|'button']
	);


//create new docking boxes group
var purple = new dbxGroup(
	'category',			    // container ID [/-_a-zA-Z0-9/]
	'vertical', 			// orientation ['vertical'|'horizontal'|'freeform'|'freeform-insert'|'confirm'|'confirm-insert']
	'7', 					// drag threshold ['n' pixels]
	'yes',					// restrict drag movement to container/axis ['yes'|'no']
	'10', 					// animate re-ordering [frames per transition, or '0' for no effect]
	'open', 				// default state ['open'|'closed']

	'open', 										// word for "open", as in "open this box"
	'close', 										// word for "close", as in "close this box"
	'click-down and drag to move this box', 		// sentence for "move this box" by mouse
	'click to dragg and drop this box', 					// pattern-match sentence for "(open|close) this box" by mouse
	
	'hit the enter key to select this target',		// confirm dialog sentence for "selection okay"
	'sorry, this target cannot be selected'			// confirm dialog sentence for "selection not okay"
	);


