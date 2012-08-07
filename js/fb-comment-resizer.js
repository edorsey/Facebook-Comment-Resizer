var FacebookCommentResizer = new Class({
	Implements: [Document,Options,Events],
	
	options : {
		margin: 10
	},
	
	commentBoxes : [],
	
	initialize : function(options) {
		this.setOptions(options);
		this.resizeAll();
		if (window.FB) {
			FB.Event.subscribe('xfbml.render', function() {
				this.getCommentBoxes();
				this.resizeAll();
			}.bind(this));
		}
		window.addEvent('resize', this.resizeAll.bind(this));
	},
	getCommentBoxes : function() {
		var commentBoxes = $$('.fb-comments');
		
		for (var i = 0; i < commentBoxes.length; i++) {
			var children = commentBoxes[i].getChildren();
			if (children.length > 0) {
				this.commentBoxes.include(commentBoxes[i]);
			}
		}
	},
	resizeAll : function() {
		if (this.commentBoxes.length == 0) {
			this.getCommentBoxes();
		}
		this.commentBoxes.each(function(commentBox) {
			this.resizeCommentBox(commentBox);
		}.bind(this));
	},
	resizeCommentBox : function(commentBox) {
		var width = commentBox.getParent().getSize().x - (this.options.margin * 2);
		
		commentBox.getChildren('span')[0].setStyle('width', width);
		commentBox.getElement('iframe').setStyle('width', width);
	}
});