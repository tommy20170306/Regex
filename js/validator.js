var c = console.log;

var val = {
	email: function(input){
		var reg = /^\w{1,}[@]\w{2,}[.]\w{2,}$/;    
		return reg.test(input) ;
	},
	hkid: function(input){
		var reg = /^[A-Z][0-9]{6}[(]\w{1}[)]$/;
		input = input.toUpperCase();
		
		if(reg.test(input)){
			var checksum = 0;

			for(var i=8, j=0; i>=2; i--, j++){
				if(j==0){
					checksum += (input.charCodeAt(0) - 55) * i;
				}else{
					checksum += (input.charAt(j)) * i;
				}
			}

			checksum = (324+Number(checksum))%11;

			switch(checksum){
				case 0:
					return 0 == input.charAt(8);
				case 1:
					return 'A' == input.charAt(8);
				default:
					return (11 - checksum) == input.charAt(8);
			}
		}
		return false;
	},
	image: function(input){
		var reg = /^[\w]+[.]+(jpe?g|png|gif)+$/;
		return reg.test(input);
	},
	hkphone: function(input){
		var reg = /^[2|3|5|6|9][0-9]{7}$/;
		return reg.test(input);
	},
	name: function(input){
		var reg = /^[a-zA-Z\s]*$/;
		return reg.test(input);
	},
	nameLastNamePrefix: function(input, letter){
		var reg = /[^\n|\S]([M])[a-zA-Z]{1,}\S$/;
		var reg = new RegExp('[^\\n|\\S](['+letter+'])[a-zA-Z]{1,}\\S$');
		return reg.test(input);
	}
};

c(val.email("Hello@test.ca"));
c(val.email("He@t.c"));
c(val.email("oo@bb.ss@ta.ca"));
c(val.email("eee@eee#eee@te.ta"));
c(val.hkid("A767898(6)"));
c(val.hkid("Y767982(1)"));
c(val.hkid("Y767983(A)"));
c(val.hkphone("69765678"));
c(val.hkphone("49765678"));
c(val.hkphone("6A765678"));
c(val.name("Chan Tai Man"));
c(val.name("Chan Tai M?n"));
c(val.nameLastNamePrefix("Happy Mcdonald", "M"));
c(val.nameLastNamePrefix("Mcdonald Mcdonald Happy", "M"));
c(val.image("Abc.jpg"));
c(val.image("#^&.png"));
c(val.image("gif.gif.jpg"));